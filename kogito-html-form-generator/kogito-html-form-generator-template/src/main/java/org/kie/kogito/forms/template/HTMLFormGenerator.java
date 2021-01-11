/*
 * Copyright 2021 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.kie.kogito.forms.template;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.enterprise.context.ApplicationScoped;

import org.jsoup.Jsoup;
import org.kie.kogito.forms.model.Form;
import org.mvel2.templates.CompiledTemplate;
import org.mvel2.templates.SimpleTemplateRegistry;
import org.mvel2.templates.TemplateCompiler;
import org.mvel2.templates.TemplateRegistry;
import org.mvel2.templates.TemplateRuntime;

@ApplicationScoped
public class HTMLFormGenerator {

    private CompiledTemplate mainTemplate;
    private TemplateRegistry registry;

    @PostConstruct
    public void init() {
        mainTemplate = TemplateCompiler.compileTemplate(this.getClass().getResourceAsStream("/templates/index.mv"));

        registry = new SimpleTemplateRegistry();
        registry.addNamedTemplate("form", TemplateCompiler.compileTemplate(this.getClass().getResourceAsStream("/templates/form.mv")));
        registry.addNamedTemplate("formGroup", TemplateCompiler.compileTemplate(this.getClass().getResourceAsStream("/templates/formGroup.mv")));
        registry.addNamedTemplate("input", TemplateCompiler.compileTemplate(this.getClass().getResourceAsStream("/templates/input.mv")));
        registry.addNamedTemplate("checkbox", TemplateCompiler.compileTemplate(this.getClass().getResourceAsStream("/templates/checkbox.mv")));
        registry.addNamedTemplate("select", TemplateCompiler.compileTemplate(this.getClass().getResourceAsStream("/templates/select.mv")));
    }

    public String generate(Form form, String schema) {
        Map<String, Object> vars = new HashMap<>();

        vars.put("form", form);
        vars.put("schema", schema);

        return Jsoup.parse((String) TemplateRuntime.execute(mainTemplate, new Object(), vars, registry)).toString();
    }
}
