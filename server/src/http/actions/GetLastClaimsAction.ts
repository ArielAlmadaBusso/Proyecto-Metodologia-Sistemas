import { Request, Response } from 'express';
import claimRepository, { ClaimRepository } from '../../infrastructure/repositories/claim_respository'

class GetLastClaimsAction {
    private claimRepository: ClaimRepository;

    constructor(claimRepository: ClaimRepository) {
        this.claimRepository = claimRepository;
    }

    public async run(req: Request, res: Response) {
        try {
            const lastClaims = await this.claimRepository.listLastFive();

            res.status(200).json(lastClaims);
        } catch (error) {
            const { message } = error as Error;
            res.status(400).json({ message: message });
        }
    }
}
export default new GetLastClaimsAction (claimRepository);
