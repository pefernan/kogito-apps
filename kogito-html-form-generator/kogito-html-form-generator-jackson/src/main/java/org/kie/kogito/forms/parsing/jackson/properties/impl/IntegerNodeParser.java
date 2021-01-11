package org.kie.kogito.forms.parsing.jackson.properties.impl;

import javax.enterprise.context.Dependent;

import com.fasterxml.jackson.databind.JsonNode;
import org.kie.kogito.forms.model.Field;
import org.kie.kogito.forms.model.impl.IntegerField;
import org.kie.kogito.forms.parsing.jackson.ParsingContext;
import org.kie.kogito.forms.parsing.jackson.properties.JsonNodeParser;
import org.kie.kogito.forms.parsing.jackson.properties.JsonPropertyType;
import org.kie.kogito.forms.parsing.jackson.utils.Utils;

@Dependent
public class IntegerNodeParser implements JsonNodeParser {

    @Override
    public JsonPropertyType getNodeType() {
        return JsonPropertyType.INTEGER;
    }

    @Override
    public Field parse(ParsingContext context, String name, JsonNode property) {
        return new IntegerField(Utils.resolveNestedName(name, context), name);
    }
}
