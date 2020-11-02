package org.kogito.html.template;

import java.util.HashMap;
import java.util.Map;

import org.jsoup.Jsoup;
import org.kogito.html.template.model.FormSettings;
import org.kogito.html.template.model.impl.Checkbox;
import org.kogito.html.template.model.impl.DateField;
import org.kogito.html.template.model.impl.IntegerField;
import org.kogito.html.template.model.impl.NestedField;
import org.kogito.html.template.model.impl.NumberField;
import org.kogito.html.template.model.impl.select.Select;
import org.kogito.html.template.model.impl.TextField;

public class Main {

    public static void main(String[] args) {
        FormSettings form = new FormSettings();

        form.addField(new TextField("name", "Name"))
                .addField(new IntegerField("age", "Age"))
                .addField(new NumberField("qualifications", "Qualification"))
                .addField(new DateField("birthday", "Birthday", "datetime-local"))
                .addField(new Checkbox("accept", "Accept email notifications"))
                .addField(new NestedField("person", "Person")
                                  .addField(new TextField("name", "Name"))
                                  .addField(new IntegerField("age", "Age"))
                                  .addField(new NumberField("qualifications", "Qualification"))
                                  .addField(new DateField("birthday", "Birthday", "datetime-local"))
                .addField(new Select("state", "State").addOption("married", "Married").addOption("single", "Single")));

        Map<String, Object> templateContext = new HashMap<>();
        templateContext.put("form", form);

        StringBuffer code = TemplateWriter.writeTemplate(templateContext);

        System.out.println(Jsoup.parse(code.toString()));
    }
}
