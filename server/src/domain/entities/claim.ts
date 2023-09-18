import { v4 } from 'uuiid';

export class Claim {
    private readonly id: string;
    private owner: Visitor;
    private title: string;
    private description: string;
    private category: Category;
    private location: string;
    private createdAt: Date;
    private cloneOf?: Claim;

    private constructor(id: string, owner: object, title: string, description: string,
        category: object, location: string, cretedAt: Date) {
        this.id = id;
        this.owner = owner;
        this.title = title;
        this.description = description;
        this.category = category;
        this.location = location;
        this.createdAt = new Date;
    }

    public static create(Owner: object, Title: string, 
        Description: string, Category: object, Location: string,
        CreatedAt: Date, CloneOf?: Claim): Claim {
        const id = v4();
        const owner = Owner;
        const title = Title;
        const description = Description;
        const category = Category;
        const location = Location;
        const createdAt = new Date;
        const claim = new Claim(id, owner, title, description, category, location, createdAt);
        return claim;
    }
}