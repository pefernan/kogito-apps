package org.kogito.html.template.parsing;

import org.kogito.html.template.model.Field;
import org.kogito.html.template.parsing.impl.context.ParsingContextImpl;

public interface SchemaPropertyParser<S, P> {

    String getSupportedType();

    Field parse(ParsingContextImpl<S> context, P property);
}
