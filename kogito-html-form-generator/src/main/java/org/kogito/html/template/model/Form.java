package org.kogito.html.template.model;

import java.util.Collection;

public interface Form {

    String getId();

    String getTitle();

    Collection<Field> getFields();
}
