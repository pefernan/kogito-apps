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

package org.kie.kogito.forms.template;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import javax.enterprise.inject.Instance;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.extension.ExtendWith;
import org.kie.kogito.forms.model.Form;
import org.kie.kogito.forms.parsing.jackson.ParsingContext;
import org.kie.kogito.forms.parsing.jackson.form.impl.JacksonFormGeneratorImpl;
import org.kie.kogito.forms.parsing.jackson.properties.JsonNodeParser;
import org.kie.kogito.forms.parsing.jackson.properties.impl.BooleanNodeParser;
import org.kie.kogito.forms.parsing.jackson.properties.impl.IntegerNodeParser;
import org.kie.kogito.forms.parsing.jackson.properties.impl.NumberPropertyParser;
import org.kie.kogito.forms.parsing.jackson.properties.impl.ObjectPropertyParser;
import org.kie.kogito.forms.parsing.jackson.properties.impl.StringPropertyParser;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.when;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@ExtendWith(MockitoExtension.class)
public class HTMLFormGeneratorTest {

    @Mock
    private Instance<JsonNodeParser> instance;

    private JacksonFormGeneratorImpl jacksonFormGenerator;

    private HTMLFormGenerator htmlFormGenerator;

    @BeforeEach
    public void init() {

        List<JsonNodeParser> parsers = Arrays.asList(new BooleanNodeParser(),
                                                     new IntegerNodeParser(),
                                                     new NumberPropertyParser(),
                                                     new StringPropertyParser());

        when(instance.iterator()).thenReturn(parsers.iterator());

        jacksonFormGenerator = new JacksonFormGeneratorImpl(instance);

        jacksonFormGenerator.registerParser(new ObjectPropertyParser(jacksonFormGenerator));

        htmlFormGenerator = new HTMLFormGenerator();

        htmlFormGenerator.init();
    }

    @Test
    public void testSimple() throws IOException {
        JsonNode node = new ObjectMapper().readTree(this.getClass().getResourceAsStream("/schemas/simple.json"));

        Form form = jacksonFormGenerator.generateForm(new ParsingContext(node));

        String result = htmlFormGenerator.generate(form, node.toString());

        System.out.println(result);
    }

    @Test
    public void testNestedForms() throws IOException {
        JsonNode node = new ObjectMapper().readTree(this.getClass().getResourceAsStream("/schemas/nestedModels.json"));

        Form form = jacksonFormGenerator.generateForm(new ParsingContext(node));

        String result = htmlFormGenerator.generate(form, node.toString());

        System.out.println(result);
    }

}
