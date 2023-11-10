import { Application } from 'express';
import CommonRoutes from './common.routes';
import CreateVisitorAction from 'http/actions/CreateVisitorAction';

class VisitorRoutes extends CommonRoutes {
  public constructor (app: Application) {
    super(app, 'Visitor')
  }

  public setUpRoutes (): Application {
    this.app.get('/visitor', CreateVisitorAction.run)

    return this.app
  }
}

export default VisitorRoutes