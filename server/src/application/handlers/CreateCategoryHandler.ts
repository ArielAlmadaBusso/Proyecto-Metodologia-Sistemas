import Category from '../../domain/entities/category';
import CreateCategoryCommand from '../commands/CreateCategoryCommand';

class CreateCategoryHandler {
  public async execute(command: CreateCategoryCommand) {
    const { name, color } = command;
    const category = Category.create(name, color);

    return category;
  }
}

export default new CreateCategoryHandler();
