package org.kie.kogito.index.jpa.springboot.storage;

import java.util.Collections;
import java.util.List;

import org.kie.kogito.index.jpa.mapper.ProcessDefinitionEntityMapper;
import org.kie.kogito.index.jpa.storage.JsonPredicateBuilder;
import org.kie.kogito.index.jpa.storage.ProcessDefinitionEntityStorage;
import org.kie.kogito.index.model.ProcessDefinition;
import org.kie.kogito.index.model.ProcessDefinitionKey;
import org.kie.kogito.process.Processes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import jakarta.persistence.EntityManager;

@Component
public class SpringBootProcessDefinitionEntityStorage extends ProcessDefinitionEntityStorage {

    @Autowired
    public SpringBootProcessDefinitionEntityStorage(EntityManager entityManager,
            @Autowired(required = false) List<JsonPredicateBuilder> jsonPredicateBuilders,
            @Autowired(required = false) List<Processes> processes,
            @Value("${kogito.persistence.data-isolation.enabled:false}") Boolean dataIsolationEnabled) {
        super(entityManager,
                jsonPredicateBuilders != null ? jsonPredicateBuilders : Collections.emptyList(),
                ProcessDefinitionEntityMapper.INSTANCE,
                dataIsolationEnabled ? processes : Collections.emptyList());
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public ProcessDefinition put(ProcessDefinitionKey key, ProcessDefinition value) {
        return super.put(key, value);
    }
}
