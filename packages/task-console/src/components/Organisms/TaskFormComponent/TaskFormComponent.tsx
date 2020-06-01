import React, { useContext, useEffect, useState } from 'react';
import { TaskInfo } from '../../../model/TaskInfo';
import FormRendererComponent from '../../Molecules/FormRendererComponent/FormRendererComponent';
import EmptyStateSpinner from '@kogito-apps/common/src/components/Atoms/SpinnerComponent/SpinnerComponent';
import {
  FormActionDescription,
  FormDescription
} from '../../../model/FormDescription';
import TaskConsoleContext, {
  IContext
} from '../../../context/TaskConsoleContext/TaskConsoleContext';
import EmptyStateComponent from '@kogito-apps/common/src/components/Atoms/EmptyStateComponent/EmptyStateComponent';

import { isEmpty } from 'lodash';
import axios from 'axios';

interface IOwnProps {
  taskInfo?: TaskInfo;
  successCallback?: () => void;
  errorCallback?: () => void;
}

const TaskFormComponent: React.FC<IOwnProps> = ({ taskInfo, successCallback, errorCallback }) => {
    const context: IContext<TaskInfo> = useContext(TaskConsoleContext);

    const [taskEndpoint, setTaskEndpoint] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userTaskInfo, setUserTaskInfo]: [TaskInfo, any] = useState(null);
    const [taskFormDescription, setTaskFormDescription]: [FormDescription, any] = useState(null);

    if (!userTaskInfo) {
      if (taskInfo) {
        setUserTaskInfo(taskInfo);
      } else {
        if (context.getActiveItem()) {
          setUserTaskInfo(context.getActiveItem());
        }
      }
    }

    const loadForm = async () => {
      if (userTaskInfo) {

        const endpoint = `${userTaskInfo.processInstance.endpoint}/${taskInfo.task.processInstanceId}/${taskInfo.task.referenceName}/${taskInfo.task.id}`;

        setTaskEndpoint(endpoint);

        const result = await axios.get(endpoint + '/form', {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'crossorigin': 'true',
            'Access-Control-Allow-Origin': '*'
          }
        });

        setTaskFormDescription(result.data);

        setLoading(false);
      }
    };

    useEffect(() => {
      loadForm();
    }, [userTaskInfo]);

    const handleTaskAction = (
      formModel,
      formAction: FormActionDescription
    ) => {

      const data = {};

      formAction.outputs.forEach(output => {
        data[output] = formModel[output];
      });

      return axios.post(taskEndpoint, data, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'crossorigin': 'true',
          'Access-Control-Allow-Origin': '*'
        }
      });
    };

    if (userTaskInfo) {
      if (loading) {
        return (
          <EmptyStateSpinner
            spinnerText={'Loading form for task: ' + userTaskInfo.task.name}
          />
        );
      }

      if (taskFormDescription) {
        let formActions = [];
        // Adding actions if the task isn't completed
        if (userTaskInfo.task.state !== 'Completed') {
          formActions = taskFormDescription.actions.map(action => {
            return {
              id: action.name,
              label: action.name,
              primary: action.primary,
              onSubmit: model => {
                handleTaskAction(model, action)
                  .then(() => {
                    if (successCallback) {
                      successCallback();
                    }
                  })
                  .catch(() => {
                    if (errorCallback) {
                      errorCallback();
                    }
                  });
              }
            };
          });
        }

        const outputs = JSON.parse(userTaskInfo.task.outputs);
        let formData;
        try {
          formData = !isEmpty(outputs) ? outputs : JSON.parse(userTaskInfo.task.inputs);
        } catch (e) {
          alert(e);
        }

        return (
          <FormRendererComponent
            form={{
              schema: JSON.parse(taskFormDescription.schema),
              model: formData,
              actions: formActions
            }}
          />
        );
      }
    }

    return (
      <EmptyStateComponent
        iconType="warningTriangleIcon1"
        title="No form to show"
        body="Cannot find form"
      />
    );
  }
;

export default TaskFormComponent;
