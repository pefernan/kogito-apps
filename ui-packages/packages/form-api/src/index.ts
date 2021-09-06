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

import { Form, FormApi } from './form';
import { Binding, loadBinder } from './dataBinding';

declare global {
  interface Window {
    Form: Form;
  }
}

export function open(args: {
  container?: HTMLElement;
  bindings?: Binding<any>[];
  model?: any;
  schema: any;
}): FormApi {
  const binder = loadBinder(args);
  return {
    // restart(): void {},

    dispose(): void {
      binder.dispose();
    },

    getModel(): any {
      return binder.getModel();
    },

    submit(params: Record<string, string>): void {
      console.log('submit');
    },

    updateModelProperty(path: string, newValue: any): void {
      binder.updateModelProperty(path, newValue);
    },

    onModelChangeListener(
      listener: (path: string, newValue: any, oldValue: any) => void
    ): void {
      binder.onModelChangeListener(listener);
    }
  };
}

window.Form = {
  open: open
};
