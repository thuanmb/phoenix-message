import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from './routes';

import './vendor/vendor';
import './vendor/vendor-style';
import './styles/phoenix-message';
import './init';
import './imgs';

const Root = ({ store }) =>
  <Provider store={store}>
    {routes}
  </Provider>;

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
