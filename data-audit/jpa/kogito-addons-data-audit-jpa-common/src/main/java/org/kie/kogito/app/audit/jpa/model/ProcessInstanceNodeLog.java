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

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "ProcessInstanceNodeLog")
@SequenceGenerator(name = "processInstanceNodeLogIdSeq", sequenceName = "PROCESS_INSTANCE_NODE_LOG_ID_SEQ")
public class ProcessInstanceNodeLog extends AbstractProcessInstanceLog {

    public enum NodeLogType {
        ENTER,
        EXIT,
        ABORTED,
        ASYNC_ENTER,
        OBSOLETE,
        SKIPPED,
        ERROR,
        SLA_VIOLATION
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "processInstanceNodeLogIdSeq")
    private long id;

    @Column(name = "event_type")
    @Enumerated(EnumType.STRING)
    private NodeLogType eventType;

    @Column(name = "node_definition_id")
    private String nodeDefinitionId;

    @Column(name = "node_type")
    private String nodeType;

    @Column(name = "node_name")
    private String nodeName;

    @Column(name = "node_instance_id")
    private String nodeInstanceId;

    @Column(name = "connection")
    private String connection;

    @Column(name = "work_item_id")
    private String workItemId;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "sla_due_date")
    private Date slaDueDate;

    @Column(name = "event_data")
    private String eventData;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public NodeLogType getEventType() {
        return eventType;
    }

    public void setEventType(NodeLogType eventType) {
        this.eventType = eventType;
    }

    public String getNodeDefinitionId() {
        return nodeDefinitionId;
    }

    public void setNodeDefinitionId(String nodeDefinitionId) {
        this.nodeDefinitionId = nodeDefinitionId;
    }

    public String getNodeType() {
        return nodeType;
    }

    public void setNodeType(String nodeType) {
        this.nodeType = nodeType;
    }

    public String getNodeName() {
        return nodeName;
    }

    public void setNodeName(String nodeName) {
        this.nodeName = nodeName;
    }

    public String getNodeInstanceId() {
        return nodeInstanceId;
    }

    public void setNodeInstanceId(String nodeInstanceId) {
        this.nodeInstanceId = nodeInstanceId;
    }

    public String getConnection() {
        return connection;
    }

    public void setConnection(String connection) {
        this.connection = connection;
    }

    public String getWorkItemId() {
        return workItemId;
    }

    public void setWorkItemId(String workItemId) {
        this.workItemId = workItemId;
    }

    public Date getSlaDueDate() {
        return slaDueDate;
    }

    public void setSlaDueDate(Date slaDueDate) {
        this.slaDueDate = slaDueDate;
    }

    public String getEventData() {
        return eventData;
    }

    public void setEventData(String eventData) {
        this.eventData = eventData;
    }

}