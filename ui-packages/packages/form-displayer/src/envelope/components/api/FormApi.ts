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

declare global {
  interface Window {
    Form: {
      openForm: (config: FormConfig) => FormApi;
    };
  }
}

export interface FormConfig {
  onOpen?: (args: InitArgs) => void;
  [key: string]: any;
}

export interface FormApi {
  beforeSubmit?: () => void;
  afterSubmit?: (result: SubmitResult) => void;
  getFormData?: () => any;
}

export interface InternalFormDisplayerApi extends FormApi {
  onOpen: (args: InitArgs) => void;
}

export class InternalFormDisplayerApiImpl implements InternalFormDisplayerApi {
  private readonly wrapped: FormApi;
  private readonly onOpenCallback: (args: InitArgs) => void;

  constructor(api: FormApi, onOpenCallback: (args: InitArgs) => void) {
    this.wrapped = api;
    this.onOpenCallback = onOpenCallback;
  }

  onOpen(args: InitArgs): void {
    if (this.onOpenCallback) {
      this.onOpenCallback(args);
    }
  }

  afterSubmit(result: SubmitResult): void {
    if (this.wrapped.afterSubmit) {
      this.wrapped.afterSubmit(result);
    }
  }

  beforeSubmit(): void {
    if (this.wrapped.beforeSubmit) {
      this.wrapped.beforeSubmit();
    }
  }

  getFormData(): any {
    if (this.wrapped.getFormData) {
      this.wrapped.getFormData();
    }
    return null;
  }
}

export interface InitArgs {
  data: any;
  ctx: any;
}

export enum SubmitResultType {
  SUCCESS = 'success',
  ERROR = 'error'
}

export interface SubmitResult {
  result: SubmitResultType;
  info: any;
}
