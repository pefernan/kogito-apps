package org.kogito.html.template.model.impl;

public class DateField extends AbstractFieldSettings {

    private String format;

    public DateField(String id, String label, String format) {
        super("date", id, label);
        this.format = format;
    }

    public String getFormat() {
        return format;
    }
}
