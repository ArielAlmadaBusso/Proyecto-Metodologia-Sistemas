class CreateCategoryCommand {
  public readonly name: string;
  public readonly color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }
}

export default CreateCategoryCommand;