import { Request, Response } from 'express'
import {CreateClaimCommand} from '../../application/commands/claim/CreateClaimCommand'
import CreateClaimHandler from '../../application/handlers/CreateClaimHandler'

class CreateClaimAction{
    async run(req: Request,res: Response){
        const {owner,title,description,category,location,createdAt} = req.body
        try{
            const command = new CreateClaimCommand(owner,title,description,category,location,createdAt)
            await CreateClaimHandler.execute(command)
            return res.status(201).json({message: 'Claim created successfully'})
        }catch(error){
            const {message} = error as Error
            res.status(400).json({message: message})
        }
    }
}

export default new CreateClaimAction()