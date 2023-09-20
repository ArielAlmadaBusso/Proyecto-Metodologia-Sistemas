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

  public static create (Name: string, Color: string): Category {
    const id = v4()
    const category = new Category(id, Name, Color)
    return category
  }
}

export default Category
