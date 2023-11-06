package org.kie.kogito.app.audit.jpa.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@MappedSuperclass
public abstract class AbstractUserTaskInstanceLog {

    @Transient
    private static final Logger logger = LoggerFactory.getLogger(ProcessInstanceStateLog.class);

    @Column(name = "event_id")
    private String eventId;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "event_date")
    private Date eventDate;

    @Column(name = "event_user")
    private String eventUser;

    @Column(name = "user_task_definition_id")
    private String userTaskDefinitionId;

    @Column(name = "user_task_instance_id")
    private String userTaskInstanceId;

    @Column(name = "process_instance_id")
    private String processInstanceId;

    @Column(name = "business_key")
    private String businessKey;

    public String getUserTaskInstanceId() {
        return userTaskInstanceId;
    }

    public void setUserTaskInstanceId(String userTaskInstanceId) {
        this.userTaskInstanceId = userTaskInstanceId;
    }

    public void setBusinessKey(String businessKey) {
        this.businessKey = businessKey;
    }

    public String getProcessInstanceId() {
        return processInstanceId;
    }

    public void setProcessInstanceId(String processInstanceId) {
        this.processInstanceId = processInstanceId;
    }

    public String getBusinessKey() {
        return businessKey;
    }

    public Date getEventDate() {
        return eventDate;
    }

    public void setEventDate(Date eventDate) {
        this.eventDate = eventDate;
    }

    public void setEventId(String eventId) {
        this.eventId = eventId;
    }

    public String getEventId() {
        return eventId;
    }

    public void setUserTaskDefinitionId(String userTaskDefinitionId) {
        this.userTaskDefinitionId = userTaskDefinitionId;
    }

    public String getUserTaskDefinitionId() {
        return userTaskDefinitionId;
    }

    public String getEventUser() {
        return eventUser;
    }

    public void setEventUser(String eventUser) {
        this.eventUser = eventUser;
    }

}