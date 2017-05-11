import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'CommonComponents';
import Message from './message';
import { fetchSharedMessage } from './message-actions';

class SharedMessageContainer extends PureComponent {
  static propTypes = {
    fetchSharedMessageDispatcher: PropTypes.func,
    isLoading: PropTypes.bool,
    content: PropTypes.object,
    params: PropTypes.object,
  };

  componentWillMount() {
    const { params: { token }, fetchSharedMessageDispatcher } = this.props;
    fetchSharedMessageDispatcher(token);
  }

  render() {
    const { isLoading, content } = this.props;
    return (
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <Message publish editing={false} widgets={content.widgets} />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ sharedMessages: { isLoading, content } }) => ({
  isLoading,
  content,
});

export default connect(mapStateToProps, {
  fetchSharedMessageDispatcher: fetchSharedMessage,
})(SharedMessageContainer);
