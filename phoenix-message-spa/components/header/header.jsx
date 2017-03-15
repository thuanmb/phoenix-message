import React from 'react';
import { Link } from 'react-router';
import Gravatar from 'react-gravatar';
import { ButtonToolbar, Dropdown, MenuItem } from 'react-bootstrap';

import './header-style';

const Header = () => (
  <div className="header">
    <Link className="header__logo" to={'/'}>
      <span className="header__image" />
      <span>Phoenix Message</span>
    </Link>
    <div className="header__avatar">
      <ButtonToolbar>
        <Dropdown pullRight>
          <Dropdown.Toggle noCaret>
            <Gravatar email="buimthuan@gmail.com" rating="pg" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="super-colors">
            <MenuItem eventKey="1">
              <a className="dropdown-item" href="/logout">Logout</a>
            </MenuItem>
          </Dropdown.Menu>
        </Dropdown>
      </ButtonToolbar>
    </div>
  </div>
);

export default Header;
