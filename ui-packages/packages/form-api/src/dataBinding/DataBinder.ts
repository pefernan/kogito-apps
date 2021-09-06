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

import set from 'lodash/set';
import get from 'lodash/get';

import { Binding } from './Binding';

import { lookupPropertyBindings } from './bindings/BindingFactory';
import { DeepProxy } from './DeepProxy';
import { flattenSchema } from './utils';

export interface DataBinder {
  getModel: () => any;
  dispose: () => void;
  updateModelProperty: (path: string, value: any) => void;
  onModelChangeListener: (
    listener: (path: string, newValue: any, oldValue: any) => void
  ) => void;
}

class DefaultDataBinder implements DataBinder {
  private readonly model: any;
  private readonly schema: any;
  private readonly proxy: DeepProxy;
  private readonly bindings: Map<string, Binding<any>> = new Map<
    string,
    Binding<any>
  >();

  private onChangeListener: (
    path: string,
    newValue: any,
    oldValue: any
  ) => void;

  constructor(model: any, schema: any, bindings) {
    this.model = model;
    this.schema = schema;
    this.proxy = new DeepProxy(
      model,
      this.schema,
      path => this.bindings.get(path),
      (path, newValue, oldValue) => this.onModelChange(path, newValue, oldValue)
    );

    this.bind(bindings);
  }

  private bind(bindings: Binding<any>[]) {
    bindings.forEach(binding => {
      const value = get(this.proxy, binding.path, null);
      binding.setValue(value);
      binding.onChangeListener(() => {
        set(this.proxy, binding.path, binding.getValue());
      });
      this.bindings.set(binding.path, binding);
    });
  }

  getModel(): any {
    return this.model;
  }

  private onModelChange(path: string, newValue: any, oldValue: any): void {
    if (this.onChangeListener) {
      this.onChangeListener(path, newValue, oldValue);
    }
  }

  onModelChangeListener(
    listener: (path: string, newValue: any, oldValue: any) => void
  ): void {
    this.onChangeListener = listener;
  }

  updateModelProperty(path: string, value: any): void {
    set(this.proxy, path, value);
  }

  dispose(): void {
    this.bindings.forEach((binding, path) => {
      console.debug(`Disposing binding '${path}'.`);
      binding.dispose();
    });
    this.bindings.clear();
  }
}

function lookupBindings(schema: any, container?: HTMLElement): Binding<any>[] {
  const flatSchema = flattenSchema(schema);

  const formContainer = container ?? document;

  const bindings = [];
  // @ts-ignore
  for (const [path, props] of flatSchema.entries()) {
    if (props.type === 'object') {
      continue;
    }

    const inputs = formContainer.querySelectorAll(
      `[name="${path}"], [data-binding="${path}"]`
    );

    const binding = lookupPropertyBindings(path, props, Array.from(inputs));
    if (binding) {
      bindings.push(binding);
    }
  }
  return bindings;
}

export function loadBinder(args: {
  container?: HTMLElement;
  bindings?: Binding<any>[];
  model?: any;
  schema: any;
}): DataBinder {
  console.log('loadbinder');
  return new DefaultDataBinder(
    args.model ?? {},
    args.schema,
    lookupBindings(args.schema, args.container)
  );
}
