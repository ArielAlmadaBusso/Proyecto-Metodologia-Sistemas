import claimRepository,  {ClaimRepository} from "../../infrastructure/repositories/claim_respository"
import reportClaimCommand from '../commands/ReportClaimCommand';

export class ReportClaimHandler {
    constructor(
        private claimRepository : ClaimRepository
    ) {
  }

  public async handle (command: reportClaimCommand): Promise<void> {
    const duplicatedClaim = await this.claimRepository.findOneById(command.getId())

    if(!duplicatedClaim){
        throw new Error ('Claim not Found')
    }

    const originalClaim = await this.claimRepository.findOneById(command.getOriginalId())

    if (!originalClaim){
        throw new Error('Claim not found')
    }

    duplicatedClaim.report(originalClaim)
  }
}

export default new ReportClaimHandler(claimRepository)