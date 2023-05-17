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

package org.kie.kogito.index.oracle.query;

import jakarta.inject.Inject;

import org.kie.kogito.index.model.Job;
import org.kie.kogito.index.oracle.storage.JobEntityStorage;
import org.kie.kogito.index.test.query.AbstractJobQueryIT;
import org.kie.kogito.persistence.api.Storage;
import org.kie.kogito.testcontainers.quarkus.OracleSqlQuarkusTestResource;

import io.quarkus.test.common.QuarkusTestResource;
import io.quarkus.test.junit.QuarkusTest;

@QuarkusTest
@QuarkusTestResource(OracleSqlQuarkusTestResource.class)
class JobEntityQueryIT extends AbstractJobQueryIT {

    @Inject
    JobEntityStorage storage;

    @Override
    public Storage<String, Job> getStorage() {
        return storage;
    }

}
