import React, { useContext, useEffect, useState } from 'react';
import { TaskInfo } from '../../../model/TaskInfo';
import FormRendererComponent from '../../FormRendererComponent/FormRendererComponent';
import EmptyStateSpinner from '@kogito-apps/common/src/components/Atoms/SpinnerComponent/SpinnerComponent';
import {
  FormActionDescription,
  FormDescription
} from '../../../model/FormDescription';
import TaskConsoleContext, {
  IContext
} from '../../../context/TaskConsoleContext/TaskConsoleContext';
import ConfirmTravelForm from './mocks/ConfirmTravel';
import EmptyStateComponent from '@kogito-apps/common/src/components/Atoms/EmptyStateComponent/EmptyStateComponent';

interface IOwnProps {
  taskInfo?: TaskInfo;
  callback?: () => void;
}

const TaskFormComponent: React.FC<IOwnProps> = (taskInfo?, callback?) => {
  const [loading, setLoading] = useState(true);
  const [userTaskInfo, setUserTaskInfo]: [TaskInfo, any] = useState(null);
  const [taskFormDescription, setTaskFormDescription]: [
    FormDescription,
    any
  ] = useState(null);

  const context: IContext<TaskInfo> = useContext(TaskConsoleContext);

  if (taskInfo) {
    setUserTaskInfo(taskInfo);
  } else {
    if (context.getActiveItem()) {
      setUserTaskInfo(context.getActiveItem());
    }
  }

  const loadForm = () => {
    if (userTaskInfo) {
      if (userTaskInfo.task.name === 'Confirm travel') {
        setTaskFormDescription(ConfirmTravelForm);
      }

      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => loadForm(), 1000);
  }, [userTaskInfo]);

  const handleTaskAction = async (
    formModel,
    formAction: FormActionDescription
  ) => {
    const task = userTaskInfo.task;
    const processInstance = userTaskInfo.processInstance;

    const taskId = task.id;
    const taskReferenceName = task.referenceName;
    const processInstanceId = task.processInstanceId;
    const endpoint = processInstance.endpoint;

    const url = `${endpoint}/${processInstanceId}/${taskReferenceName}/${taskId}`;

    const data = {};

    formAction.outputs.forEach(output => {
      data[output] = formModel[output];
    });

    try {
      // @ts-ignore
      const result = await axios.post(url, data, {
        headers: {
          /*'Content-Type': 'application/json',
            'Accept': 'application/json',
            'crossorigin': 'true',
            'Access-Control-Allow-Origin': '*'*/
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        }
      });
      alert('done! ' + data);
      alert('done!' + result);
      /*
      setAlertTitle('Executing task');
      setAlertType('success');
      setAlertMessage(
        'Task has successfully executed.' +
        `${_endpoint}/${processId}/${processInstanceId}/${taskReferenceName}/${taskId}`
      );
      setAlertVisible(true);*/
    } catch (error) {
      alert('Error: ' + error);
      /*setAlertTitle('Executing task');
      setAlertType('danger');
      setAlertMessage(
        'Task execution failed. Message: ' +
        `${_endpoint}/${processId}/${processInstanceId}/${taskReferenceName}/${taskId}` +
        JSON.stringify(error.message)
      );
      setAlertVisible(true);*/
    }
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
                  if (callback) {
                    callback();
                  }
                })
                .catch(() => {
                  alert('error');
                });
            }
          };
        });
      }

      return (
        <FormRendererComponent
          form={{
            schema: JSON.parse(taskFormDescription.schema),
            model: userTaskInfo.task.inputs,
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
};

export default TaskFormComponent;
