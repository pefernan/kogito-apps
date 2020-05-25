import React, { useContext } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  PageSection
} from '@patternfly/react-core';
import TaskConsoleContext, {
  IContext
} from '../../../context/TaskConsoleContext/TaskConsoleContext';
import { Link } from 'react-router-dom';
import PageTitleComponent from '../../Molecules/PageTitleComponent/PageTitleComponent';
import { TaskInfo } from '../../../model/TaskInfo';
import TaskFormComponent from '../../Organisms/TaskFormComponent/TaskFormComponent';

const UserTaskInstanceDetailsPage = props => {
  const id = props.match.params.taskId;

  const context: IContext<TaskInfo> = useContext(TaskConsoleContext);

  return (
    <PageSection variant="light">
      <PageTitleComponent title="Task Details" />
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to={'/'}>Home</Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <h1>Task Id: {id}</h1>
      {
        <div>
          <TaskFormComponent taskInfo={context.getActiveItem()} />
          <h2>task: {context.getActiveItem().task.name}</h2>
          <h2>
            process: {context.getActiveItem().processInstance.processName}
          </h2>
          <h2>endpoint: {context.getActiveItem().processInstance.endpoint}</h2>
        </div>
      }
    </PageSection>
  );
};

export default UserTaskInstanceDetailsPage;
