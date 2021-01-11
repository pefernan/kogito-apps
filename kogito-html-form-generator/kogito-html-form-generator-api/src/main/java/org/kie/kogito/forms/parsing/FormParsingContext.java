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

package org.kie.kogito.forms.parsing;

import java.util.Optional;

public class FormParsingContext<M> {

    private M model;
    private ModelSupplier<M> modelResolver = reference -> Optional.empty();

    public FormParsingContext(M model) {
        this.model = model;
    }

    public FormParsingContext(M model, ModelSupplier<M> modelResolver) {
        this.model = model;
        this.modelResolver = modelResolver;
    }

    public M getModel() {
        return model;
    }

    private Optional<M> resolveModel(String reference) {
        return modelResolver.resolveModel(reference);
    }
}
