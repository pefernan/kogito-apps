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

export class SelectElementAdapter implements DOMElementAdapter<any> {
  public readonly select: HTMLSelectElement;
  private listener: () => void;

  constructor(select: HTMLSelectElement) {
    this.select = select;
  }

  getValue(): any {
    return this.select.value;
  }

  setValue(value: any): void {
    this.select.value = value;
  }

  onChangeListener(listener: () => void): void {
    this.listener = listener;
    this.select.addEventListener('change', this.listener);
  }

  dispose(): void {
    this.select.removeEventListener('change', this.listener);
  }
}

export class MultipleSelectElementAdapter implements DOMElementAdapter<any[]> {
  public readonly select: HTMLSelectElement;
  private listener: () => void;

  constructor(select: HTMLSelectElement) {
    this.select = select;
  }

  getValue(): any[] {
    const options = Array.from(this.select.selectedOptions);
    return options.map(option => option.value);
  }

  setValue(value: any[]): void {
    const options = Array.from(this.select.options);
    options.forEach(
      option => (option.selected = value && value.includes(option.value))
    );
  }

  onChangeListener(listener: () => void): void {
    this.listener = listener;
    this.select.addEventListener('change', this.listener);
  }

  dispose(): void {
    this.select.removeEventListener('change', this.listener);
  }
}
