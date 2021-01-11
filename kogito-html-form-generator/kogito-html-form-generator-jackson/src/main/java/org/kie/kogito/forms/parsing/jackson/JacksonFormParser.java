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

package org.kie.kogito.forms.parsing.jackson;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import com.fasterxml.jackson.databind.JsonNode;
import org.kie.kogito.forms.model.Form;
import org.kie.kogito.forms.parsing.FormParser;
import org.kie.kogito.forms.parsing.FormParsingContext;
import org.kie.kogito.forms.parsing.FormParsingResult;
import org.kie.kogito.forms.parsing.jackson.form.JacksonFormGenerator;

@ApplicationScoped
public class JacksonFormParser implements FormParser<JsonNode> {

    private final JacksonFormGenerator formGenerator;

    @Inject
    JacksonFormParser(JacksonFormGenerator formGenerator) {
        this.formGenerator = formGenerator;
    }

    @Override
    public FormParsingResult parse(FormParsingContext<JsonNode> context) {

        ParsingContext parsingContext = new ParsingContext(context.getModel());
        Form form = formGenerator.generateForm(parsingContext);

        return new FormParsingResult(form);
    }
}
