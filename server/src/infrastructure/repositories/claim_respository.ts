import Claim from "../../domain/entities/claim"

class ClaimRepository {
  private claims: Claim[]

  public constructor () {
    this.claims = []
  }

  public async save (claim: Claim): Promise<void> {
    const saveClaim = this.claims.find(a => a.getId() === claim.getId())
    if (saveClaim) {
      this.claims.splice(this.claims.indexOf(saveClaim), 1)
    }
    this.claims.push(claim)
  }

  public async findOneById (id: string): Promise<Claim | null> {
    const claim = this.claims.find(a => a.getId() === id)

    return claim || null
  }

  public async LastHourOnFire (): Promise<Claim[]> {
    const oneHourAgo = new Date()
    oneHourAgo.setHours(oneHourAgo.getHours() - 1)

    return this.claims
      .filter(claim => claim.getCreatedAt() >= oneHourAgo)
      .sort((a, b) => b.getLikeCounter() - a.getLikeCounter())
      .slice(0, 5)
  }

  public async listLastFive(): Promise<Claim[]> {
      return this.claims.slice(-5);
  }
}

export default new ClaimRepository()
export { ClaimRepository }