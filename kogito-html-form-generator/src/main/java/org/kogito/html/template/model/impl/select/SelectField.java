package org.kogito.html.template.model.impl.select;

import java.util.ArrayList;
import java.util.List;

import org.kogito.html.template.model.InputType;
import org.kogito.html.template.model.impl.AbstractField;

public class SelectField extends AbstractField {

    private List<Option> options = new ArrayList<>();

    public SelectField(String id, String label) {
        super(InputType.SELECT, id, label);
    }

    public List<Option> getOptions() {
        return options;
    }

    public SelectField addOption(String value, String text) {
        this.options.add(new Option(value, text));
        return this;
    }

    @Override
    public String toString() {
        return "Select{" +
                "options=" + options +
                '}';
    }
}

