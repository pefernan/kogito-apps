package org.kie.kogito.forms.parsing.jackson.properties.impl;

import java.util.Optional;

import javax.enterprise.context.Dependent;

import com.fasterxml.jackson.databind.JsonNode;
import org.kie.kogito.forms.model.Field;
import org.kie.kogito.forms.model.impl.DateField;
import org.kie.kogito.forms.model.impl.EmailField;
import org.kie.kogito.forms.model.impl.TextField;
import org.kie.kogito.forms.parsing.jackson.ParsingContext;
import org.kie.kogito.forms.parsing.jackson.properties.JsonNodeParser;
import org.kie.kogito.forms.parsing.jackson.properties.JsonPropertyType;
import org.kie.kogito.forms.parsing.jackson.utils.Utils;

import static org.kie.kogito.forms.parsing.jackson.utils.Constants.DATE;
import static org.kie.kogito.forms.parsing.jackson.utils.Constants.DATE_TIME;
import static org.kie.kogito.forms.parsing.jackson.utils.Constants.DATE_TIME_LOCAL;
import static org.kie.kogito.forms.parsing.jackson.utils.Constants.EMAIL;
import static org.kie.kogito.forms.parsing.jackson.utils.Constants.FORMAT_PROP;
import static org.kie.kogito.forms.parsing.jackson.utils.Constants.TIME;

@Dependent
public class StringPropertyParser implements JsonNodeParser {

    @Override
    public JsonPropertyType getNodeType() {
        return JsonPropertyType.STRING;
    }

    @Override
    public Field parse(ParsingContext context, String name, JsonNode property) {

        String id = Utils.resolveNestedName(name, context);

        Optional<JsonNode> format = Optional.ofNullable(property.get(FORMAT_PROP));

        if(format.isPresent()) {
            switch (format.get().asText()) {
                case DATE: return new DateField(id, name, DATE);
                case DATE_TIME: return new DateField(id, name, DATE_TIME_LOCAL);
                case TIME: return new DateField(id, name, TIME);
                case EMAIL: return new EmailField(id, name);
            }
        }

        return new TextField(id, name);
    }
}
