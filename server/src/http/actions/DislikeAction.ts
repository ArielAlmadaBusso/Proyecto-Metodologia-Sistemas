import { Request, Response } from 'express';
import disLikeCommand from '../../application/commands/dislike/disLikeCommand';
import disLikeHandler from '../../application/handlers/disLike/disLikeHandler';

class DislikeAction {
    async run(req: Request, res: Response) {
        const { id, owner, pin } = req.body;

        try {
            const command = new disLikeCommand(id, owner, pin);
            if (!id || !pin) {
                return res.status(400).json({ message: 'Indicar ID y PIN' });
            }

            await disLikeHandler.handler(command);

            return res.status(200).json({ message: "Dislike agregado" });
        } catch (error) {
            const { message } = error as Error;
            res.status(400).json({ message: message });
        }
    }
}

export default DislikeAction;