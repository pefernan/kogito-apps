/*
 * Copyright 2019 Red Hat, Inc. and/or its affiliates.
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

package org.kogito.html.template;

import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.StringWriter;
import java.util.Map;

import freemarker.cache.ClassTemplateLoader;
import freemarker.core.HTMLOutputFormat;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;

public class TemplateWriter {

    private static final String TEMPLATE = "/templates/main.ftl";

    private TemplateWriter() {
    }

    public static StringBuffer writeTemplate(final Map<String, Object> context) {
        try (InputStream templateIs = TemplateWriter.class.getResource(TEMPLATE).openStream();
             StringWriter sw = new StringWriter();
             BufferedWriter bw = new BufferedWriter(sw)) {

            Configuration config = new Configuration(Configuration.DEFAULT_INCOMPATIBLE_IMPROVEMENTS);
            config.setOutputFormat(HTMLOutputFormat.INSTANCE);
            config.setTemplateLoader(new ClassTemplateLoader(TemplateWriter.class, "/templates"));

            Template template = new Template("", new InputStreamReader(templateIs), config);

            template.process(context, bw);

            return sw.getBuffer();

        } catch (IOException | TemplateException ioe) {
            ioe.printStackTrace();
        }

        return null;
    }
}
