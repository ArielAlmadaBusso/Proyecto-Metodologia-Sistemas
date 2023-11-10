import dislikeCommand from '../../application/commands/dislikeCommand';
import claimRepository, {ClaimRepository} from "../../infrastructure/repositories/claim_respository";
import visitorRepository, {VisitorRepository} from "../../infrastructure/repositories/visitor_repository";


class DislikeAction {
  private claimRepository: ClaimRepository;
  private visitorRepository: VisitorRepository;

  public constructor(claimRepository: ClaimRepository, visitorRepository: VisitorRepository) {
    this.claimRepository = claimRepository;
    this.visitorRepository = visitorRepository;
  }

  public async execute(command: dislikeCommand) {
    const {claimId, visitorId} = command;

    const claim = await this.claimRepository.findOneById(claimId);
    const visitor = await this.visitorRepository.findOneById(visitorId);

    if (!claim) {
      throw new Error('claim not found');
    }

    if (!visitor) {
      throw new Error('visitor not found');
    }

    if (!visitor.validatePin(command.getPin())) {
      throw new Error('visitor pin does not match')
    }

    claim.dislike(visitor.getId());
  }
}

export default new DislikeAction(claimRepository, visitorRepository);