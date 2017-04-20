import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import 'whatwg-fetch';
import Header from './header';
import { createNewMessage } from '../message/message-actions';

class HeaderContainer extends Component {

  static propTypes = {
    createNewMessageDispatcher: PropTypes.func,
  };

  static submitSignOut() {
    fetch('/users/sign_out', {
      method: 'DELETE',
    }).then(() => {
      window.location.href = 'users/sign_in';
    });
  }

  addMessage() {
    this.props.createNewMessageDispatcher();
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
  createNewMessageDispatcher: createNewMessage,
})(HeaderContainer);
