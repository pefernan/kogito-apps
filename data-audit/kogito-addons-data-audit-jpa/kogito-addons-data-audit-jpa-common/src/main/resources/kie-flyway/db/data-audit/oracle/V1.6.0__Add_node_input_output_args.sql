-- IBM Confidential
-- PID 5900-AR4
-- Copyright IBM Corp. 2026

-- Add input_args and output_args columns to Process_Instance_Node_Log table
ALTER TABLE process_instance_node_log ADD input_args CLOB;
ALTER TABLE process_instance_node_log ADD output_args CLOB;
