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

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import javax.enterprise.inject.Instance;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.lang3.StringUtils;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.extension.ExtendWith;
import org.kie.kogito.forms.model.Field;
import org.kie.kogito.forms.model.Form;
import org.kie.kogito.forms.model.impl.Checkbox;
import org.kie.kogito.forms.model.impl.IntegerField;
import org.kie.kogito.forms.model.impl.NestedField;
import org.kie.kogito.forms.model.impl.NumberField;
import org.kie.kogito.forms.model.impl.TextField;
import org.kie.kogito.forms.parsing.jackson.ParsingContext;
import org.kie.kogito.forms.parsing.jackson.properties.JsonNodeParser;
import org.kie.kogito.forms.parsing.jackson.properties.impl.BooleanNodeParser;
import org.kie.kogito.forms.parsing.jackson.properties.impl.IntegerNodeParser;
import org.kie.kogito.forms.parsing.jackson.properties.impl.NumberPropertyParser;
import org.kie.kogito.forms.parsing.jackson.properties.impl.ObjectPropertyParser;
import org.kie.kogito.forms.parsing.jackson.properties.impl.StringPropertyParser;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.kie.kogito.forms.parsing.jackson.ParsingContext.NAMESPACE_SEPARATOR;
import static org.mockito.Mockito.when;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@ExtendWith(MockitoExtension.class)
public class JacksonFormGeneratorImplTest {

    @Mock
    private Instance<JsonNodeParser> instance;

    private JacksonFormGeneratorImpl jacksonFormGenerator;

    @BeforeEach
    public void init() {

        List<JsonNodeParser> parsers = Arrays.asList(new BooleanNodeParser(),
                                                     new IntegerNodeParser(),
                                                     new NumberPropertyParser(),
                                                     new StringPropertyParser());

        when(instance.iterator()).thenReturn(parsers.iterator());

        jacksonFormGenerator = new JacksonFormGeneratorImpl(instance);

        jacksonFormGenerator.registerParser(new ObjectPropertyParser(jacksonFormGenerator));
    }

    @Test
    public void testInvalidModel() throws IOException {
        JsonNode node = new ObjectMapper().readTree(this.getClass().getResourceAsStream("/schemas/invalid.json"));

        Assertions.assertThatThrownBy(() -> {
            jacksonFormGenerator.generateForm(new ParsingContext(node));
        }).isInstanceOf(IllegalArgumentException.class)
                .hasMessage("Cannot generate form for a non-object schema");
    }

    @Test
    public void testSimpleModel() throws IOException {
        JsonNode node = new ObjectMapper().readTree(this.getClass().getResourceAsStream("/schemas/simple.json"));

        Form form = jacksonFormGenerator.generateForm(new ParsingContext(node));

        checkPersonForm(form, "");
    }

    @Test
    public void testNestedModels() throws IOException {
        JsonNode node = new ObjectMapper().readTree(this.getClass().getResourceAsStream("/schemas/nestedModels.json"));

        ParsingContext context = new ParsingContext(node);

        Form form = jacksonFormGenerator.generateForm(context);

        Assertions.assertThat(form)
                .isNotNull()
                .hasFieldOrPropertyWithValue("id", "")
                .hasFieldOrPropertyWithValue("title", "Big form");

        Assertions.assertThat(form.getFields())
                .isNotEmpty()
                .hasSize(2);

        Field[] fields = form.getFields().toArray(new Field[form.getFields().size()]);

        Assertions.assertThat(fields[0])
                .isInstanceOf(NestedField.class)
                .hasFieldOrPropertyWithValue("id", "person")
                .hasFieldOrPropertyWithValue("label", "person");

        Assertions.assertThat(fields[1])
                .isInstanceOf(NestedField.class)
                .hasFieldOrPropertyWithValue("id", "car")
                .hasFieldOrPropertyWithValue("label", "car");

        checkPersonForm(((NestedField) fields[0]).getNestedForm(), "person");
        checkCarForm(((NestedField) fields[1]).getNestedForm(), "car");
    }

    private void checkPersonForm(Form form, String preffix) {
        Assertions.assertThat(form)
                .isNotNull()
                .hasFieldOrPropertyWithValue("id", getFormIdProperty("", preffix))
                .hasFieldOrPropertyWithValue("title", "Person");

        Assertions.assertThat(form.getFields())
                .isNotEmpty()
                .hasSize(3);

        Field[] fields = form.getFields().toArray(new Field[form.getFields().size()]);

        Assertions.assertThat(fields[0])
                .isInstanceOf(TextField.class)
                .hasFieldOrPropertyWithValue("id", getFieldIdProperty("name", preffix))
                .hasFieldOrPropertyWithValue("label", "name");

        Assertions.assertThat(fields[1])
                .isInstanceOf(NumberField.class)
                .hasFieldOrPropertyWithValue("id", getFieldIdProperty("age", preffix))
                .hasFieldOrPropertyWithValue("label", "age");

        Assertions.assertThat(fields[2])
                .isInstanceOf(Checkbox.class)
                .hasFieldOrPropertyWithValue("id", getFieldIdProperty("married", preffix))
                .hasFieldOrPropertyWithValue("label", "married");
    }

    private void checkCarForm(Form form, String preffix) {
        Assertions.assertThat(form)
                .isNotNull()
                .hasFieldOrPropertyWithValue("id", getFormIdProperty("", preffix))
                .hasFieldOrPropertyWithValue("title", "Car");

        Assertions.assertThat(form.getFields())
                .isNotEmpty()
                .hasSize(2);

        Field[] fields = form.getFields().toArray(new Field[form.getFields().size()]);

        Assertions.assertThat(fields[0])
                .isInstanceOf(TextField.class)
                .hasFieldOrPropertyWithValue("id", getFieldIdProperty("brand", preffix))
                .hasFieldOrPropertyWithValue("label", "brand");

        Assertions.assertThat(fields[1])
                .isInstanceOf(IntegerField.class)
                .hasFieldOrPropertyWithValue("id", getFieldIdProperty("wheels", preffix))
                .hasFieldOrPropertyWithValue("label", "wheels");
    }

    private String getFormIdProperty(String id, String prefix) {
        if (StringUtils.isEmpty(prefix)) {
            return id;
        }
        return prefix;
    }

    private String getFieldIdProperty(String id, String prefix) {
        if (StringUtils.isEmpty(prefix)) {
            return id;
        }
        return prefix + NAMESPACE_SEPARATOR + id;
    }
}
