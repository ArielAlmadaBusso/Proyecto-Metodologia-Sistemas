import { v4 } from 'uuid'

class Category {
  private readonly id: string
  private name: string
  private color: string

  private constructor (id: string, name: string, color: string) {
    this.id = id
    this.name = name
    this.color = color
  }

  public static create (name: string, color: string): Category {
    const id = v4()
    const category = new Category(id, name, color)
    return category
  }

  public getId(): string {
    return this.id;
  }

  public getName() {
    return this.name;
  }

  public getColor() {
    return this.color;
  }

}

export default Category
