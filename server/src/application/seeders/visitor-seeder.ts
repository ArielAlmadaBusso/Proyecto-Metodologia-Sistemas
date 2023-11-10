import  Visitor  from '../../domain/entities/visitor';
import visitorRepository from '../../infrastructure/repositories/visitor_repository';

class SeedVisitors {
  private visitors: Array<Visitor> = [];
  
  public constructor() {
    this.visitors.push(Visitor.create('1','Coco','1'));
    this.visitors.push(Visitor.create('2','Agus','2'));
    this.visitors.push(Visitor.create('3','Romi','3'));
    this.visitors.push(Visitor.create('4','Nadin','4'));
    this.visitors.push(Visitor.create('5','Agustin','5'));
  }

  public async save(): Promise<void> {
    for (const visitor of this.visitors) {
      await visitorRepository.save(visitor);
    }
  }
}

export default new SeedVisitors();
