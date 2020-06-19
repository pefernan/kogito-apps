export interface TaskForm {
  taskName: string;
  formUrl: string;
}

export interface FormsRegistry {
  getTaskFormUrl: (
    processId: string,
    taskReferenceName: string
  ) => string | undefined;
}

export interface TaskConsoleSettings {
  formsRegistry: FormsRegistry;
}
