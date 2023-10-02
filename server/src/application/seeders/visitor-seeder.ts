import  Visitor  from '../../domain/entities/visitor';
import visitorRepository from '../../infrastructure/repositories/visitor_repository';

class SeedVisitors {
  private visitors: Array<Visitor> = [];
  
  public constructor() {
    this.visitors.push(Visitor.create('1','Maty'));
    this.visitors.push(Visitor.create('2','Agus'));
    this.visitors.push(Visitor.create('3','Romi'));
    this.visitors.push(Visitor.create('4','Nadin'));
    this.visitors.push(Visitor.create('5','Agustin'));
  }

  public async save(): Promise<void> {
    for (const visitor of this.visitors) {
      await visitorRepository.save(visitor);
    }
  }
}

export default new SeedVisitors();
