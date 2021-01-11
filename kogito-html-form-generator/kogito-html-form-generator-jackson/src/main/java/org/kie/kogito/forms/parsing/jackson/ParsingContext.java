package org.kie.kogito.forms.parsing.jackson;

import com.fasterxml.jackson.databind.JsonNode;
import org.kie.kogito.forms.parsing.jackson.utils.Utils;

public class ParsingContext {

    public static final String NAMESPACE_SEPARATOR = ".";

    private String namespace = "";
    private JsonNode schema;
    private boolean isReadOnly;

    public ParsingContext(JsonNode schema) {
        this.schema = schema;
    }

    private ParsingContext(String namespace, JsonNode schema) {
        this.namespace = namespace;
        this.schema = schema;
    }

    public String getNamespace() {
        return namespace;
    }

    public JsonNode getSchema() {
        return schema;
    }

    public boolean isReadOnly() {
        return isReadOnly;
    }

    public ParsingContext nestedContext(String nestedId, JsonNode nested) {
        return new ParsingContext(Utils.resolveNestedName(nestedId, this), nested);
    }

}
