import React, { PropTypes } from 'react';
import Header from 'ComponentsPath/header/header-container';

import './authorized-style';

const AuthorizedPage = ({ children }) => (
  <div>
    <Header />
    <div className={'content-wrapper content-wrapper--show-header'}>
      {children}
    </div>
  </div>
);

AuthorizedPage.propTypes = {
  children: PropTypes.object,
};

export default AuthorizedPage;
