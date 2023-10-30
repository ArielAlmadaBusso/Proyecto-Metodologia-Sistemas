import { v4 } from 'uuid'
import Visitor from './visitor'
import Category from './category'

class Claim {
  private readonly id: string
  private owner: Visitor
  private title: string
  private description: string
  private category: Category
  private location: string
  private createdAt: Date
  private cloneOf: Claim | null
  private likeCounter: number = 0
  private dislikeCounter: number = 0

  private constructor (id: string, owner: Visitor, title: string, description: string,
    category: Category, location: string, createdAt: Date, cloneof: Claim) {
    this.id = id
    this.owner = owner
    this.title = title
    this.description = description
    this.category = category
    this.location = location
    this.createdAt = createdAt
    this.cloneOf = cloneof
  }

  public static create (owner: Visitor, title: string,
    description: string, category: Category, location: string,
    cloneOf: Claim): Claim {
    const id = v4()
    const createdAt = new Date()
    return new Claim(id, owner, title, description, category, location, createdAt, cloneOf)
  }

  public getId(): string {
    return this.id
  }

  public getLikeCounter(): number {
    return this.likeCounter
  }

  public getDislikeCounter(): number {
    return this.dislikeCounter
  }

  public like(): void {
    this.likeCounter++
  }

  public dislike(): void {
    this.dislikeCounter++
  }

  public getOwner(): Visitor {
    return this.owner;
  }
}

export default Claim