import Claim from '../../domain/entities/claim';
import CreateClaimCommand from '../commands/CreateClaimCommand';
import { ClaimRepository } from 'infrastructure/repositories/claim_respository';

class CreateClaimHandler {
  private claimRepository: ClaimRepository;

  public constructor(claimRepository: ClaimRepository) {
    this.claimRepository = claimRepository;
  }

  public async execute(command: CreateClaimCommand): Promise<void> {
    const {  getOwner, getTitle, getDescription, getCategory, getLocation, getCloneOf } = command;
    const owner = getOwner();
    const title = getTitle(); 
    const description = getDescription();
    const category = getCategory();
    const location = getLocation();
    const cloneOf = getCloneOf()

    const claim = Claim.create( owner, title, description, category, location);

    await this.claimRepository.save(claim);
  }
}

export default CreateClaimHandler;
