package org.kogito.html.template.model.impl;

import org.kogito.html.template.model.InputType;

public class TextField extends AbstractField {

    public TextField(String id, String label) {
        super(InputType.TEXT, id, label);
    }
}
