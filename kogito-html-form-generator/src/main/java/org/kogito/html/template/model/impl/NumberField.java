package org.kogito.html.template.model.impl;

import org.kogito.html.template.model.InputType;

public class NumberField extends AbstractField {

    public NumberField(String id, String label) {
        super(InputType.NUMBER, id, label);
    }
}
