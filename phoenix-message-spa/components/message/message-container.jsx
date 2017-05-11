import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Message from './message';
import { updateCurrentMessageId } from './message-actions';

class MessageContainer extends PureComponent {
  static propTypes = {
    updateCurrentMessageIdDispatcher: PropTypes.func,
    content: PropTypes.object,
    params: PropTypes.object,
    widgetList: PropTypes.object,
  };

  componentWillMount() {
    const { params: { id }, updateCurrentMessageIdDispatcher } = this.props;
    updateCurrentMessageIdDispatcher(id);
  }

  getWidgetList() {
    const {
      content,
      widgetList,
      } = this.props;

    return content.widgets.map((widgetId) => widgetList[widgetId]);
  }

  render() {
    return (
      <Message editing={false} widgets={this.getWidgetList()} />
    );
  }
}

const mapStateToProps = ({
  appState: {
    currentMessageId,
  },
  entities: {
    messages: {
      byId: messageList,
    },
    widgets: {
      byId: widgetList,
    },
  },
}) => ({
  content: messageList[currentMessageId],
  widgetList,
});

export default connect(mapStateToProps, {
  updateCurrentMessageIdDispatcher: updateCurrentMessageId,
})(MessageContainer);
