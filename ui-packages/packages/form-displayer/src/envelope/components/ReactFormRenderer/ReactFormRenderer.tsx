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

import React, { useEffect, useImperativeHandle, useState } from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import * as Patternfly from '@patternfly/react-core';
import { FormArgs } from '../../../api';
import {
  FormApi,
  FormConfig,
  InternalFormDisplayerApi,
  InternalFormDisplayerApiImpl
} from '../api';
import { transpileReactCode } from './utils/ReactDisplayerUtils';

import Text = Patternfly.Text;
import TextContent = Patternfly.TextContent;
import TextVariants = Patternfly.TextVariants;

interface ReactFormRendererProps {
  content: FormArgs;
  doInitForm: () => void;
}

window.React = React;
window.ReactDOM = ReactDOM;
// @ts-ignore
window.PatternFlyReact = Patternfly;

export const ReactFormRenderer = React.forwardRef<
  InternalFormDisplayerApi,
  ReactFormRendererProps
>(({ content, doInitForm }, forwardedRef) => {
  const [source, setSource] = useState<string>(null);
  const [formApi, setFormApi] = useState<InternalFormDisplayerApi>(null);
  const [errorMessage, setErrorMessage] = useState<any>(null);

  const doOpenForm = (config: FormConfig): FormApi => {
    const api: FormApi = {};
    setFormApi(new InternalFormDisplayerApiImpl(api, config.onOpen));
    return api;
  };

  useEffect(() => {
    window.Form = {
      openForm: doOpenForm
    };
  }, []);

  useEffect(() => {
    if (content && content.source) {
      try {
        const transpiledCode = transpileReactCode(
          content.source['source-content'],
          content.name
        );
        setSource(transpiledCode);
      } catch (e) {
        setErrorMessage(e);
      }
    }
  }, [content]);

  useEffect(() => {
    if (source) {
      const container: HTMLElement = document.getElementById('formContainer');
      container.innerHTML = '';
      const id = content.name;
      const formContainer: HTMLElement = document.createElement('div');
      formContainer.id = id;

      container.appendChild(formContainer);
      const scriptElement: HTMLScriptElement = document.createElement('script');
      scriptElement.type = 'module';
      scriptElement.text = source;

      container.appendChild(scriptElement);
    }
  }, [source]);

  useImperativeHandle(forwardedRef, () => formApi, [formApi]);

  useEffect(() => {
    // TODO: remove me this is for testing
    if (formApi) {
      doInitForm();
    }
  }, [formApi]);

  return (
    <>
      {_.isEmpty(errorMessage) ? (
        <div
          style={{
            height: '100%'
          }}
          id={'formContainer'}
        >
          {}
        </div>
      ) : (
        <>
          <TextContent>
            <Text component={TextVariants.h2} className="pf-u-danger-color-100">
              {errorMessage.name}
            </Text>
          </TextContent>
          <TextContent>
            <Text
              component={TextVariants.blockquote}
              className="pf-u-danger-color-100"
            >
              {errorMessage.message}
            </Text>
          </TextContent>
        </>
      )}
    </>
  );
});

export default ReactFormRenderer;
