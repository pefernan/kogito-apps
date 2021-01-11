package org.kogito.html.template.parsing.impl;

import java.io.InputStream;

import com.fasterxml.jackson.databind.JsonNode;
import org.kogito.html.template.model.Form;
import org.kogito.html.template.parsing.SchemaParser;
import org.kogito.html.template.parsing.impl.context.ParsingContextImpl;

public class SchemaParserImpl implements SchemaParser<JsonNode> {

    @Override
    public Form parse(InputStream inputStream) {

        return null;
    }

    @Override
    public Form parse(ParsingContextImpl<JsonNode> context) {
        return null;
    }
}
