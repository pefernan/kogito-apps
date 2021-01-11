package org.kogito.html.template.model;

public interface Field {

    InputType getType();

    String getId();

    String getLabel();

    boolean isReadOnly();
}
