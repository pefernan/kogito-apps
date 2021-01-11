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

import java.util.HashMap;
import java.util.Map;

import org.kie.kogito.forms.model.Field;
import org.kie.kogito.forms.model.InputType;

public class FieldImpl implements Field {

    private String id;
    private InputType type;
    private String label;
    private boolean readOnly = false;

    private Map<String, Object> props = new HashMap<>();

    public FieldImpl(String id, InputType type, String label) {
        this.id = id;
        this.type = type;
        this.label = label;
    }

    @Override
    public String getId() {
        return id;
    }

    @Override
    public InputType getType() {
        return type;
    }

    @Override
    public String getLabel() {
        return label;
    }

    public void setReadOnly(boolean readOnly) {
        this.readOnly = readOnly;
    }

    @Override
    public boolean isReadOnly() {
        return readOnly;
    }

    public <T> Field set(String propery, T value) {
        props.put(propery, value);
        return this;
    }

    public <T> T get(String property) {
        return (T) props.get(property);
    }
}
