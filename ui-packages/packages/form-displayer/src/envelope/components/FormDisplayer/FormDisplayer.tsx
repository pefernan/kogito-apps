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

import React, { useEffect, useRef } from 'react';
import { FormArgs, FormInfo } from '../../../api';
import ReactFormRenderer from '../ReactFormRenderer/ReactFormRenderer';
import HtmlFormRenderer from '../HtmlFormRenderer/HtmlFormRenderer';
import {
  FormApi,
  InitArgs,
  InternalFormDisplayerApi,
  SubmitResultType
} from '../api';
import { ActionList, Button } from '@patternfly/react-core';

interface FormDisplayerProps {
  isEnvelopeConnectedToChannel: boolean;
  content: FormArgs;
  config: FormInfo;
}

const FormDisplayer: React.FC<FormDisplayerProps> = ({
  isEnvelopeConnectedToChannel,
  content,
  config
}) => {
  // @ts-ignore
  const formApiRef = useRef<InternalFormDisplayerApi>(null);

  const init = () => {
    const args: InitArgs = {
      data: {
        candidate: {
          name: 'User',
          email: 'user@email.com',
          salary: 15000,
          skills: 'Java, Kogito'
        }
      },
      ctx: {
        task: {
          id: 123456,
          name: 'Task Name'
        },
        schema: {},
        phases: ['complete', 'start']
      }
    };
    formApiRef.current?.onOpen(args);
  };

  useEffect(() => {
    console.log('FormDisplayer: ', formApiRef);
  }, [formApiRef]);

  const doSubmit = (success: boolean) => {
    const formApi: FormApi = formApiRef.current;

    if (!formApi) {
      console.error('Cannot submit form: Form FormBridge is missing');
      return;
    }

    if (formApi.beforeSubmit) {
      try {
        formApi.beforeSubmit();
        const data = formApi.getFormData();
        console.log('Submitting Form: ', data);
        formApi.afterSubmit({
          result: success ? SubmitResultType.SUCCESS : SubmitResultType.ERROR,
          info: 'bla bla bla'
        });
      } catch (err) {
        console.error('Cannot submit form: error on bridge', err);
      }
    }
  };

  if (!isEnvelopeConnectedToChannel || !config) {
    return <></>;
  }

  return (
    <>
      {config.type === 'TSX' ? (
        <ReactFormRenderer
          content={content}
          doInitForm={() => init()}
          ref={formApiRef}
        />
      ) : (
        <HtmlFormRenderer
          content={content}
          config={config}
          doInitForm={() => init()}
          ref={formApiRef}
        />
      )}
      <ActionList>
        <Button onClick={() => init()} isDisabled={true}>
          Init
        </Button>
        <Button onClick={() => doSubmit(true)} variant="secondary">
          Submit Success
        </Button>
        <Button onClick={() => doSubmit(false)} variant="secondary">
          Submit Failure
        </Button>
      </ActionList>
    </>
  );
};

export default FormDisplayer;
