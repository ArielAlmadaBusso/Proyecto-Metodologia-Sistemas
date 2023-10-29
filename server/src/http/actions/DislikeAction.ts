import dislikeCommand from '../../application/commands/dislikeCommand';
import ClaimRepository from "../../infrastructure/repositories/claim_respository";
import VisitorRepository from "../../infrastructure/repositories/visitor_repository";


class DislikeAction {
    private claimRepository: ClaimRepository;
    private visitorRepository: VisitorRepository;

    public constructor(claimRepository: ClaimRepository, visitorRepository: VisitorRepository) {
        this.claimRepository = claimRepository;
        this.visitorRepository = visitorRepository;
    }

    public async execute(command: dislikeCommand) {
        const { claimId, visitorId } = command;

        const claim = await this.claimRepository.findOneById(claimId);
        const visitor = await this.visitorRepository.findOneById(visitorId);

        if (claim != null && visitor?.getId() != "0" && visitor?.getPin() != 0) {
            claim.dislike();
        }
    }
}

export default DislikeAction;