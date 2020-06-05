import React, { useContext } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  Grid,
  GridItem,
  PageSection,
  withOuiaContext
} from '@patternfly/react-core';
import TaskConsoleContext, {
  IContext
} from '../../../context/TaskConsoleContext/TaskConsoleContext';
import { Link } from 'react-router-dom';
import PageTitleComponent from '../../Molecules/PageTitleComponent/PageTitleComponent';
import { TaskInfo } from '../../../model/TaskInfo';
import TaskForm from '../../Organisms/TaskForm/TaskForm';

const UserTaskInstanceDetailsPage = props => {
  const context: IContext<TaskInfo> = useContext(TaskConsoleContext);

  const taskInfo = context.getActiveItem();

  return (
    <React.Fragment>
      <PageSection variant="light">
        <PageTitleComponent title="Task Details" />
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to={'/'}>Home</Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </PageSection>
      <PageSection>
        <Grid gutter="md" className="pf-u-h-100">
          <GridItem span={12} className="pf-u-h-100">
            <Card className="pf-u-h-100">
              <CardBody className="pf-u-h-100">
                <TaskForm
                  taskInfo={taskInfo}
                  successCallback={() => alert('success')}
                  errorCallback={() => alert('error')}
                />
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </PageSection>
    </React.Fragment>
  );
};

export default withOuiaContext(UserTaskInstanceDetailsPage);
