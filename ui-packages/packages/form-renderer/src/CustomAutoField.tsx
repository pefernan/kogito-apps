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

// @ts-ignore
import * as React from 'react';
import invariant from 'invariant';
import {
  AutoField,
  BoolField,
  DateField,
  ListField,
  NestField,
  NumField,
  RadioField,
  SelectField,
  TextField
} from 'uniforms-patternfly';
import { createAutoField } from 'uniforms/es5/createAutoField';

export type AutoFieldProps = Parameters<typeof AutoField>[0];

const CustomAutoField = createAutoField(props => {
  if (props.allowedValues) {
    return props.checkboxes && props.fieldType !== Array
      ? RadioField
      : SelectField;
  }

  switch (props.fieldType) {
    case Array:
      return ListField;
    case Boolean:
      return BoolField;
    case Date:
      return DateField;
    case Number:
      return NumField;
    case Object:
      return NestField;
    case String:
      return TextField;
  }

  return invariant(false, 'Unsupported field type: %s', props.fieldType);
});

export default CustomAutoField;
