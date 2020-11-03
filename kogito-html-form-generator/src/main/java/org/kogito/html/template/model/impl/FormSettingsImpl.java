package org.kogito.html.template.model.impl;

import java.util.Collection;
import java.util.List;

import org.kogito.html.template.model.FieldSettings;
import org.kogito.html.template.model.FormSettings;

public class FormSettingsImpl implements FormSettings {

    private String title;
    private Collection<FieldSettings> fields;

    public FormSettingsImpl(String title, List<FieldSettings> fields) {
        this.title = title;
        this.fields = fields;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public String getTitle() {
        return title;
    }

    @Override
    public Collection<FieldSettings> getFields() {
        return fields;
    }

    public FormSettingsImpl addField(FieldSettings field) {
        this.fields.add(field);
        return this;
    }
}
