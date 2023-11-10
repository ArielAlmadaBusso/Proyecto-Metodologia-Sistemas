import { Application } from 'express';
import CommonRoutes from './common.routes';
import CreateClaimAction from '../actions/CreateClaimAction';
import likeAction from '../actions/likeAction';
import GetOnFireClaimsAction from 'http/actions/GetOnFireClaimsAction';
import GetLastClaimsbyVisitorAction from 'http/actions/GetLastClaimsbyVisitorAction';

class ClaimRoutes extends CommonRoutes {
  public constructor(app: Application) {
    super(app, 'Claim');
  }

  public setUpRoutes(): Application {
    this.app.post('/claims', CreateClaimAction.run);
    this.app.put('/claims/:id/like', likeAction.run);
    this.app.get('/claims', GetLastClaimsbyVisitorAction.run);
    this.app.get('/claims/on-fire', GetOnFireClaimsAction.run);

    return this.app;
  }
}

export default ClaimRoutes;