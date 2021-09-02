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

import React, { useCallback, useMemo } from 'react';
import {
  FormDisplayerApi,
  FormDisplayerChannelApi,
  FormDisplayerEnvelopeApi,
  FormArgs
} from '../api';
import { ContainerType } from '@kogito-tooling/envelope/dist/api';
import { EnvelopeServer } from '@kogito-tooling/envelope-bus/dist/channel';
import { EmbeddedEnvelopeFactory } from '@kogito-tooling/envelope/dist/embedded';
import { EnvelopeBusMessage } from '@kogito-tooling/envelope-bus/dist/api';
import { init } from '../envelope';

export type Props = {
  targetOrigin: string;
  formContent: FormArgs;
};

export const EmbeddedFormDisplayer = React.forwardRef<FormDisplayerApi, Props>(
  (props, forwardedRef) => {
    const pollInit = useCallback(
      (
        // eslint-disable-next-line
        envelopeServer: EnvelopeServer<
          FormDisplayerChannelApi,
          FormDisplayerEnvelopeApi
        >,
        container: () => HTMLDivElement
      ) => {
        init({
          config: {
            containerType: ContainerType.DIV,
            envelopeId: envelopeServer.id
          },
          container: container(),
          bus: {
            postMessage<D, Type>(
              message: EnvelopeBusMessage<D, Type>,
              targetOrigin?: string,
              transfer?: any
            ) {
              window.parent.postMessage(message, '*', transfer);
            }
          }
        });
        return envelopeServer.envelopeApi.requests.formDisplayer__init(
          {
            origin: envelopeServer.origin,
            envelopeServerId: envelopeServer.id
          },
          {
            formContent: props.formContent
          }
        );
      },
      [props.formContent]
    );
    console.log('content-displayer', props.formContent);
    const refDelegate = useCallback(
      (
        envelopeServer: EnvelopeServer<
          FormDisplayerChannelApi,
          FormDisplayerEnvelopeApi
        >
      ): FormDisplayerApi => {
        return {};
      },
      []
    );

    const EmbeddedEnvelope = useMemo(() => {
      return EmbeddedEnvelopeFactory({
        api: props,
        origin: props.targetOrigin,
        refDelegate,
        pollInit,
        config: { containerType: ContainerType.DIV }
      });
    }, []);

    return <EmbeddedEnvelope ref={forwardedRef} />;
  }
);
