package org.kogito.html.template.model.impl;

import org.kogito.html.template.model.FieldSettings;
import org.kogito.html.template.model.InputType;

public abstract class AbstractFieldSettings implements FieldSettings {

    private InputType type;
    private String id;
    private String label;
    private boolean readOnly;

    public AbstractFieldSettings(InputType type, String id, String label) {
        this.type = type;
        this.id = id;
        this.label = label;
    }

    @Override
    public InputType getType() {
        return type;
    }

    public String getId() {
        return id;
    }

    @Override
    public String getLabel() {
        return label;
    }

    @Override
    public boolean isReadOnly() {
        return readOnly;
    }

    public FieldSettings setReadOnly(boolean readOnly) {
        this.readOnly = readOnly;
        return this;
    }
}
