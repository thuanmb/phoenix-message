import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { Spinner } from 'CommonComponents';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { ASSET_TYPE } from 'ReducersPath/widgets-reducer';
import { history } from 'CorePath/store';
import { fetchMessages } from './actions';
import { createNewMessage } from '../message/message-actions';

import './styles';

class Home extends PureComponent {
  static propTypes = {
    isLoading: PropTypes.bool,
    messages: PropTypes.array,
    widgetsEntities: PropTypes.array,
    fetchMessagesDispatcher: PropTypes.func,
    createNewMessageDispatcher: PropTypes.func,
  };

  componentDidMount() {
    this.props.fetchMessagesDispatcher();
  }

  getMessageTitle = (message) => {
    const { widgetsEntities } = this.props;
    const firstTextWidgetId = message.widgets.find((widgetId) => widgetsEntities[widgetId].type === ASSET_TYPE.TEXT);
    const firstTextWidget = widgetsEntities[firstTextWidgetId];

    if (firstTextWidget) {
      return firstTextWidget.asset.payload.content;
    }

    return '';
  };

  render() {
    const {
      isLoading,
      messages,
      createNewMessageDispatcher,
    } = this.props;

    return (
      <div className="home container-fluid">
        {isLoading ? (
          <Spinner />
        ) : (
          <div>
            <h3 className="text-center text-grey">Your created messages</h3>
            {messages.length ? (
              <ListGroup className="m-t-20">
                {messages.map((message) => (
                  <div key={`message-${message.id}`}>
                    <ListGroupItem className="m-t-7 pointer ibox" onClick={() => history.push(`messages/${message.id}/edit`)}>
                      <div className="font-24">{this.getMessageTitle(message)}</div>
                      <Moment fromNow className="block text-right text-grey">{message.createdAt}</Moment>
                    </ListGroupItem>
                  </div>
                ))
                }
              </ListGroup>
            ) : (
              <div className="text-center m-t-20">
                <p>No messages yet.</p>
                <Button bsStyle="success" onClick={() => createNewMessageDispatcher()}>
                  Create new message now
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

const getMessages = (messageIds, messagesEntities) => (
  messageIds.map((id) => messagesEntities[id])
);

const mapStateToProps = ({
  appState: { messageList: { isLoading, data } },
  entities: {
    messages: {
      byId: messagesEntities,
    },
    widgets: {
      byId: widgetsEntities,
    },
  },
}) => ({
  isLoading,
  messages: getMessages(data, messagesEntities),
  widgetsEntities,
});

export default connect(mapStateToProps, {
  fetchMessagesDispatcher: fetchMessages,
  createNewMessageDispatcher: createNewMessage,
})(Home);
