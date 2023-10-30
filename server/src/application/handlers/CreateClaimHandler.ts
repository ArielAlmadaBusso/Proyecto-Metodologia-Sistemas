import Claim from '../../domain/entities/claim';
import CreateClaimCommand from '../commands/CreateClaimCommand';
import ClaimRepository from '../../infrastructure/repositories/claim_repository';

class CreateClaimHandler {
  private claimRepository: ClaimRepository;

  public constructor(claimRepository: ClaimRepository) {
    this.claimRepository = claimRepository;
  }

  public async execute(command: CreateClaimCommand): Promise<void> {
    const { getId, getOwner, getTitle, getDescription, getCategory, getLocation, getCreatedAt, getCloneOf } = command;
    const id = getId();
    const owner = getOwner();
    const title = getTitle(); 
    const description = getDescription();
    const category = getCategory();
    const location = getLocation();
    const createdAt = getCreatedAt();
    const cloneOf = getCloneOf();

    const claim = Claim.create(id, owner, title, description, category, location, createdAt, cloneOf);

    await this.claimRepository.save(claim);
  }
}

export default CreateClaimHandler;
