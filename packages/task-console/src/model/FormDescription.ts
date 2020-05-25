export interface FormActionDescription {
  name: string;
  endpoint: string;
  outputs: string[];
  primary?: boolean;
}

export interface FormDescription {
  schema: string;
  actions?: FormActionDescription[];
}
