package org.kogito.html.template.model.impl.select;

import java.util.ArrayList;
import java.util.List;

import org.kogito.html.template.model.impl.AbstractFieldSettings;

public class Select extends AbstractFieldSettings {

    private List<Option> options = new ArrayList<>();

    public Select(String id, String label) {
        super("select", id, label);
    }

    public List<Option> getOptions() {
        return options;
    }

    public Select addOption(String value, String text) {
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

