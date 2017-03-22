import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Avatar } from 'CommonComponents';

import './header-style';

const Header = ({ signOutHandler }) => (
  <div className="header">
    <Link className="header__logo" to={'/'}>
      <span className="header__image" />
      <span>Phoenix Message</span>
    </Link>
    <div className="header__avatar">
      <Avatar signOutHandler={signOutHandler} />
    </div>
  </div>
);

Header.propTypes = {
  signOutHandler: PropTypes.func,
};

export default Header;
