import { ProcessInstance, UserTaskInstance } from '../graphql/types';

export interface TaskInfo {
  readonly task: UserTaskInstance;
  readonly processInstance: ProcessInstance;
}

export class DefaultTaskInfo implements TaskInfo {
  public readonly task: UserTaskInstance;
  public readonly processInstance: ProcessInstance;

  constructor(task: UserTaskInstance, processInstance: ProcessInstance) {
    this.task = task;
    this.processInstance = processInstance;
  }
}
