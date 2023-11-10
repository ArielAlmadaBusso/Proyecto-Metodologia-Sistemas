import { Request, Response } from 'express'
import CreateVisitorCommand from '../../application/commands/CreateVisitorCommand'
import CreateVisitorHandler from '../../application/handlers/CreateVisitorHandler'

class CreateVisitorAction{
    async run(req: Request,res: Response){
        const {id,ip,nickname,pin} = req.body
        try{
            const command = new CreateVisitorCommand(id,ip,nickname,pin)
            await CreateVisitorHandler.execute(command)
            return res.status(201).json({message: 'Visitor created successfully'})
        }catch(error){
            const {message} = error as Error
            res.status(400).json({message: message})
        }
    }
}

export default new CreateVisitorAction()