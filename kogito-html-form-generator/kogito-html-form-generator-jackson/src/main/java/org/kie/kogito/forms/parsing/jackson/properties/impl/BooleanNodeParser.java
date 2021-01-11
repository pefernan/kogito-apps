package org.kie.kogito.forms.parsing.jackson.properties.impl;

import javax.enterprise.context.Dependent;

import com.fasterxml.jackson.databind.JsonNode;
import org.kie.kogito.forms.model.Field;
import org.kie.kogito.forms.model.impl.Checkbox;
import org.kie.kogito.forms.parsing.jackson.ParsingContext;
import org.kie.kogito.forms.parsing.jackson.properties.JsonNodeParser;
import org.kie.kogito.forms.parsing.jackson.properties.JsonPropertyType;
import org.kie.kogito.forms.parsing.jackson.utils.Utils;

@Dependent
public class BooleanNodeParser implements JsonNodeParser {

    @Override
    public JsonPropertyType getNodeType() {
        return JsonPropertyType.BOOLEAN;
    }

    @Override
    public Field parse(ParsingContext context, String name, JsonNode property) {
        return new Checkbox(Utils.resolveNestedName(name, context), name);
    }
}
