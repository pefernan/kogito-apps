/*
 * Copyright 2021 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { act } from 'react-dom/test-utils';
import {
  DataTable,
  getWrapper,
  LoadMore
} from '@kogito-apps/components-common';
import TestTaskInboxDriver from './mocks/TestTaskInboxDriver';
import { userTasks } from './mocks/MockData';
import TaskInbox, { TaskInboxProps } from '../TaskInbox';
import TaskInboxToolbar from '../../TaskInboxToolbar/TaskInboxToolbar';
import wait from 'waait';
import { DropdownToggleAction } from '@patternfly/react-core';

jest.mock('../../TaskInboxToolbar/TaskInboxToolbar');

const MockedComponent = (): React.ReactElement => {
  return <></>;
};

jest.mock('@kogito-apps/components-common', () => ({
  ...jest.requireActual('@kogito-apps/components-common'),
  DataTable: () => {
    return <MockedComponent />;
  },
  KogitoEmptyState: () => {
    return <MockedComponent />;
  },
  KogitoSpinner: () => {
    return <MockedComponent />;
  },
  ServerErrors: () => {
    return <MockedComponent />;
  }
}));

const getTaskInboxDriver = (items: number): TestTaskInboxDriver => {
  const driver = new TestTaskInboxDriver(userTasks.slice(0, items));
  jest.spyOn(driver, 'setInitialState');
  jest.spyOn(driver, 'applyFilter');
  jest.spyOn(driver, 'applySorting');
  jest.spyOn(driver, 'query');
  jest.spyOn(driver, 'refresh');
  jest.spyOn(driver, 'openTask');
  props.driver = driver;
  return driver;
};

let props: TaskInboxProps;

const getTaskInboxWrapper = () => {
  return getWrapper(<TaskInbox {...props} />, 'TaskInbox');
};

describe('TaskInbox tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    props = {
      isEnvelopeConnectedToChannel: true,
      driver: undefined
    };
  });

  it('Envelope not connected', async () => {
    const driver = getTaskInboxDriver(0);

    props.isEnvelopeConnectedToChannel = false;

    const wrapper = getTaskInboxWrapper();

    expect(wrapper).toMatchSnapshot();

    expect(driver.setInitialState).not.toHaveBeenCalled();
    expect(driver.query).not.toHaveBeenCalled();

    const toolbar = wrapper.find(TaskInboxToolbar);
    expect(toolbar.exists()).toBeTruthy();

    const table = wrapper.find(DataTable);
    expect(table.exists()).toBeTruthy();
    expect(table.props().isLoading).toBeTruthy();
    expect(table.props().data).toHaveLength(0);

    const loadMore = wrapper.find(LoadMore);
    expect(loadMore.exists()).toBeFalsy();
  });

  it('TaskInbox without LoadMore', async () => {
    const driver = getTaskInboxDriver(5);

    let wrapper;

    await act(async () => {
      wrapper = getTaskInboxWrapper();
      wait();
    });

    wrapper = wrapper.update();

    expect(wrapper).toMatchSnapshot();

    expect(driver.setInitialState).toHaveBeenCalled();
    expect(driver.query).toHaveBeenCalled();

    const toolbar = wrapper.find(TaskInboxToolbar);
    expect(toolbar.exists()).toBeTruthy();

    const table = wrapper.find(DataTable);
    expect(table.exists()).toBeTruthy();
    expect(table.props().isLoading).toBeFalsy();
    expect(table.props().data).toHaveLength(5);
    expect(table.props().sortBy.index).toBe(5);
    expect(table.props().sortBy.direction).toBe('desc');

    const loadMore = wrapper.find(LoadMore);
    expect(loadMore.exists()).toBeFalsy();
  });

  it('Task Inbox with LoadMore', async () => {
    const driver = getTaskInboxDriver(15);

    let wrapper;

    await act(async () => {
      wrapper = getTaskInboxWrapper();
      wait();
    });

    wrapper = wrapper.update();

    expect(wrapper).toMatchSnapshot();

    expect(driver.setInitialState).toHaveBeenCalled();
    expect(driver.query).toHaveBeenCalled();

    const toolbar = wrapper.find(TaskInboxToolbar);
    expect(toolbar.exists()).toBeTruthy();

    let dataTable = wrapper.find(DataTable);
    expect(dataTable.exists()).toBeTruthy();
    expect(dataTable.props().isLoading).toBeFalsy();
    expect(dataTable.props().data).toHaveLength(10);

    let loadMore = wrapper.find(LoadMore);
    expect(loadMore.exists()).toBeTruthy();

    await act(async () => {
      wrapper
        .find(DropdownToggleAction)
        .find('button')
        .at(0)
        .simulate('click');
      wait();
    });

    wrapper = wrapper.update().find(TaskInbox);

    expect(wrapper).toMatchSnapshot();

    dataTable = wrapper.find(DataTable);
    expect(dataTable.exists()).toBeTruthy();
    expect(dataTable.props().isLoading).toBeFalsy();
    expect(dataTable.props().data).toHaveLength(15);

    loadMore = wrapper.find(LoadMore);
    expect(loadMore.exists()).toBeFalsy();
  });
});
