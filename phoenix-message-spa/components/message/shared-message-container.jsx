import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Message from './message';
import { updateCurrentProject } from './message-actions';

class SharedMessageContainer extends PureComponent {
  static propTypes = {
    updateCurrentProjectDispatcher: PropTypes.func,
    content: PropTypes.object,
    params: PropTypes.object,
  };

  componentWillMount() {
    const { params: { id }, updateCurrentProjectDispatcher } = this.props;
    updateCurrentProjectDispatcher(id);
  }

  render() {
    const { content } = this.props;
    return (
      <Message editing={false} content={content} />
    );
  }
}

const mapStateToProps = ({ appState: { currentProject }, entities: { projects: { byId } } }) => ({
  content: byId[currentProject],
});

export default connect(mapStateToProps, {
  updateCurrentProjectDispatcher: updateCurrentProject,
})(SharedMessageContainer);
