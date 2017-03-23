import React, { PropTypes } from 'react';
import { ButtonToolbar, Dropdown, MenuItem } from 'react-bootstrap';

const ActionsDropdown = ({ addMessageHandler }) => (
  <ButtonToolbar>
    <Dropdown pullRight id="actions-dropdown" className="action-dropdown-btn">
      <Dropdown.Toggle noCaret>
        <i className="material-icons">add</i>
      </Dropdown.Toggle>
      <Dropdown.Menu className="super-colors">
        <MenuItem eventKey="1" onClick={addMessageHandler}>
          Create Message
        </MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  </ButtonToolbar>
);

ActionsDropdown.propTypes = {
  addMessageHandler: PropTypes.func,
};

export default ActionsDropdown;
