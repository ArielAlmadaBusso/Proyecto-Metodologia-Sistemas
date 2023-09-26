import { Request, Response } from 'express';
import CreateCategoryCommand from '../../application/commands/CreateCategoryCommand';
import CreateCategoryHandler from '../../application/handlers/CreateCategoryHandler';


class GetCategoriesAction {
    public async run(req: Request, res: Response) {
        const { name, color } = req.body;
        try {
            const command = new CreateCategoryCommand(name, color);
            const category = await CreateCategoryHandler.execute(command);

           return res.status(201).json(
            { message: 'Category created successfully', category }
            );
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}
  
export default new GetCategoriesAction();