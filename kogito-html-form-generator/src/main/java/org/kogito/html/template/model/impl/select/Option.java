package org.kogito.html.template.model.impl.select;

public class Option {
    private String value;
    private String text;

    public Option(String value, String text) {
        this.value = value;
        this.text = text;
    }

    public String getValue() {
        return value;
    }

    public String getText() {
        return text;
    }

    @Override
    public String toString() {
        return "Option{" +
                "value='" + value + '\'' +
                ", text='" + text + '\'' +
                '}';
    }
}
