import likeCommand from '../../application/commands/likeCommand';
import claimRepository, {ClaimRepository} from "../../infrastructure/repositories/claim_respository";
import visitorRepository, {VisitorRepository} from "../../infrastructure/repositories/visitor_repository";

export class LikeHandler {
  private claimRepository: ClaimRepository;
  private visitorRepository: VisitorRepository;

  public constructor(claimRepository: ClaimRepository, visitorRepository: VisitorRepository) {
    this.claimRepository = claimRepository;
    this.visitorRepository = visitorRepository;
  }

  public async execute(command: likeCommand) {

    const claim = await this.claimRepository.findOneById(command.getClaimId());
    const visitor = await this.visitorRepository.findOneById(command.getVisitorId());


    if (!claim) {
      throw new Error('claim not found');
    }

    if (!visitor) {
      throw new Error('visitor not found');
    }

    if (!visitor.validatePin(command.getPin())) {
      throw new Error('visitor pin does not match')
    }


    claim.like(visitor.getId());

    await this.claimRepository.save(claim);
  }
}

export default new LikeHandler(claimRepository, visitorRepository);
