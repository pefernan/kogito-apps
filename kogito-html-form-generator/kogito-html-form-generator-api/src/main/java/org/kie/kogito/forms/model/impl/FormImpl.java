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

import java.util.Collection;
import java.util.List;

import org.kie.kogito.forms.model.Field;
import org.kie.kogito.forms.model.Form;

public class FormImpl implements Form {

    private String id;
    private String title;
    private Collection<Field> fields;

    public FormImpl(String id, String title, List<Field> fields) {
        this.id = id;
        this.title = title;
        this.fields = fields;
    }

    @Override
    public String getId() {
        return id;
    }

    @Override
    public String getTitle() {
        return title;
    }

    @Override
    public Collection<Field> getFields() {
        return fields;
    }

    public FormImpl addField(Field field) {
        this.fields.add(field);
        return this;
    }
}
