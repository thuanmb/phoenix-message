import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Gravatar from 'react-gravatar';
import { ButtonToolbar, Dropdown, MenuItem } from 'react-bootstrap';

import './header-style';

const Header = ({ signOutHandler }) => (
  <div className="header">
    <Link className="header__logo" to={'/'}>
      <span className="header__image" />
      <span>Phoenix Message</span>
    </Link>
    <div className="header__avatar">
      <ButtonToolbar>
        <Dropdown pullRight id="gravatar-dropdown">
          <Dropdown.Toggle noCaret>
            <Gravatar email="buimthuan@gmail.com" rating="pg" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="super-colors">
            <MenuItem eventKey="1" onClick={signOutHandler}>
              Logout
            </MenuItem>
          </Dropdown.Menu>
        </Dropdown>
      </ButtonToolbar>
    </div>
  </div>
);

Header.propTypes = {
  signOutHandler: PropTypes.func,
};

export default Header;
