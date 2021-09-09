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

import * as Babel from '@babel/standalone';

export function transpileReactCode(source: string, formName: string) {
  const reactReg = /import React, {[^}]*}.*(?='react').*/gim;
  const patternflyReg = /import {[^}]*}.*(?='@patternfly\/react-core').*/gim;
  const regexvalueReact = new RegExp(reactReg);
  const reactImport = regexvalueReact.exec(source);
  const reg = /\{([^)]+)\}/;
  const reactElements = reg.exec(reactImport[0])[1];
  const regexvaluePat = new RegExp(patternflyReg);
  const patternflyImport = regexvaluePat.exec(source);
  const patternflyElements = reg.exec(patternflyImport[0])[1];

  const trimmedSource = source
    .split(reactReg)
    .join('')
    .trim()
    .split(patternflyReg)
    .join('')
    .trim();

  const formComponentName = trimmedSource.split(':')[0].split('const ')[1];

  const compiledReact = Babel.transform(trimmedSource, {
    presets: [
      'react',
      [
        'typescript',
        {
          allExtensions: true,
          isTSX: true
        }
      ]
    ]
  }).code;

  const content = `
        const {${reactElements}} = React;
        const {${patternflyElements}} = PatternFlyReact;
        
        ${compiledReact}
        
          const target = document.getElementById("${formName}");
          const element = window.React.createElement(${formComponentName}, {});
          window.ReactDOM.render(element, target);
        `;

  return content;
}
