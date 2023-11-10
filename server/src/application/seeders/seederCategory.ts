import Category from '../../domain/entities/category';
import categoryRepository from '../../infrastructure/repositories/category_repository';

class CategorySeeder {
  private categories: Array<Category> = [];
  
  public constructor() {
    this.categories.push(Category.create('baches', 'rojo'));
    this.categories.push(Category.create('iluminaria', 'amarillo'));
    this.categories.push(Category.create('corte de agua', 'verde'));
    this.categories.push(Category.create('pavimento', 'amarillo'));
    this.categories.push(Category.create('fuga de gas', 'verde'));
  }

  public async generate(): Promise<void> {
    for (const category of this.categories) {
      await categoryRepository.save(category);
    }
  }
}

export default new CategorySeeder();
