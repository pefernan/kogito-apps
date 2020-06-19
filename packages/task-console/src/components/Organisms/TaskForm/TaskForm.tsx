import React, { useContext, useCallback, useEffect, useState } from 'react';

import { TaskInfo } from '../../../model/TaskInfo';
import UniformsFormRenderer from '../../Molecules/UniformsFormRenderer/UniformsFormRenderer';
import {
  FormActionDescription,
  FormDescription
} from '../../../model/FormDescription';
import TaskConsoleContext, {
  IContext
} from '../../../context/TaskConsoleContext/TaskConsoleContext';

import { isEmpty } from 'lodash';
import axios from 'axios';
import EmptyStateSpinner from '../../Atoms/SpinnerComponent/SpinnerComponent';
import EmptyStateComponent from '../../Atoms/EmptyStateComponent/EmptyStateComponent';
import TemplateFormRenderer from '../../Molecules/TemplateFormRenderer/TemplateFormRenderer';
import { FormRegistry } from '../../../services/forms/FormRegistry';

interface IOwnProps {
  taskInfo?: TaskInfo;
  successCallback?: () => void;
  errorCallback?: () => void;
}

const TaskForm: React.FC<IOwnProps> = ({
  taskInfo,
  successCallback,
  errorCallback
}) => {
  // tslint:disable: no-floating-promises
  const context: IContext<TaskInfo> = useContext(TaskConsoleContext);

  const formRegistry = new FormRegistry();

  const formTemplateUrl = formRegistry.getTaskFormPath(
    taskInfo.task.processId,
    taskInfo.task.referenceName
  );

  const [userTaskInfo, setUserTaskInfo]: [TaskInfo, any] = useState(null);
  const [taskFormDescription, setTaskFormDescription]: [
    FormDescription,
    any
  ] = useState(null);

  useEffect(() => {
    if (!userTaskInfo) {
      if (taskInfo) {
        setUserTaskInfo(taskInfo);
      } else {
        if (context.getActiveItem()) {
          setUserTaskInfo(context.getActiveItem());
        }
      }
    }
  }, []);

  useEffect(() => {
    loadTaskFormDescription();
  }, [userTaskInfo]);

  const isLoaded = () => {
    if (formTemplateUrl) {
      return true;
    }

    if (!taskFormDescription) {
      return false;
    }
    return true;
  };

  const getTaskEndpoint = () => {
    return `${userTaskInfo.processInstance.endpoint}/${userTaskInfo.task.processInstanceId}/${userTaskInfo.task.referenceName}/${userTaskInfo.task.id}`;
  };

  const loadTaskFormDescription = async () => {
    if (userTaskInfo) {
      const result = await axios.get(getTaskEndpoint() + '/form', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          crossorigin: 'true',
          'Access-Control-Allow-Origin': '*'
        }
      });

      setTaskFormDescription(result.data);
    }
  };

  const handleTaskAction = useCallback(
    async (formModel, formAction: FormActionDescription) => {
      try {
        const data = {};

        // @ts-ignore
        formAction.outputs.forEach(output => {
          data[output] = formModel[output];
        });
        // @ts-ignore
        const result = await axios.post(getTaskEndpoint(), data, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            crossorigin: 'true',
            'Access-Control-Allow-Origin': '*'
          }
        });
        if (successCallback) {
          successCallback();
        }
      } catch (e) {
        if (errorCallback) {
          errorCallback();
        }
      }
    },
    []
  );

  if (userTaskInfo) {
    if (!isLoaded()) {
      return (
        <EmptyStateSpinner
          spinnerText={'Loading form for task: ' + userTaskInfo.task.name}
        />
      );
    }

    if (formTemplateUrl) {
      return (
        <TemplateFormRenderer
          template={formTemplateUrl}
          endpoint={getTaskEndpoint()}
        />
      );
    }

    let formActions = [];
    // Adding actions if the task isn't completed
    if (userTaskInfo.task.state !== 'Completed') {
      formActions = taskFormDescription.actions.map(action => {
        return {
          id: action.name,
          label: action.name,
          primary: action.primary,
          onSubmit: model => {
            handleTaskAction(model, action);
          }
        };
      });
    }

    const outputs = JSON.parse(userTaskInfo.task.outputs);

    let formData;
    try {
      formData = !isEmpty(outputs)
        ? outputs
        : JSON.parse(userTaskInfo.task.inputs);
    } catch (e) {
      alert(e);
    }

    return (
      <UniformsFormRenderer
        form={{
          schema: JSON.parse(taskFormDescription.schema),
          model: formData,
          actions: formActions
        }}
      />
    );
  }

  return (
    <EmptyStateComponent
      iconType="warningTriangleIcon1"
      title="No form to show"
      body="Cannot find form"
    />
  );
};

export default TaskForm;
