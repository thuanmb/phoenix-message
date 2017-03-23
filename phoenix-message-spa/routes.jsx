import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { history } from 'CorePath/store';
import routes from 'CorePath/routes';
import App from './pages/app';
import Authorized from './pages/authorized/authorized';
import NoMatch from './components/404/404';
import Home from './components/home/home';
import Editor from './components/editor/editor';
import Message from './components/message/message';

const Routes = (
  <Router history={history}>
    <Route path="/" component={App}>
      <Route component={Authorized}>
        <IndexRoute component={Home} />
        <Route path={routes.paths.createMessage} component={Editor} />
        <Route path={routes.paths.showMessage} component={Message} />
      </Route>
    </Route>
    <Route path="*" component={NoMatch} />
  </Router>
);
export default Routes;
