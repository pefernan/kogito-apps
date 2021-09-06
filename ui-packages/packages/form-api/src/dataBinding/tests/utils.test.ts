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

import { flattenSchema } from '../utils';

describe('Utils tests', () => {
  it('flatten schema', () => {
    const schema = {
      type: 'object',
      properties: {
        firstName: {
          type: 'string'
        },
        lastName: {
          type: 'string'
        },
        age: {
          type: 'integer'
        },
        address: {
          type: 'object',
          properties: {
            city: {
              type: 'string'
            },
            country: {
              type: 'string'
            }
          }
        }
      }
    };

    const result: Map<string, any> = flattenSchema(schema);

    expect(result.size).toEqual(6);

    expect(result.get('firstName')).toHaveProperty('type', 'string');
    expect(result.get('lastName')).toHaveProperty('type', 'string');
    expect(result.get('age')).toHaveProperty('type', 'integer');
    expect(result.get('address')).toHaveProperty('type', 'object');
    expect(result.get('address.city')).toHaveProperty('type', 'string');
    expect(result.get('address.country')).toHaveProperty('type', 'string');
  });
});
