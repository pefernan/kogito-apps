/*
 * Copyright 2021 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.kie.kogito.runtime.tools.quarkus.extension.runtime.forms.impl;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;
import javax.enterprise.context.ApplicationScoped;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.io.IOUtils;
import org.kie.kogito.runtime.tools.quarkus.extension.runtime.forms.FormsStorage;
import org.kie.kogito.runtime.tools.quarkus.extension.runtime.forms.model.Form;
import org.kie.kogito.runtime.tools.quarkus.extension.runtime.forms.model.FormConfiguration;
import org.kie.kogito.runtime.tools.quarkus.extension.runtime.forms.model.FormFilter;
import org.kie.kogito.runtime.tools.quarkus.extension.runtime.forms.model.FormInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import io.vertx.core.json.JsonObject;

@ApplicationScoped
public class FormsStorageImpl implements FormsStorage {

    private static final String FORMS_STORAGE_PATH = "/forms";

    private static final Logger LOGGER = LoggerFactory.getLogger(FormsStorageImpl.class);

    private URL formsFolder;

    private Map<String, FormInfo> formInfoMap = new HashMap<>();

    @PostConstruct
    public void init() {
        formsFolder = Thread.currentThread().getContextClassLoader().getResource(FORMS_STORAGE_PATH);
        LOGGER.info("form's files path is {0}", formsFolder.toString());
        reloadFormBaseInfoList();
    }

    @Override
    public int getFormsCount() {
        return formInfoMap.keySet().size();
    }

    @Override
    public Collection<FormInfo> getFormInfoList(FormFilter filter) {
        if (filter != null && filter.getNames().size() > 0) {
            final Collection<FormInfo> formInfoCollection = new ArrayList();
            formInfoMap.entrySet().stream().filter(entry -> filter.getNames().contains(entry.getKey()))
                    .map(entry -> formInfoCollection.add(entry.getValue())).collect(Collectors.toList());
            return formInfoCollection;
        } else {
            return formInfoMap.values();
        }
    }

    private FormInfo.FormType getFormType(String type) {
        switch (type) {
            case "html":
                return FormInfo.FormType.HTML;
            case "tsx":
                return FormInfo.FormType.TSX;
        }
        return null;
    }

    @Override
    public Form getFormContent(String formName) throws IOException {
        File formFile = getFormFile(formName);
        File formConfig = getFormConfigFile(formName);
        String formConfiguration = "";
        if (formConfig != null && formConfig.exists()) {
            formConfiguration = IOUtils.toString(new FileInputStream(formConfig), StandardCharsets.UTF_8);
        } else {
            throw new FileNotFoundException(formName + " dose not found");
        }
        Form form = null;
        if (formFile != null && formFile.exists()) {
            form = new Form(IOUtils.toString(new FileInputStream(formFile), StandardCharsets.UTF_8), new FormConfiguration(formConfiguration), formName);
        } else {
            throw new FileNotFoundException(formName + "'s config file dose not found");
        }
        return form;
    }

    private File getFormFile(String formName) throws MalformedURLException {
        FormInfo.FormType type = formInfoMap.get(formName).getType();
        ;
        URL configUri = new URL(formsFolder.toString() + File.separator + formName + type.getValue());
        return null;
    }

    private File getFormConfigFile(String formName) throws MalformedURLException {
        URL configUri = new URL(formsFolder.toString() + File.separator + formName + ".config");
        return FileUtils.toFile((configUri));
    }

    @Override
    public void updateFormContent(String formContent, String formName) throws IOException {
        File formFile = getFormFile(formName);
        JsonObject formJsonOject = new JsonObject(formContent);
        verifyFormJsonOject(formJsonOject);
        FormConfiguration formConfiguration = new FormConfiguration(formJsonOject.getJsonObject("formConfiguration").toString());
        Form form = new Form(formJsonOject.getString("formContent"), formConfiguration, formName);
        IOUtils.write(form.getSource(), new FileOutputStream(formFile), StandardCharsets.UTF_8);
        File formConfigFile = getFormConfigFile(formName);
        IOUtils.write(form.getFormConfiguration().toString(), new FileOutputStream(formConfigFile), StandardCharsets.UTF_8);
    }

    private void verifyFormJsonOject(JsonObject formJsonObject) {
        if (formJsonObject.getString("formContent") == null || formJsonObject.getString("formContent").equals("")) {
            throw new RuntimeException("Form's json object has wrong formContent");
        }

        if (formJsonObject.getString("formConfiguration") == null) {
            throw new RuntimeException("Form's json object has wrong formConfiguration");
        }
    }

    private void reloadFormBaseInfoList() {
        readFormBaseList().forEach(file -> {
            formInfoMap.put(FilenameUtils.removeExtension(file.getName()),
                            new FormInfo(FilenameUtils.removeExtension(file.getName()), getFormType(FilenameUtils.getExtension(file.getName())), new Date(file.lastModified())));
        });
    }

    private Collection<File> readFormBaseList() {
        if (formsFolder != null) {
            File rootFolder = FileUtils.toFile(formsFolder);
            return FileUtils.listFiles(rootFolder, new String[]{"html", "tsx"}, false);
        }
        return Collections.emptyList();
    }
}
