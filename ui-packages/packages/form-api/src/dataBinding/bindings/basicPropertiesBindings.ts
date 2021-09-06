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

import { BindingImpl } from './BindingImpl';
import {
  BooleanCheckboxElementAdapter,
  HTMLElementAdapter,
  InputElementAdapter,
  RadioGroupAdapter,
  SelectElementAdapter
} from './adapters';
import { Binding } from '../Binding';

export function lookupBasicPropertyBinding(
  path: string,
  props: any,
  inputs: Element[]
): Binding<any> {
  if (inputs.length == 1) {
    return lookupSingleInputBindings(path, props, inputs[0] as HTMLElement);
  } else {
    return lookupMultipleInputBindings(path, props, inputs);
  }
}

function lookupSingleInputBindings(
  path: string,
  props: any,
  element: HTMLElement
): Binding<any> {
  if (props.type === 'boolean') {
    return lookupBooleanBinding(path, element);
  }

  if (element.tagName.toLowerCase() === 'input') {
    const input: HTMLInputElement = element as HTMLInputElement;

    if (input.type === 'radio') {
      return new BindingImpl(path, new RadioGroupAdapter([input]));
    }

    return new BindingImpl(path, new InputElementAdapter(input));
  }

  if (element.tagName.toLowerCase() === 'select') {
    return new BindingImpl(
      path,
      new SelectElementAdapter(element as HTMLSelectElement)
    );
  }

  console.warn(
    `Binding property '${path}' to an unexpected element '${element.tagName}'`
  );

  return new BindingImpl(path, new HTMLElementAdapter(element as HTMLElement));
}

function lookupMultipleInputBindings(
  path: string,
  props: any,
  inputs: Element[]
): Binding<any> {
  const radios = inputs
    .filter(
      input =>
        input.tagName.toLowerCase() === 'input' &&
        (input as HTMLInputElement).type.toLowerCase() === 'radio'
    )
    .map(input => input as HTMLInputElement);

  if (radios.length > 0) {
    return new BindingImpl(path, new RadioGroupAdapter(radios));
  }

  console.log(
    `Cannot bind property '${path}' ('${props.type}'): Simple properties can only be bound to single inputs or a radio groups'`
  );
  return null;
}

function lookupBooleanBinding(
  path: string,
  element: HTMLElement
): Binding<any> {
  if (element.tagName.toLowerCase() === 'input') {
    const input: HTMLInputElement = element as HTMLInputElement;
    if (input.type === 'checkbox') {
      return new BindingImpl(path, new BooleanCheckboxElementAdapter(input));
    }
    return new BindingImpl(path, new InputElementAdapter(input));
  }

  if (element.tagName.toLowerCase() === 'select') {
    return new BindingImpl(
      path,
      new SelectElementAdapter(element as HTMLSelectElement)
    );
  }

  console.warn(
    `Binding boolean property '${path}' to an unexpected element '${element.tagName}'`
  );

  return new BindingImpl(path, new HTMLElementAdapter(element as HTMLElement));
}
