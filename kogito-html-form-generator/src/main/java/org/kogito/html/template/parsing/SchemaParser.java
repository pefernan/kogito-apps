package org.kogito.html.template.parsing;

import java.io.InputStream;

import org.kogito.html.template.model.FormSettings;
import org.kogito.html.template.parsing.impl.context.ParsingContextImpl;

public interface SchemaParser<S> {

    FormSettings parse(InputStream inputStream);

    FormSettings parse(ParsingContextImpl<S> context);
}
