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

package org.kie.kogito.forms.parsing.jackson.form.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.Spliterator;
import java.util.Spliterators;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import javax.enterprise.context.Dependent;
import javax.enterprise.inject.Instance;
import javax.inject.Inject;

import com.fasterxml.jackson.databind.JsonNode;
import org.apache.commons.lang3.StringUtils;
import org.kie.kogito.forms.model.Field;
import org.kie.kogito.forms.model.Form;
import org.kie.kogito.forms.model.impl.FormImpl;
import org.kie.kogito.forms.parsing.jackson.ParsingContext;
import org.kie.kogito.forms.parsing.jackson.form.JacksonFormGenerator;
import org.kie.kogito.forms.parsing.jackson.properties.JsonNodeParser;
import org.kie.kogito.forms.parsing.jackson.properties.JsonPropertyType;

import static org.kie.kogito.forms.parsing.jackson.utils.Constants.PROPERTIES_PROP;
import static org.kie.kogito.forms.parsing.jackson.utils.Constants.TITLE_PROP;
import static org.kie.kogito.forms.parsing.jackson.utils.Constants.TYPE_PROP;

@Dependent
public class JacksonFormGeneratorImpl implements JacksonFormGenerator {

    private final Map<String, JsonNodeParser> parsers;

    @Inject
    public JacksonFormGeneratorImpl(final Instance<JsonNodeParser> instance) {
        this.parsers = new HashMap<>();

        for (JsonNodeParser jsonNodeParser : instance) {
            registerParser(jsonNodeParser);
        }
    }

    public void registerParser(JsonNodeParser jsonNodeParser) {
        parsers.put(jsonNodeParser.getNodeType().getName(), jsonNodeParser);
    }

    @Override
    public Form generateForm(ParsingContext context) {

        JsonNode schema = context.getSchema();

        Optional<JsonNode> typeNode = Optional.ofNullable(schema.get(TYPE_PROP));

        if(!typeNode.isPresent() || !typeNode.get().asText().equals(JsonPropertyType.OBJECT.getName())) {
            throw new IllegalArgumentException("Cannot generate form for a non-object schema");
        }

        JsonNode properties = schema.get(PROPERTIES_PROP);

        if(properties == null) {
            throw new IllegalArgumentException("Schema should have properties!");
        }

        Spliterator<Map.Entry<String, JsonNode>> spliterator = Spliterators.spliteratorUnknownSize(properties.fields(), 0);

        List<Field> formFields = StreamSupport.stream(spliterator, false)
                .map(entry -> createField(context, entry.getKey(), entry.getValue()))
                .filter(Objects::nonNull)
                .collect(Collectors.toList());

        String title = "";

        Optional<JsonNode> titleNode = Optional.ofNullable(schema.get(TITLE_PROP));

        if(titleNode.isPresent()) {
            title = StringUtils.capitalize(titleNode.get().asText(""));
        }

        return new FormImpl(context.getNamespace(), title, formFields);
    }

    private Field createField(ParsingContext context, String name, JsonNode property) {

        JsonNodeParser parser = parsers.get(property.get(TYPE_PROP).asText());

        if(parser == null) {
            return null;
        }

        return parser.parse(context, name, property);
    }
}
