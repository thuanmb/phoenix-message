import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { history } from 'CorePath/store';
import routes from 'CorePath/routes';
import App from './pages/app';
import Authorized from './pages/authorized/authorized';
import PublicPage from './pages/public/public';
import NoMatch from './components/404/404';
import Home from './components/home/home';
import CreateMessageContainer from './components/message/create-message-container';
import MessageContainer from './components/message/message-container';
import SharedMessageContainer from './components/message/shared-message-container';

const Routes = (
  <Router history={history}>
    <Route path="/" component={App}>
      <Route component={Authorized}>
        <IndexRoute component={Home} />
        <Route path={routes.paths.createMessage.rawUrl} component={CreateMessageContainer} />
        <Route path={routes.paths.showMessage} component={MessageContainer} />
      </Route>

      <Route component={PublicPage}>
        <Route path={routes.paths.sharedMessage} component={SharedMessageContainer} />
      </Route>
    </Route>
    <Route path="*" component={NoMatch} />
  </Router>
);
export default Routes;
