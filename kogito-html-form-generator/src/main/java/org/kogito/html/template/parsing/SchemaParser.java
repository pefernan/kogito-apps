package org.kogito.html.template.parsing;

import java.io.InputStream;

import org.kogito.html.template.model.Form;
import org.kogito.html.template.parsing.impl.context.ParsingContextImpl;

public interface SchemaParser<S> {

    Form parse(InputStream inputStream);

    Form parse(ParsingContextImpl<S> context);
}
