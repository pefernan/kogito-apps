import React, { useCallback, useEffect, useState } from 'react';
import SpinnerComponent from '../../Atoms/SpinnerComponent/SpinnerComponent';
import FormRenderer, { IFormAction } from './FormRenderer';
import EmptyStateComponent from '../../Atoms/EmptyStateComponent/EmptyStateComponent';
import ConfirmTravelForm from './ConfirmTravel';
import { isEmpty } from 'lodash';
import axios from 'axios';

interface IUserTaskInstance {
  id: string;
  description: string;
  name: string;
  priority: string;
  processInstanceId: string;
  processId: string;
  rootProcessInstanceId;
  rootProcessId;
  state: string;
  actualOwner: string;
  adminGroups: string;
  adminUsers: string;
  completed: boolean;
  started: string;
  excludedUsers: string;
  potentialGroups: string;
  potentialUsers: string;
  inputs: string;
  outputs: string;
  referenceName: string;
}

interface IProcessInstance {
  id: string;
  processId: string;
  processName?: string;
  endpoint: string;
}

interface IOwnProps {
  task: IUserTaskInstance;
  processInstance: IProcessInstance;
  afterSubmit: () => void;
}

interface IFormActionDescription {
  name: string;
  endpoint: string;
  payload: boolean;
  reload: boolean;
}

export interface ITaskFormDescription {
  schema: any;
  actions?: IFormActionDescription[];
}

const TaskForm: React.FC<IOwnProps> = ({
  task,
  processInstance,
  afterSubmit
}) => {
  const [loading, setLoading] = useState(true);
  const [taskFormDescription, setTaskFormDescription]: [
    ITaskFormDescription,
    any
  ] = useState(null);

  const handleExecuteTask = useCallback(
    async (formModel, afterSubmitAction) => {
      const taskId = task.id;
      const taskReferenceName = task.referenceName;
      const processInstanceId = task.processInstanceId;
      const endpoint = processInstance.endpoint;

      const url = `${endpoint}/${processInstanceId}/${taskReferenceName}/${taskId}`;

      delete formModel.NodeName;
      delete formModel.Priority;
      delete formModel.Skippable;
      delete formModel.TaskName;
      delete formModel.hotel;

      const data = JSON.stringify(formModel);
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
        alert('done!' + result);

        if (afterSubmitAction) {
          afterSubmitAction();
        }
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
    },
    []
  );

  const loadForm = () => {
    if (task.name === 'Confirm travel') {
      setTaskFormDescription(ConfirmTravelForm);
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => loadForm(), 1000);
  }, []);

  if (loading) {
    return <SpinnerComponent spinnerText="Loading Task Form" />;
  }

  if (taskFormDescription) {
    const actions: IFormAction[] = taskFormDescription.actions.map(
      formAction => {
        return {
          id: formAction.name,
          label: formAction.name,
          clearAfterSubmit: formAction.reload,
          // tslint:disable-next-line:no-shadowed-variable
          onSubmit: (formModel: any) => {
            handleExecuteTask(formModel, () => {
              if (formAction.reload) {
                afterSubmit();
              }
            });
          }
        };
      }
    );

    const outputs = JSON.parse(task.outputs);

    const model = !isEmpty(outputs) ? outputs : JSON.parse(task.inputs);

    return (
      <FormRenderer
        title={task.name}
        schema={taskFormDescription.schema}
        model={model}
        actions={actions}
      />
    );
  }

  return (
    <EmptyStateComponent
      iconType="warningTriangleIcon"
      title="Oops... error while loading"
      body={'Unable to load form for task: ' + task.id}
    />
  );
};

export default TaskForm;
