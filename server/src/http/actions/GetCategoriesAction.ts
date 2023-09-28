
import Category from '../../domain/entities/category';
import CategoryRepository from '../../infrastructure/repositories/category_repository';

class GetCategoriesAction {
    private categoryRepository: CategoryRepository;

    public constructor(categoryRepository: CategoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public async execute(): Promise<Category[]> {
        try {
            const categories = await this.categoryRepository.getAll();
            return categories;
        } catch (error) {
            throw new Error('No se pudieron obtener las categorías');
        }
    }
}

export default GetCategoriesAction;


