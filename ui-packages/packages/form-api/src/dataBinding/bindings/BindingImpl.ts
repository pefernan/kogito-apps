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

export interface DOMElementAdapter<T> {
  getValue: () => T;
  setValue: (value: T) => void;
  onChangeListener: (listener: () => void) => void;
  dispose: () => void;
}

export class BindingImpl<T> implements Binding<T> {
  public readonly path: string;
  private readonly adapter: DOMElementAdapter<any>;

  constructor(path: string, adapter: DOMElementAdapter<T>) {
    this.path = path;
    this.adapter = adapter;
  }

  getValue(): T {
    return this.adapter.getValue();
  }

  setValue(value: T): void {
    if (this.adapter.getValue() !== value) {
      this.adapter.setValue(value);
    }
  }

  dispose(): void {
    this.adapter.dispose();
  }

  onChangeListener(listener: () => void): void {
    this.adapter.onChangeListener(listener);
  }
}
