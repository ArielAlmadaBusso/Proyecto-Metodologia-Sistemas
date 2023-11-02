import {v4} from 'uuid'
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
  private likes: string[] = []
  private dislikes: string[] = []

  private constructor(
    id: string,
    owner: Visitor,
    title: string,
    description: string,
    category: Category,
    location: string,
    createdAt: Date,
  ) {
    this.id = id
    this.owner = owner
    this.title = title
    this.description = description
    this.category = category
    this.location = location
    this.createdAt = createdAt
    this.cloneOf = null;
  }

  public static create(
    owner: Visitor,
    title: string,
    description: string,
    category: Category,
    location: string,
  ): Claim {
    const id = v4()
    const createdAt = new Date()
    return new Claim(id, owner, title, description, category, location, createdAt)
  }

  public getId(): string {
    return this.id
  }

  public getLikeCounter(): number {
    return this.likes.length;
  }

  public getDislikeCounter(): number {
    return this.dislikes.length;
  }

  public like(id: string): void {
    if (this.hasVisitorLiked(id)) {
      throw new Error('Visitor has already liked this claim.')
    }

    this.likes.push(id)
  }

  public dislike(id: string): void {
    this.dislikes.push(id)
  }

  public getOwner(): Visitor {
    return this.owner;
  }

  hasVisitorLiked(id: string) {
    return this.likes.includes(id);
  }

  public getCreatedAt(): Date {
    return this.createdAt
  }

  public getTitle() {
    return this.title;
  }

  public getDescription() {
    return this.description;
  }

  public getCategory() {
    return this.category;
  }

  public getLocation() {
    return this.location;
  }

  public getClonedOf() {
    return this.cloneOf;
  }
}

export default Claim