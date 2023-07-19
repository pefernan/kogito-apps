/*
 * Copyright 2023 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { MessageBusClientApi } from '@kie-tools-core/envelope-bus/dist/api';
import {
  CloudEventRequest,
  CloudEventFormChannelApi,
  CloudEventFormDriver
} from '../api';

export class CloudEventFormEnvelopeViewDriver implements CloudEventFormDriver {
  constructor(
    private readonly channelApi: MessageBusClientApi<CloudEventFormChannelApi>
  ) {}

  triggerCloudEvent(event: CloudEventRequest): Promise<void> {
    return this.channelApi.requests.cloudEventForm__triggerCloudEvent(event);
  }
}
