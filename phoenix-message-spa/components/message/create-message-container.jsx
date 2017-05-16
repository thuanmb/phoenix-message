import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'CommonComponents';
import Message from './message';
import ShareMessagePopover from './share-message-popover';
import {
  addTextToMessage,
  addImageToMessage,
  addYoutubeToMessage,
  fetchMessage,
  updateCurrentMessageId,
  publishMessage,
  removeWidgetFromMessage,
} from './message-actions';

import './editor-style';

class CreateMessageContainer extends PureComponent {
  static propTypes = {
    content: PropTypes.object,
    isLoading: PropTypes.bool,
    currentMessageId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    addTextToMessageDispatcher: PropTypes.func,
    addImageToMessageDispatcher: PropTypes.func,
    addYoutubeToMessageDispatcher: PropTypes.func,
    fetchMessageDispatcher: PropTypes.func,
    updateCurrentMessageIdDispatcher: PropTypes.func,
    publishMessageDispatcher: PropTypes.func,
    removeWidgetFromMessageDispatcher: PropTypes.func,
    params: PropTypes.object,
    sharedMessage: PropTypes.object,
    widgetList: PropTypes.object,
  };

  constructor() {
    super();
    this.state = {
      isSharingMessage: false,
    };
  }

  componentDidMount() {
    const { content, fetchMessageDispatcher, updateCurrentMessageIdDispatcher, params: { id } } = this.props;
    updateCurrentMessageIdDispatcher(id);

    if (!content.id) {
      fetchMessageDispatcher(id);
    }
  }

  onHideDialog() {
    this.setState({
      isSharingMessage: false,
    });
  }

  getWidgetList() {
    const {
      content,
      widgetList,
      } = this.props;

    return content.widgets.map((widgetId) => widgetList[widgetId]);
  }

  handleAddNewText() {
    const { addTextToMessageDispatcher, currentMessageId } = this.props;

    addTextToMessageDispatcher(currentMessageId, 'Some text for your message');
  }

  handleAddNewImage() {
    const { addImageToMessageDispatcher, currentMessageId } = this.props;

    addImageToMessageDispatcher(currentMessageId, 'http://imageurl.com');
  }

  handleAddNewYoutube() {
    const { addYoutubeToMessageDispatcher, currentMessageId } = this.props;

    addYoutubeToMessageDispatcher(currentMessageId, 'QUwxKWT6m7U');
  }

  handlePublishMessage() {
    const {
      publishMessageDispatcher,
      currentMessageId,
      } = this.props;

    publishMessageDispatcher(currentMessageId);

    this.setState({
      isSharingMessage: true,
    });
  }

  handleRemoveWidget(widgetId) {
    const {
      removeWidgetFromMessageDispatcher,
      currentMessageId,
    } = this.props;

    removeWidgetFromMessageDispatcher(currentMessageId, widgetId);
  }

  render() {
    const {
      isLoading,
      sharedMessage,
    } = this.props;

    return (
      <div className="editor">
        <ul className="bg-cyan text-center text-white">
          <li className="inline-block p-20 b-white-r b-white-l min-w-120 btn-action" onClick={() => this.handleAddNewText()}>
            <i className="block material-icons">title</i>
            <small>Add Text</small>
          </li>

          <li className="inline-block p-20 b-white-r min-w-120 btn-action" onClick={() => this.handleAddNewImage()}>
            <i className="block material-icons">photo</i>
            <small>Add Photo</small>
          </li>

          <li className="inline-block p-20 b-white-r min-w-120 btn-action" onClick={() => this.handleAddNewYoutube()}>
            <i className="block material-icons">ondemand_video</i>
            <small>Add Youtube</small>
          </li>

          <li className="inline-block p-20 b-white-r min-w-120 btn-action" onClick={() => this.handlePublishMessage()}>
            <i className="block material-icons">share</i>
            <small>Share</small>
          </li>
        </ul>

        {isLoading ? (
          <Spinner />
        ) : (
          <Message editing widgets={this.getWidgetList()} onRemoveWidget={(id) => this.handleRemoveWidget(id)} />
        )}

        <ShareMessagePopover
          isShow={this.state.isSharingMessage}
          isCreating={sharedMessage.isLoading}
          onHide={() => this.onHideDialog()}
          sharedMessageUrl={sharedMessage.url}
        />
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

const mapStateToProps = ({
  appState: {
    currentMessageId,
    sharedMessage,
  },
  entities: {
    messages: {
      isLoading,
      byId: messageList,
    },
    widgets: {
      byId: widgetList,
    },
  },
}) => ({
  isLoading,
  currentMessageId,
  content: getCurrentMessage(messageList, currentMessageId),
  sharedMessage,
  widgetList,
});

export default connect(mapStateToProps, {
  addTextToMessageDispatcher: addTextToMessage,
  addImageToMessageDispatcher: addImageToMessage,
  addYoutubeToMessageDispatcher: addYoutubeToMessage,
  fetchMessageDispatcher: fetchMessage,
  updateCurrentMessageIdDispatcher: updateCurrentMessageId,
  publishMessageDispatcher: publishMessage,
  removeWidgetFromMessageDispatcher: removeWidgetFromMessage,
})(CreateMessageContainer);
