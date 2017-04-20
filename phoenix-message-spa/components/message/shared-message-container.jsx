import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Message from './message';
import { updateCurrentMessageId } from './message-actions';

class SharedMessageContainer extends PureComponent {
  static propTypes = {
    updateCurrentMessageIdDispatcher: PropTypes.func,
    content: PropTypes.object,
    params: PropTypes.object,
  };

  componentWillMount() {
    const { params: { id }, updateCurrentMessageIdDispatcher } = this.props;
    updateCurrentMessageIdDispatcher(id);
  }

  render() {
    const { content } = this.props;
    return (
      <Message editing={false} content={content} />
    );
  }
}

const mapStateToProps = ({ appState: { currentMessageId }, entities: { messages: { byId } } }) => ({
  content: byId[currentMessageId],
});

export default connect(mapStateToProps, {
  updateCurrentMessageIdDispatcher: updateCurrentMessageId,
})(SharedMessageContainer);
