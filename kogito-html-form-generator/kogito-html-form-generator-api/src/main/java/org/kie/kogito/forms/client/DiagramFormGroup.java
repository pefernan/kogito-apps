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

package org.kie.kogito.forms.client;

import java.util.Collection;

import org.kie.kogito.forms.model.Form;

public class DiagramFormGroup {

    private String groupId;
    private Collection<Form> forms;

    public DiagramFormGroup(String groupId, Collection<Form> forms) {
        this.groupId = groupId;
        this.forms = forms;
    }

    public String getGroupId() {
        return groupId;
    }

    public Collection<Form> getForms() {
        return forms;
    }
}
