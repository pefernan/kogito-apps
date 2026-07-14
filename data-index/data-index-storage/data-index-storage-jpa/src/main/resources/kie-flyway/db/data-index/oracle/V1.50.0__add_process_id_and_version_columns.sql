-- IBM Confidential
-- PID 5900-AR4
-- Copyright IBM Corp. 2026

ALTER TABLE processes ADD root_process_version VARCHAR2(255);
ALTER TABLE jobs ADD process_version VARCHAR2(255);
ALTER TABLE jobs ADD root_process_version VARCHAR2(255);
ALTER TABLE tasks ADD process_version VARCHAR2(255);
ALTER TABLE tasks ADD root_process_version VARCHAR2(255);

CREATE INDEX idx_processes_process_id ON processes (process_id);
CREATE INDEX idx_processes_process_version ON processes (process_id, version);
CREATE INDEX idx_processes_root_version ON processes (root_process_id, root_process_version);

CREATE INDEX idx_jobs_process_id ON jobs (process_id);
CREATE INDEX idx_jobs_process_version ON jobs (process_id, process_version);
CREATE INDEX idx_jobs_root_version ON jobs (root_process_id, root_process_version);

CREATE INDEX idx_tasks_process_id ON tasks (process_id);
CREATE INDEX idx_tasks_process_version ON tasks (process_id, process_version);
CREATE INDEX idx_tasks_root_version ON tasks (root_process_id, root_process_version);
