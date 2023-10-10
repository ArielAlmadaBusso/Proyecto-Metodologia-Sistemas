import { Request, Response } from "express";
import { likeCommand } from "../../../application/commands/like/likeCommand";
import likeHandler from "../../../application/handlers/like/likeHandler";

class likeAction {
  async run(req: Request, res: Response) {
    const { id, owner, pin } = req.body;

    try {
      const command = new likeCommand(id, owner, pin);
      if (!id || !pin) {
        return res.status(400).json({ message: 'Indicar ID y PIN' });
      }

      await likeHandler.handler(command);

      return res.status(200).json({ message: "Like agregado" });
    } catch (error) {
      const { message } = error as Error;
      res.status(400).json({ message: message });
    }
  }
}

export default new likeAction();