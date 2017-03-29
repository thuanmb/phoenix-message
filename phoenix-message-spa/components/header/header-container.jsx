import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { history } from 'CorePath/store';
import 'whatwg-fetch';
import routes from 'CorePath/routes';
import Header from './header';
import { createNewProject } from '../message/message-actions';

class HeaderContainer extends Component {

  static propTypes = {
    createNewProjectDispatcher: PropTypes.func,
  };

  static submitSignOut() {
    fetch('/users/sign_out', {
      method: 'DELETE',
    }).then(() => {
      window.location.href = 'users/sign_in';
    });
  }

  addMessage() {
    this.props.createNewProjectDispatcher();
    history.push(routes.paths.createMessage);
  }

  render() {
    return (
      <Header
        signOutHandler={() => this.constructor.submitSignOut()}
        addMessageHandler={() => this.addMessage()}
      />
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, {
  createNewProjectDispatcher: createNewProject,
})(HeaderContainer);
