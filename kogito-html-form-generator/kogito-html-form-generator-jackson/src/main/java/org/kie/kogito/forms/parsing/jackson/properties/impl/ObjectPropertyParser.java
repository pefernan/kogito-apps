package org.kie.kogito.forms.parsing.jackson.properties.impl;

import javax.enterprise.context.Dependent;
import javax.inject.Inject;

import com.fasterxml.jackson.databind.JsonNode;
import org.kie.kogito.forms.model.Field;
import org.kie.kogito.forms.model.Form;
import org.kie.kogito.forms.model.impl.NestedField;
import org.kie.kogito.forms.parsing.jackson.ParsingContext;
import org.kie.kogito.forms.parsing.jackson.form.JacksonFormGenerator;
import org.kie.kogito.forms.parsing.jackson.properties.JsonNodeParser;
import org.kie.kogito.forms.parsing.jackson.properties.JsonPropertyType;

@Dependent
public class ObjectPropertyParser implements JsonNodeParser {

    private JacksonFormGenerator jacksonFormGenerator;

    @Inject
    public ObjectPropertyParser(JacksonFormGenerator jacksonFormGenerator) {
        this.jacksonFormGenerator = jacksonFormGenerator;
    }

    @Override
    public JsonPropertyType getNodeType() {
        return JsonPropertyType.OBJECT;
    }

    @Override
    public Field parse(ParsingContext context, String name, JsonNode property) {

        ParsingContext nestedContext = context.nestedContext(name, property);

        Form nestedForm = jacksonFormGenerator.generateForm(nestedContext);

        return new NestedField(name, name, nestedForm);
    }
}
