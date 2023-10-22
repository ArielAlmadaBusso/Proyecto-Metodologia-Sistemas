import Claim from "../../domain/entities/claim"

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
}

export default ClaimRepository