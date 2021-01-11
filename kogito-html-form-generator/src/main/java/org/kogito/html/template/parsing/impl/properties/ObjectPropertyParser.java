package org.kogito.html.template.parsing.impl.properties;

import com.fasterxml.jackson.databind.JsonNode;
import org.kogito.html.template.model.Field;
import org.kogito.html.template.parsing.impl.context.ParsingContextImpl;
import org.kogito.html.template.parsing.SchemaPropertyParser;

public class ObjectPropertyParser implements SchemaPropertyParser<JsonNode, JsonNode> {

    @Override
    public String getSupportedType() {
        return "object";
    }

    @Override
    public Field parse(ParsingContextImpl<JsonNode> context, JsonNode property) {
        return null;
    }

}
