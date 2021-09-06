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

import { Binding } from '../Binding';
import { BindingImpl } from './BindingImpl';
import { MultipleSelectElementAdapter } from './adapters';
import { CheckboxGroupAdapter } from './adapters/CheckboxGroupAdapter';

export function lookupArrayPropertyBindings(
  path: string,
  props: any,
  inputs: Element[]
): Binding<any> {
  if (inputs.length == 1) {
    if (inputs[0].tagName.toLowerCase() === 'select') {
      return new BindingImpl(
        path,
        new MultipleSelectElementAdapter(inputs[0] as HTMLSelectElement)
      );
    }
  } else if (inputs.length > 1) {
    const checks = inputs
      .filter(
        input =>
          input.tagName.toLowerCase() === 'input' &&
          (input as HTMLInputElement).type.toLowerCase() === 'checkbox'
      )
      .map(input => input as HTMLInputElement);

    if (checks.length > 0) {
      return new BindingImpl(path, new CheckboxGroupAdapter(checks));
    }
    return null;
  }

  console.log(
    `Cannot bind property '${path}' ('${props.type}'): array properties can only be bound to Multiple Selects or a Checkbox groups'`
  );
  return null;
}
