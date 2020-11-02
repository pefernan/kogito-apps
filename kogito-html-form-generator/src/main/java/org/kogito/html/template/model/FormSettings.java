package org.kogito.html.template.model;

import java.util.ArrayList;
import java.util.List;

public class FormSettings {

    private String title;
    private List<FieldSettings> fields = new ArrayList<>();

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    public List<FieldSettings> getFields() {
        return fields;
    }

    public FormSettings addField(FieldSettings field) {
        this.fields.add(field);
        return this;
    }
}
