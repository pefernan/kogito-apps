package org.kogito.html.template.model.impl;

import org.kogito.html.template.model.InputType;

public class DateField extends AbstractField {

    private String format;

    public DateField(String id, String label, String format) {
        super(InputType.DATE, id, label);
        this.format = format;
    }

    public String getFormat() {
        return format;
    }
}
