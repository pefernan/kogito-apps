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
import java.net.URL;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;
import javax.enterprise.context.ApplicationScoped;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.kie.kogito.runtime.tools.quarkus.extension.runtime.forms.FormInfo;
import org.kie.kogito.runtime.tools.quarkus.extension.runtime.forms.FormsStorage;

@ApplicationScoped
public class FormsStorageImpl implements FormsStorage {

    private static final String FORMS_STORAGE_PATH = "/forms";

    private URL formsFolder;

    @PostConstruct
    public void init() {
        formsFolder = Thread.currentThread().getContextClassLoader().getResource(FORMS_STORAGE_PATH);
    }

    @Override
    public int getFormsCount() {
        if (formsFolder == null) {
            return 0;
        }

        File rootFolder = FileUtils.toFile(formsFolder);

        Collection<File> forms = readForms();

        forms.forEach(form -> {
            System.out.println(form.getName());
        });

        return forms.size();
    }

    @Override
    public Collection<FormInfo> getFormList() {
        return readForms().stream()
                .map(file -> new FormInfo(FilenameUtils.removeExtension(file.getName()), FilenameUtils.getExtension(file.getName()), new Date(file.lastModified())))
                .collect(Collectors.toList());
    }

    private Collection<File> readForms() {
        File rootFolder = FileUtils.toFile(formsFolder);

        return FileUtils.listFiles(rootFolder, new String[] { "html", "tsx" }, false);

    }
}
