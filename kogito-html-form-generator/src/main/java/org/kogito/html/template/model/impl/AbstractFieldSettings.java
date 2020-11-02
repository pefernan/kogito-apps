package org.kogito.html.template.model.impl;

import org.kogito.html.template.model.FieldSettings;

public abstract class AbstractFieldSettings implements FieldSettings {

    private String type;
    private String id;
    private String label;

    public AbstractFieldSettings(String type, String id, String label) {
        this.type = type;
        this.id = id;
        this.label = label;
    }

    @Override
    public String getType() {
        return type;
    }

    public String getId() {
        return id;
    }

    @Override
    public String getLabel() {
        return label;
    }
}
