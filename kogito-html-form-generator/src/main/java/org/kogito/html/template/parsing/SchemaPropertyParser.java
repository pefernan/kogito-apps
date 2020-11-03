package org.kogito.html.template.parsing;

import org.kogito.html.template.model.FieldSettings;
import org.kogito.html.template.parsing.impl.context.ParsingContextImpl;

public interface SchemaPropertyParser<S, P> {

    String getSupportedType();

    FieldSettings parse(ParsingContextImpl<S> context, P property);
}
