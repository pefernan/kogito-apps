package org.kogito.html.template.model;

public interface FieldSettings {

    InputType getType();

    String getId();

    String getLabel();

    boolean isReadOnly();
}
