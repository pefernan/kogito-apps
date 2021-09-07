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

import { CustomBinding, DataBinder, loadBinder } from '../dataBinding';

export interface FormApi extends WithHooks {
  getModel: () => any;
  submit: (options: any) => void;
  dispose: () => void;
}

export interface WithHooks {
  // Life Cycle Hooks
  onOpen?: (ctx: FormContext) => void;
  beforeSubmit?: (model: any) => void;
  afterSubmit?: (result: SubmitResult) => void;
  onDispose?: () => void;

  // DataBinding Hooks
  updateModelProperty: (path: string, newValue: any) => void;
  onModelChange?: (path: string, newValue: any, oldValue: any) => void;
}

export class DefaultFormApi implements FormApi, WithHooks {
  private readonly databinder: DataBinder;

  constructor(databinder: DataBinder, onOpen?: (ctx: FormContext) => void) {
    this.databinder = databinder;
    this.onOpen = onOpen;
    this.init();
  }

  private init(): void {
    this.databinder.onModelChangeListener((path, newValue, oldValue) =>
      this.notifyModelChange(path, newValue, oldValue)
    );
    if (this.onOpen) {
      this.onOpen({
        model: this.databinder.getModel(),
        schema: null
      });
    }
  }

  getModel(): any {
    return this.databinder.getModel();
  }

  submit(options: any): void {
    const data = this.databinder.getModel();
    try {
      if (this.beforeSubmit) {
        this.beforeSubmit(data);
      }
    } catch (err) {
      console.log(`Aborting submit due to: `, err);
    }

    // do the submit

    if (this.afterSubmit) {
      this.afterSubmit({
        type: SubmitResultType.SUCCESS,
        info: 'All good'
      });
    }
  }

  dispose(): void {
    if (this.onDispose) {
      this.onDispose();
    }
    this.databinder.dispose();
  }

  private notifyModelChange(path, newValue, oldValue): void {
    if (this.onModelChange) {
      this.onModelChange(path, newValue, oldValue);
    }
  }

  updateModelProperty(path: string, newValue: any): void {
    this.databinder.updateModelProperty(path, newValue);
  }

  // Life Cycle Hooks
  onOpen?: (ctx: FormContext) => void;
  beforeSubmit?: (model: any) => void;
  afterSubmit?: (result: SubmitResult) => void;
  onDispose?: () => void;

  // DataBinding Hooks
  onModelChange?: (path: string, newValue: any, oldValue: any) => void;

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

export function loadFormApi(args: {
  schema: any;
  container?: HTMLElement;
  bindings?: CustomBinding<any>[];
  model?: any;
  onOpen?: (ctx: FormContext) => void;
}): FormApi {
  const binder = loadBinder(args);

  return new DefaultFormApi(binder, args.onOpen);
}
