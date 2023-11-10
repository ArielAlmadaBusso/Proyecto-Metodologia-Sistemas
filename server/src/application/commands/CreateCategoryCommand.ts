class CreateCategoryCommand {
    private readonly name: string;
    private readonly color: string;

    public constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }

    public getName(): string {
        return this.name;
    }

    public getColor(): string {
        return this.color;
    }
}

export default CreateCategoryCommand;
