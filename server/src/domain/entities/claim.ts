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
    category: Category, location: string, createdAt: Date) {
    this.id = id
    this.owner = owner
    this.title = title
    this.description = description
    this.category = category
    this.location = location
    this.createdAt = createdAt
    this.cloneOf = null
  }

  public static create (owner: Visitor, title: string,
    description: string, category: Category, location: string): Claim {
    const id = v4()
    const createdAt = new Date()
    return new Claim(id, owner, title, description, category, location, createdAt)
  }

  public getId(): string {
    return this.id
  }

  public getOwner(): Visitor {
    return this.owner;
  }
  
  public getTitle(): string {
    return this.title
  }

  public getDescription(): string {
    return this.description
  }

  public getCategory(): Category {
    return this.category
  }

  public getLocation(): string {
    return this.location
  }

  public getCloneOf():  Claim | null  {
    return this.cloneOf
  }

  public getCreatedAt(): Date {
    return this.createdAt
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
}

export default Claim