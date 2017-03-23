import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Avatar } from 'CommonComponents';
import ActionsDropdown from './actions-dropdown';

import './header-style';

const Header = ({ signOutHandler, addMessageHandler }) => (
  <div className="header">
    <Link className="header__logo" to={'/'}>
      <span className="header__image" />
      <span>Phoenix Message</span>
    </Link>
    <div className="header__action-btn">
      <Avatar signOutHandler={signOutHandler} />
    </div>

    <div className="header__action-btn m-r-7">
      <ActionsDropdown addMessageHandler={addMessageHandler} />
    </div>
  </div>
);

Header.propTypes = {
  signOutHandler: PropTypes.func,
  addMessageHandler: PropTypes.func,
};

export default Header;
