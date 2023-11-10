import Visitor from '../../domain/entities/visitor';
import Category from '../../domain/entities/category';
import Claim from '../../domain/entities/claim';

class CreateClaimCommand {
    private readonly id: string;
    private owner: Visitor;
    private title: string;
    private description: string;
    private category: Category;
    private location: string;
    private createdAt: Date;
    private cloneOf: Claim | null;

    public constructor(
        id: string,
        owner: Visitor,
        title: string,
        description: string,
        category: Category,
        location: string,
        createdAt: Date,
        cloneOf: Claim | null
      ) {
        
        this.id = id;
        this.owner = owner;
        this.title = title;
        this.description = description;
        this.category = category;
        this.location = location;
        this.createdAt = createdAt;
        this.cloneOf = cloneOf;
      }

      public getId(): string {
        return this.id;
      }
    
      public getOwner(): Visitor {
        return this.owner;
      }
    
      public getTitle(): string {
        return this.title;
      }

      public getDescription(): string {
        return this.description;
      }

      public getCategory(): Category {
        return this.category;
      }

      public getLocation(): string {
        return this.location;
      }

      public getCreatedAt(): Date {
        return this.createdAt;
      }
     
}
export default CreateClaimCommand;
    