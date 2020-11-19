package org.kogito.html.template;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.jsoup.Jsoup;
import org.kogito.html.template.model.impl.FormSettingsImpl;
import org.kogito.html.template.model.InputType;
import org.kogito.html.template.model.impl.Checkbox;
import org.kogito.html.template.model.impl.DateField;
import org.kogito.html.template.model.impl.FieldSettingsImpl;
import org.kogito.html.template.model.impl.IntegerField;
import org.kogito.html.template.model.impl.NestedField;
import org.kogito.html.template.model.impl.NumberField;
import org.kogito.html.template.model.impl.select.Option;
import org.kogito.html.template.model.impl.select.Select;
import org.kogito.html.template.model.impl.TextField;

public class Main {

    public static void main(String[] args) {
//        FormSettingsImpl form = new FormSettingsImpl();
//
//        List<Option> options = new ArrayList<>();
//        options.add(new Option("married", "Married"));
//        options.add(new Option("single", "Single"));
//        options.add(new Option("divorced", "Divorced"));
//
//        FieldSettingsImpl impl = new FieldSettingsImpl("state2", InputType.SELECT, "State 2");
//        impl.set("options", options);
//        impl.setReadOnly(true);
//
//        form.addField(new TextField("name", "Name"))
//                .addField(new IntegerField("age", "Age").setReadOnly(true))
//                .addField(new NumberField("qualifications", "Qualification"))
//                .addField(new DateField("birthday", "Birthday", "datetime-local"))
//                .addField(new Checkbox("accept", "Accept email notifications").setReadOnly(true))
//                .addField(new NestedField("person", "Person")
//                                  .addField(new TextField("name", "Name"))
//                                  .addField(new IntegerField("age", "Age"))
//                                  .addField(new NumberField("qualifications", "Qualification"))
//                                  .addField(new DateField("birthday", "Birthday", "datetime-local"))
//                .addField(new Select("state", "State").addOption("married", "Married").addOption("single", "Single")))
//                .addField(impl);
//
//        Map<String, Object> templateContext = new HashMap<>();
//        templateContext.put("form", form);
//
//        StringBuffer code = TemplateWriter.writeTemplate(templateContext);
//
//        System.out.println(Jsoup.parse(code.toString()));
    }
}
