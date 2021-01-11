package org.kogito.html.template.model.impl;

import org.kogito.html.template.model.Field;
import org.kogito.html.template.model.InputType;

public abstract class AbstractField implements Field {

    private InputType type;
    private String id;
    private String label;
    private boolean readOnly;

    public AbstractField(InputType type, String id, String label) {
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

    public Field setReadOnly(boolean readOnly) {
        this.readOnly = readOnly;
        return this;
    }
}
