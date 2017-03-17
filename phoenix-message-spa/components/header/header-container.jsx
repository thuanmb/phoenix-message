import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'whatwg-fetch';
import Header from './header';

class HeaderContainer extends Component {

  static submitSignOut() {
    fetch('/users/sign_out', {
      method: 'DELETE',
    }).then(() => {
       window.location.href = 'users/sign_in';
    });
  }

  render() {
    return (
      <Header signOutHandler={() => this.constructor.submitSignOut()} />
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(HeaderContainer);
