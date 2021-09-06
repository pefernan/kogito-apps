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

import { DOMElementAdapter } from '../BindingImpl';

export class BooleanCheckboxElementAdapter
  implements DOMElementAdapter<boolean> {
  public readonly element: HTMLInputElement;
  private listener: () => void;

  constructor(element: HTMLInputElement) {
    this.element = element;
  }

  getValue(): boolean {
    return this.element.checked;
  }

  setValue(value: boolean): void {
    this.element.checked = value;
  }

  onChangeListener(listener: () => void): void {
    this.listener = listener;
    this.element.addEventListener('change', this.listener);
  }

  dispose(): void {
    this.element.removeEventListener('change', this.listener);
  }
}
