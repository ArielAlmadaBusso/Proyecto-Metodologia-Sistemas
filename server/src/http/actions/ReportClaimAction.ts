import {Request, Response} from 'express';
import ReportClaimCommand from '../../application/commands/ReportClaimCommand';
import reportClaimHandler, {ReportClaimHandler} from '../../application/handlers/ReportClaimHandler';

export class ReportClaimAction {

  constructor(
    private handler: ReportClaimHandler,
  ) {
  }

  public async run(req: Request, res: Response): Promise<void> {
    const {id} = req.params;
    const {originalId} = req.body;

    if (!originalId || !id) {
      res.status(400).json({message: 'originalId is required'});
      return;
    }

    try {
      const command = new ReportClaimCommand(id, originalId);

      await this.handler.handle(command);

      res.status(200).json({message: 'claim reported'});

    } catch (e: any) {
      res.status(400).json({message: e.message})
    }


  }
}

export default new ReportClaimAction(reportClaimHandler)