/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

package org.kie.kogito.app.audit.jpa.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "TaskInstanceStateLog")
@SequenceGenerator(name = "taskInstanceStateLogIdSeq", sequenceName = "TASK_INSTANCE_STATE_LOG_ID_SEQ")
public class UserTaskInstanceStateLog extends AbstractUserTaskInstanceLog {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "taskInstanceStateLogIdSeq")
    private Long id;

    @Column(name = "task_id")
    private String taskId;

    private String name;

    private String description;

    @Column(name = "actual_user")
    private String actualUser;

    private String state;

    @Column(name = "node_definition_id")
    private String nodeDefinitionId;

    @Column(name = "node_instance_id")
    private String nodeInstanceId;

    @Column(name = "event_type")
    private String eventType;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getActualUser() {
        return actualUser;
    }

    public void setActualUser(String actualUser) {
        this.actualUser = actualUser;
    }

    public String getNodeInstanceId() {
        return nodeInstanceId;
    }

    public void setNodeInstanceId(String nodeInstanceId) {
        this.nodeInstanceId = nodeInstanceId;
    }

    public String getEventType() {
        return eventType;
    }

    public void setEventType(String eventType) {
        this.eventType = eventType;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getNodeDefinitionId() {
        return nodeDefinitionId;
    }

    public void setNodeDefinitionId(String nodeDefinitionId) {
        this.nodeDefinitionId = nodeDefinitionId;
    }

}