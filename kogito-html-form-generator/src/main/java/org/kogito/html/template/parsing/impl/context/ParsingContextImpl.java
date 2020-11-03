package org.kogito.html.template.parsing.impl.context;

import org.apache.commons.lang3.StringUtils;
import org.kogito.html.template.parsing.ParsingContext;

public class ParsingContextImpl<S> implements ParsingContext {

    public static final String NAMESPACE_SEPARATOR = "___";

    private String namespace;
    private S schema;
    private boolean isReadOnly;

    public ParsingContextImpl(String namespace, S schema) {
        this.namespace = namespace;
        this.schema = schema;
    }

    public String getNamespace() {
        return namespace;
    }

    public S getSchema() {
        return schema;
    }

    public boolean isReadOnly() {
        return isReadOnly;
    }

    public ParsingContextImpl nestedNamespace(String nestedId, S source) {
        if(StringUtils.isEmpty(namespace)) {
            return new ParsingContextImpl(nestedId, source);
        }

        return new ParsingContextImpl(namespace + NAMESPACE_SEPARATOR + nestedId, source);
    }
}
