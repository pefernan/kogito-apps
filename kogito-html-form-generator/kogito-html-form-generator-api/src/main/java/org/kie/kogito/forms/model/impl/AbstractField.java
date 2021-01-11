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

package org.kie.kogito.forms.model.impl;

import org.kie.kogito.forms.model.Field;
import org.kie.kogito.forms.model.InputType;

public abstract class AbstractField implements Field {

    private InputType type;
    private String id;
    private String label;
    private boolean readOnly;

    public AbstractField(InputType type, String id, String label) {
        this.type = type;
        this.id = id;
        this.label = label;
    }

    @Override
    public InputType getType() {
        return type;
    }

    public String getId() {
        return id;
    }

    @Override
    public String getLabel() {
        return label;
    }

    @Override
    public boolean isReadOnly() {
        return readOnly;
    }

    public Field setReadOnly(boolean readOnly) {
        this.readOnly = readOnly;
        return this;
    }
}
