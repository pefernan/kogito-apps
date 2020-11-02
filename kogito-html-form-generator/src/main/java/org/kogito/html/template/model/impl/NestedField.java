package org.kogito.html.template.model.impl;

import java.util.ArrayList;
import java.util.List;

import org.kogito.html.template.model.FieldSettings;

public class NestedField extends AbstractFieldSettings {

    private List<FieldSettings> fields = new ArrayList<>();

    public NestedField(String id, String label) {
        super("nested", id, label);
    }

    public String getTitle() {
        return getLabel();
    }

    public List<FieldSettings> getFields() {
        return fields;
    }

    public NestedField addField(FieldSettings field) {
        this.fields.add(field);
        return this;
    }
}
