package org.kogito.html.template.model.impl;

import java.util.HashMap;
import java.util.Map;

import org.kogito.html.template.model.Field;
import org.kogito.html.template.model.InputType;

public class FieldImpl implements Field {

    private String id;
    private InputType type;
    private String label;
    private boolean readOnly = false;

    private Map<String, Object> props = new HashMap<>();

    public FieldImpl(String id, InputType type, String label) {
        this.id = id;
        this.type = type;
        this.label = label;
    }

    @Override
    public String getId() {
        return id;
    }

    @Override
    public InputType getType() {
        return type;
    }

    @Override
    public String getLabel() {
        return label;
    }

    public void setReadOnly(boolean readOnly) {
        this.readOnly = readOnly;
    }

    @Override
    public boolean isReadOnly() {
        return readOnly;
    }

    public <T> Field set(String propery, T value) {
        props.put(propery, value);
        return this;
    }

    public <T> T get(String property) {
        return (T) props.get(property);
    }
}
