import { Page, SkipToContent } from '@patternfly/react-core';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import HeaderComponent from '../../Organisms/PageHeaderComponent/HeaderComponent';
import DataListContainer from '../DataListContainer/DataListContainer';
import './Dashboard.css';
import DataListContainerExpandable from "../DataListContainerExpandable/DataListContainerExpandable";

const Dashboard: React.FC<{}> = () => {
  const pageId = 'main-content-page-layout-default-nav';
  const PageSkipToContent = (
    <SkipToContent href={`#${pageId}`}>Skip to Content</SkipToContent>
  );

  return (
    <React.Fragment>
      <Page
        header={<HeaderComponent />}
        skipToContent={PageSkipToContent}
        mainContainerId={pageId}
        className="page"
      >
        <Route
          exact
          path="/"
          render={() => <Redirect to="/UserTasks" />}
        />
        <Route exact path="/UserTasks" component={DataListContainerExpandable} />
        <Route exact path="/UserTasksFilters" component={DataListContainer} />
      </Page>
    </React.Fragment>
  );
};

export default Dashboard;
