/*
 * Copyright 2020 Red Hat, Inc. and/or its affiliates.
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

package org.kogito.html.swagger;

import java.util.Objects;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import io.swagger.util.Json;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.PathItem;
import io.swagger.v3.oas.models.media.Schema;
import io.swagger.v3.parser.OpenAPIV3Parser;
import io.swagger.v3.parser.util.RefUtils;

public class Main {

    private static final String URL = "http://localhost:8080";
    private static final String OPENAPI_JSON = "/docs/openapi.json";

    public static void main(String[] args) {
        OpenAPI openAPI = new OpenAPIV3Parser().read(URL + OPENAPI_JSON);

        readProcessForms(openAPI);
    }

    static void readProcessForms(OpenAPI openAPI) {
        final String ROOT_PATTERN = "^\\/([a-zA-Z0-9_]*)$";

        Pattern pattern = Pattern.compile(ROOT_PATTERN);

        final String DIAGRAM = "{$diagram}";
        final String TASK_SCHEMA_PATTERN = "(^\\/" + DIAGRAM + "\\/)([a-zA-z_]*)(\\/schema)$";

        Set<SchemaInfo> infos = openAPI.getPaths().entrySet().stream()
                .map(entry -> {
                    Matcher matcher = pattern.matcher(entry.getKey());

                    PathItem path = entry.getValue();
                    if(!matcher.matches() || path.getPost() == null) {
                        return null;
                    }
                    String schemaRef = entry.getValue().getPost().getRequestBody().getContent().get("application/json").getSchema().get$ref();

                    Schema schema = openAPI.getComponents().getSchemas().get(RefUtils.computeDefinitionName(schemaRef));

                    String json = Json.pretty(schema);

                    try {
                        JsonNode node = Json.mapper().readTree(json);

                        System.out.println(node);
                    } catch (JsonProcessingException e) {
                        e.printStackTrace();
                    }

                    return new SchemaInfo(entry.getKey(), matcher.group(1), null);

                }).filter(Objects::nonNull)
                .collect(Collectors.toSet());

        System.out.println(infos);

    }

    static class SchemaInfo {
        private String endpoint;
        private String name;
        private Object schema;

        public SchemaInfo(String endpoint, String name, Object schema) {
            this.endpoint = endpoint;
            this.name = name;
            this.schema = schema;
        }
    }
}
