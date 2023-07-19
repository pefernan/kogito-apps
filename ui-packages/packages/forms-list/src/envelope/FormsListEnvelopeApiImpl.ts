/*
 * Copyright 2023 Red Hat, Inc. and/or its affiliates.
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

import { EnvelopeApiFactoryArgs } from '@kie-tools-core/envelope';
import { FormsListEnvelopeViewApi } from './FormsListEnvelopeView';
import { Association, FormsListChannelApi, FormsListEnvelopeApi } from '../api';
import { FormsListEnvelopeContext } from './FormsListEnvelopeContext';

/**
 * Implementation of the FormsListEnvelopeApi
 */
export class FormsListEnvelopeApiImpl implements FormsListEnvelopeApi {
  private view: () => FormsListEnvelopeViewApi;
  private capturedInitRequestYet = false;
  constructor(
    private readonly args: EnvelopeApiFactoryArgs<
      FormsListEnvelopeApi,
      FormsListChannelApi,
      FormsListEnvelopeViewApi,
      FormsListEnvelopeContext
    >
  ) {}

  private hasCapturedInitRequestYet() {
    return this.capturedInitRequestYet;
  }

  private ackCapturedInitRequest() {
    this.capturedInitRequestYet = true;
  }

  formsList__init = async (association: Association): Promise<void> => {
    this.args.envelopeClient.associate(
      association.origin,
      association.envelopeServerId
    );

    if (this.hasCapturedInitRequestYet()) {
      return;
    }

    this.ackCapturedInitRequest();
    this.view = await this.args.viewDelegate();
    this.view().initialize();
  };
}
