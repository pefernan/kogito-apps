export class FormRegistry {
  private processRegistry: Map<string, Map<string, string>>;

  constructor() {
    this.processRegistry = new Map<string, Map<string, string>>();

    const forms = new Map<string, string>();
    forms.set('ConfirmTravel', 'http://localhost:4000/travels/ConfirmTravel');
    this.processRegistry.set('travels', forms);
  }

  public getTaskFormPath(
    processId: string,
    taskReferenceName: string
  ): string | undefined {
    if (this.processRegistry.has(processId)) {
      return this.processRegistry.get(processId).get(taskReferenceName);
    }
  }
}
