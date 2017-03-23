import React, { PropTypes } from 'react';
import Gravatar from 'react-gravatar';
import { ButtonToolbar, Dropdown, MenuItem } from 'react-bootstrap';

import './avatar-style';

const Avatar = ({ signOutHandler }) => (
  <ButtonToolbar>
    <Dropdown pullRight id="gravatar-dropdown" className="action-dropdown-btn">
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
);

Avatar.propTypes = {
  signOutHandler: PropTypes.func,
};

export default Avatar;
