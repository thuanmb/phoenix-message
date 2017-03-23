import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from 'CorePath/store';
import 'whatwg-fetch';
import routes from 'CorePath/routes';
import Header from './header';

class HeaderContainer extends Component {

  static submitSignOut() {
    fetch('/users/sign_out', {
      method: 'DELETE',
    }).then(() => {
      window.location.href = 'users/sign_in';
    });
  }

  static addMessage() {
    history.push(routes.paths.createMessage);
  }

  render() {
    return (
      <Header
        signOutHandler={() => this.constructor.submitSignOut()}
        addMessageHandler={() => this.constructor.addMessage()}
      />
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(HeaderContainer);
