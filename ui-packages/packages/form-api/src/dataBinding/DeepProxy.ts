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

import { Binding } from './Binding';

export class DeepProxy {
  private readonly schema: any;
  private onChange: (path: string, newValue: any, oldValue: any) => void;
  private bindingSupplier: (path: string) => Binding<any>;

  constructor(
    target: any,
    schema: any,
    bindingSupplier: (path: string) => Binding<any>,
    onChange: (path: string, newValue: any, oldValue: any) => void
  ) {
    this.schema = schema;
    this.bindingSupplier = bindingSupplier;
    this.onChange = onChange;
    return this.proxify(target, this.schema, []);
  }

  makeHandler(schema: any, path: string[]) {
    const proxifyNested = this.proxify;
    const bindingSupplier = this.bindingSupplier;
    const callback = this.onChange;
    return {
      set(target, property, value, receiver) {
        if (schema.properties[property].type === 'object') {
          value = proxifyNested(value, schema, [...path, property]);
        }
        const previousValue = target[property];

        target[property] = value;

        const propertyPath = [...path, property].join('.');

        const binding = bindingSupplier(propertyPath);

        if (binding) {
          binding.setValue(value);
        }
        if (callback) {
          callback(propertyPath, value, previousValue);
        }
        return true;
      }
    };
  }

  proxify(model: any, schema: any, path: string[]) {
    for (const [key, property] of Object.entries(schema.properties)) {
      // @ts-ignore
      if (property?.type === 'object') {
        model[key] = this.proxify(model[key] ?? {}, property, [...path, key]);
      }
    }
    return new Proxy(model, this.makeHandler(schema, path));
  }
}
