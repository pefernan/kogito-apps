package org.kogito.html.template.parsing.impl.properties;

import com.fasterxml.jackson.databind.JsonNode;
import org.kogito.html.template.model.FieldSettings;
import org.kogito.html.template.parsing.impl.context.ParsingContextImpl;
import org.kogito.html.template.parsing.SchemaPropertyParser;

public class NumberPropertyParser implements SchemaPropertyParser<JsonNode, JsonNode> {

    @Override
    public String getSupportedType() {
        return "boolean";
    }

    @Override
    public FieldSettings parse(ParsingContextImpl<JsonNode> context, JsonNode property) {
        return null;
    }

}
