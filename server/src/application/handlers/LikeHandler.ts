import likeCommand from '../../application/commands/likeCommand';
import ClaimRepository from "../../infrastructure/repositories/claim_respository";
import VisitorRepository from "../../infrastructure/repositories/visitor_repository";

class LikeHandler {
    private claimRepository: ClaimRepository;
    private visitorRepository: VisitorRepository;

    public constructor(claimRepository: ClaimRepository, visitorRepository: VisitorRepository) {
        this.claimRepository = claimRepository;
        this.visitorRepository = visitorRepository;
    }

    public async execute(command: likeCommand) {
        const { claimId, visitorId } = command;

        const claim = await this.claimRepository.findOneById(claimId);
        const visitor = await this.visitorRepository.findOneById(visitorId);

        if (claim != null && visitor?.getId() != "0" && visitor?.getPin() != 0) {
            claim.like();
        }
    }
}

export default LikeHandler;
