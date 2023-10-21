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
}
  
export default new ClaimRepository()
export { ClaimRepository }
  