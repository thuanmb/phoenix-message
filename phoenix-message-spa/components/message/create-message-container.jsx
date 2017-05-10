import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'CommonComponents';
import Message from './message';
import { addTextToMessage, addImageToMessage, addYoutubeToMessage, fetchMessage, updateCurrentMessageId } from './message-actions';

import './editor-style';

class CreateMessageContainer extends PureComponent {
  static propTypes = {
    content: PropTypes.object,
    isLoading: PropTypes.bool,
    currentMessageId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    addTextToMessageDispatcher: PropTypes.func,
    fetchMessageDispatcher: PropTypes.func,
    updateCurrentMessageIdDispatcher: PropTypes.func,
    params: PropTypes.object,
  };

  componentDidMount() {
    const { content, fetchMessageDispatcher, updateCurrentMessageIdDispatcher, params: { id } } = this.props;
    updateCurrentMessageIdDispatcher(id);

    if (!content.id) {
      fetchMessageDispatcher(id);
    }
  }

  handleAddNewText() {
    const { addTextToMessageDispatcher, currentMessageId } = this.props;

    addTextToMessageDispatcher(currentMessageId, 'Some text for your message');
  }

  publishMessage() {
    window.console.log('Publish message');
  }

  render() {
    const { content, isLoading } = this.props;

    return (
      <div className="editor">
        <ul className="bg-cyan text-center text-white">
          <li className="inline-block p-20 b-white-r b-white-l min-w-120 btn-action" onClick={() => this.handleAddNewText()}>
            <i className="block material-icons">title</i>
            <small>Add Text</small>
          </li>

          <li className="inline-block p-20 b-white-r min-w-120 btn-action" onClick={() => this.publishMessage()}>
            <i className="block material-icons">share</i>
            <small>Share</small>
          </li>
        </ul>

        {isLoading ? (
          <Spinner />
        ) : (
          <Message editing content={content} />
        )}
      </div>
    );
  }
}

const getCurrentMessage = (messageList, currentMessageId) => {
  if (messageList && currentMessageId) {
    return messageList[currentMessageId];
  }

  return {};
};

const mapStateToProps = ({ appState: { currentMessageId }, entities: { messages: { isLoading, byId } } }) => ({
  isLoading,
  currentMessageId,
  content: getCurrentMessage(byId, currentMessageId),
});

export default connect(mapStateToProps, {
  addTextToMessageDispatcher: addTextToMessage,
  fetchMessageDispatcher: fetchMessage,
  updateCurrentMessageIdDispatcher: updateCurrentMessageId,
})(CreateMessageContainer);
