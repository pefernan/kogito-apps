-- IBM Confidential
-- PID 5900-AR4
-- Copyright IBM Corp. 2026

ALTER TABLE job_details ADD process_id VARCHAR(255);
ALTER TABLE job_details ADD root_process_id VARCHAR(255);
ALTER TABLE job_details ADD process_version VARCHAR(255);
ALTER TABLE job_details ADD root_process_version VARCHAR(255);
GO

CREATE INDEX idx_job_details_process_id ON job_details (process_id);
CREATE INDEX idx_job_details_root_process_id ON job_details (root_process_id);
CREATE INDEX idx_job_details_process_version ON job_details (process_id, process_version);
CREATE INDEX idx_job_details_root_process_version ON job_details (root_process_id, root_process_version);
GO
