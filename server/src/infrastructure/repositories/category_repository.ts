import Category from "../../domain/entities/category"

class CategoryRepository {
    private categories: Category[]

    public constructor(){
        this.categories = []
    }

    public async save (category: Category):Promise<void>{
        const saveCategory = this.categories.find(a => a.getId() === category.getId())
        if (saveCategory){
            this.categories.splice(this.categories.indexOf(saveCategory), 1)
        }
        this.categories.push(category)
    }

    public async findOneById(id: string): Promise<Category | null>{
        const category = this.categories.find(a => a.getId() === id)
        return category ? category : null
    }

    public async getAll(): Promise<Category[]> {
        return this.categories
    }
    
}
export default CategoryRepository;
