import {CategoryRepository} from '../../infrastructure/repositories/category_repository';
import CreateCategoryCommand from '../commands/CreateCategoryCommand';
import Category from '../../domain/entities/category';

class CreateCategoryHandler {
    private categoryRepository: CategoryRepository;

    public constructor(categoryRepository: CategoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public async execute(command: CreateCategoryCommand): Promise<void> {
        const { getName, getColor } = command;
        const name = getName();
        const color = getColor();

        const category = Category.create(name, color);

        await this.categoryRepository.save(category);
    }
}

export default CreateCategoryHandler;
