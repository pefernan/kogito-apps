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

import { Binding } from '../dataBinding';

export interface Form {
  open(args: { container?: HTMLElement; bindings?: Binding<any>[] }): FormApi;
}

export interface FormApi {
  getModel: () => any;
  submit: (options: any) => void;
  dispose: () => void;
  // restart: () => void;

  // Life Cycle Hooks
  onOpen?: (ctx: FormContext) => void;
  beforeSubmit?: (model: any) => void;
  afterSubmit?: (result: SubmitResult) => void;
  onDispose?: () => void;

  // DataBinding Hooks
  updateModelProperty: (path: string, newValue: any) => void;
  onModelChangeListener: (
    listener: (path: string, newValue: any, oldValue: any) => void
  ) => void;
}

export interface FormContext {
  schema: any;
  model?: any;
}

export enum SubmitResultType {
  SUCCESS,
  ERROR
}

export interface SubmitResult {
  type: SubmitResultType;
  info: any;
}
