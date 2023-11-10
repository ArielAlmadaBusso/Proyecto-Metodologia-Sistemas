import Claim from '../../domain/entities/claim';
import ReportClaimCommand from '../commands/ReportClaimCommand';
import {ClaimRepository} from 'infrastructure/repositories/claim_respository';

class ReportClaimHandler {
  private claimRepository: ClaimRepository;

  public constructor(claimRepository: ClaimRepository) {
    this.claimRepository = claimRepository;
  }

  public async execute(command: ReportClaimCommand): Promise<void> {
    const {  getOwner, getTitle, getDescription, getCategory, getLocation } = command;
    const owner = getOwner();
    const title = getTitle(); 
    const description = getDescription();
    const category = getCategory();
    const location = getLocation();

    const claim = Claim.create( owner, title, description, category, location);

    await this.claimRepository.save(claim);
  }
}

export default ReportClaimHandler;