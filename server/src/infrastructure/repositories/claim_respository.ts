import Claim from "../../domain/entities/claim"
import Visitor from "../../domain/entities/visitor"

class ClaimRepository{
    private claim: Claim[]

    public constructor(){
        this.claim = []
    }

    public async save (claim: Claim): Promise<void>{
        const saveClaim = this.claim.find(a => a.getId() === claim.getId())
        if(saveClaim){
            this.claim.splice(this.claim.indexOf(saveClaim),1)
        }
        this.claim.push(claim)
    }

    public async findOneById(id:string):Promise<Claim | null>{
        const claim = this.claim.find(a => a.getId() === id)
        return claim ? claim : null
    }
    
    public async findLastFiveByVisitor(visitor: Visitor): Promise<Claim[]> {
        const lastFiveClaims = this.claim
            .filter(a => a.getOwner().getId() === visitor.getId())
            .slice(-5);
        return lastFiveClaims;
    }

}

export default ClaimRepository