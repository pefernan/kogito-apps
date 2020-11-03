package org.kogito.html.template.parsing.impl;

import java.io.InputStream;

import com.fasterxml.jackson.databind.JsonNode;
import org.kogito.html.template.model.FormSettings;
import org.kogito.html.template.parsing.SchemaParser;
import org.kogito.html.template.parsing.impl.context.ParsingContextImpl;

public class SchemaParserImpl implements SchemaParser<JsonNode> {

    @Override
    public FormSettings parse(InputStream inputStream) {

        return null;
    }

    @Override
    public FormSettings parse(ParsingContextImpl<JsonNode> context) {
        return null;
    }
}
