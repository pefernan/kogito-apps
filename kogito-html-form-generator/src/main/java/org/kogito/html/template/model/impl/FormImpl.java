package org.kogito.html.template.model.impl;

import java.util.Collection;

import org.kogito.html.template.model.Field;
import org.kogito.html.template.model.Form;

public class FormImpl implements Form {

    private String id;
    private String title;
    private Collection<Field> fields;

    public FormImpl(String id, String title, Collection<Field> fields) {
        this.id = id;
        this.title = title;
        this.fields = fields;
    }

    @Override
    public String getId() {
        return id;
    }

    @Override
    public String getTitle() {
        return title;
    }

    @Override
    public Collection<Field> getFields() {
        return fields;
    }
}
