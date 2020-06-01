import React, { useContext } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  PageSection,
  withOuiaContext
} from '@patternfly/react-core';
import TaskConsoleContext, {
  IContext
} from '../../../context/TaskConsoleContext/TaskConsoleContext';
import { Link } from 'react-router-dom';
import PageTitleComponent from '../../Molecules/PageTitleComponent/PageTitleComponent';
import { TaskInfo } from '../../../model/TaskInfo';
import TaskFormComponent from '../../Organisms/TaskFormComponent/TaskFormComponent';

const UserTaskInstanceDetailsPage = props => {

  const context: IContext<TaskInfo> = useContext(TaskConsoleContext);

  const taskInfo = context.getActiveItem();

  return (
    <PageSection variant="light">
      <PageTitleComponent title="Task Details" />
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to={'/'}>Home</Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <TaskFormComponent taskInfo={taskInfo} successCallback={() => alert("success")} errorCallback={() => alert("error")} />
    </PageSection>
  );
};

export default withOuiaContext(UserTaskInstanceDetailsPage);
