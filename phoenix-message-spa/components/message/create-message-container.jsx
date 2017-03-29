import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Message from './message';

import './editor-style';

class CreateMessageContainer extends PureComponent {
  static propTypes = {
    content: PropTypes.object,
    isLoading: PropTypes.bool,
  };

  handleAddNewText() {
    console.log(`Add new text ${this.props}`);
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

          <li className="inline-block p-20 b-white-r min-w-120 btn-action">
            <i className="block material-icons">photo</i>
            <small>Add Photo</small>
          </li>

          <li className="inline-block p-20 b-white-r min-w-120 btn-action">
            <i className="block material-icons">ondemand_video</i>
            <small>Add Youtube</small>
          </li>
        </ul>

        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : (
          <Message editing content={content} />
        )}
      </div>
    );
  }
}

const getCurrentProject = (projectList, currentProjectId) => {
  if (projectList && currentProjectId) {
    return projectList[currentProjectId];
  }

  return {};
};

const mapStateToProps = ({ appState: { currentProject }, entities: { projects: { isLoading, byId } } }) => ({
  isLoading,
  content: getCurrentProject(byId, currentProject),
});

export default connect(mapStateToProps)(CreateMessageContainer);
