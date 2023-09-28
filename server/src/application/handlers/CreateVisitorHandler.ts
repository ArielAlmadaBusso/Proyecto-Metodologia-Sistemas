import Visitor from '../../domain/entities/visitor';
import CreateVisitorCommand from '../commands/CreateVisitorCommand';

class CreateVisitorHandler {
  public async execute(command: CreateVisitorCommand) {
    const { ip, nickname } = command;
    const visitor = Visitor.create(ip, nickname);

    return visitor;
  }
}

export default new CreateVisitorHandler();
