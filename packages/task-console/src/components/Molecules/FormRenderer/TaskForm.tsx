import React, { useEffect, useState } from 'react';
import SpinnerComponent from '../../Atoms/SpinnerComponent/SpinnerComponent';
import FormRenderer, { IFormAction } from './FormRenderer';
import EmptyStateComponent from '../../Atoms/EmptyStateComponent/EmptyStateComponent';
import ConfirmTravelForm from './ConfirmTravel';

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

interface IOwnProps {
  task: IUserTaskInstance;
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
  model?: any;
  actions?: IFormActionDescription[];
}

const TaskForm: React.FC<IOwnProps> = ({ task, afterSubmit }) => {
  const [loading, setLoading] = useState(true);
  const [taskFormDescription, setTaskFormDescription]: [
    ITaskFormDescription,
    any
  ] = useState(null);

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
          onSubmit: (model: any) => {
            window.alert('Submiting action: ' + formAction.name);

            if (formAction.reload) {
              afterSubmit();
            }
          }
        };
      }
    );

    return (
      <FormRenderer
        title={task.name}
        schema={taskFormDescription.schema}
        model={taskFormDescription.model}
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
