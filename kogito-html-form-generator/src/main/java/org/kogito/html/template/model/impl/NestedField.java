package org.kogito.html.template.model.impl;

import java.util.ArrayList;
import java.util.List;

import org.kogito.html.template.model.Field;
import org.kogito.html.template.model.InputType;

public class NestedField extends AbstractField {

    private List<Field> fields = new ArrayList<>();

    private String formRef;

    public NestedField(String id, String label, String formRef) {
        super(InputType.NESTED, id, label);
        this.formRef = formRef;
    }

    public String getFormRef() {
        return formRef;
    }

    public String getTitle() {
        return getLabel();
    }

    public List<Field> getFields() {
        return fields;
    }

    public NestedField addField(Field field) {
        this.fields.add(field);
        return this;
    }
}
