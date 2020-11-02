package org.kogito.html.visit;

import com.fasterxml.jackson.databind.JsonNode;
import org.apache.commons.lang3.StringUtils;

public class SchemaVisitor {

    public static final String NAMESPACE_SEPARATOR = "___";
    public static final String PROPERTIES_PROP = "properties";

    public void visit(JsonNode node) {
        visit(new VisitorContext("", node));
    }

    private void visit(VisitorContext context) {
        if(!context.node.isObject()) {
            throw new IllegalArgumentException("Node should be an object!");
        }

        String toPrint;

        if(StringUtils.isEmpty(context.namespace)) {
            toPrint = "Root";
        } else {
            toPrint = context.namespace;
        }
        System.out.println("visit: " + toPrint);

        JsonNode properties = context.node.get(PROPERTIES_PROP);

        if(properties == null) {
            throw new IllegalArgumentException("Node should have properties!");
        }

        properties.fields().forEachRemaining(field -> visitProperty(context, field.getKey(), field.getValue()));
    }

    private void visitProperty(VisitorContext context, String name, JsonNode property) {
        System.out.println("property: " + name);
        System.out.println("type: " + property.get("type"));
        if(property.get("type").asText().equals("object")) {
            String newNamespace;

            if(StringUtils.isEmpty(context.namespace)) {
                newNamespace = name;
            } else {
                newNamespace = context.namespace + NAMESPACE_SEPARATOR + name;
            }

            visit(new VisitorContext(newNamespace, property));
        }
    }

    private static class VisitorContext {
        private final String namespace;
        private final JsonNode node;

        public VisitorContext(String namespace, JsonNode node) {
            this.namespace = namespace;
            this.node = node;
        }
    }
}
