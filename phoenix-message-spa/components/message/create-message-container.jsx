import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Message from './message';
import { addTextToMessage, addImageToMessage, addYoutubeToMessage } from './message-actions';

import './editor-style';

class CreateMessageContainer extends PureComponent {
  static propTypes = {
    content: PropTypes.object,
    isLoading: PropTypes.bool,
    currentProject: PropTypes.number,
    addTextToMessageDispatcher: PropTypes.func,
    addImageToMessageDispatcher: PropTypes.func,
    addYoutubeToMessageDispatcher: PropTypes.func,
    textWidget: PropTypes.object,
    imageWidget: PropTypes.object,
    youtubeWidget: PropTypes.object,
  };

  handleAddNewText() {
    const { addTextToMessageDispatcher, currentProject, textWidget } = this.props;

    addTextToMessageDispatcher(currentProject, textWidget.id, 'Some text for your message');
  }

  handleAddNewImage() {
    const { addImageToMessageDispatcher, currentProject, imageWidget } = this.props;

    addImageToMessageDispatcher(currentProject, imageWidget.id, 'http://imageurl.com');
  }

  handleAddNewYoutube() {
    const { addYoutubeToMessageDispatcher, currentProject, youtubeWidget } = this.props;

    addYoutubeToMessageDispatcher(currentProject, youtubeWidget.id, 'QUwxKWT6m7U');
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

          <li className="inline-block p-20 b-white-r min-w-120 btn-action" onClick={() => this.handleAddNewImage()}>
            <i className="block material-icons">photo</i>
            <small>Add Photo</small>
          </li>

          <li className="inline-block p-20 b-white-r min-w-120 btn-action" onClick={() => this.handleAddNewYoutube()}>
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

const getWidgetByType = (widgets, type) => {
  let widget = null;

  if (widgets) {
    Object.keys(widgets).forEach((key) => {
      if (widgets[key].type === type) {
        widget = widgets[key];
      }
    });
  }

  return widget;
};

const mapStateToProps = ({ appState: { currentProject }, entities: { projects: { isLoading, byId }, widgets } }) => ({
  isLoading,
  currentProject,
  content: getCurrentProject(byId, currentProject),
  textWidget: getWidgetByType(widgets.byId, 'text'),
  imageWidget: getWidgetByType(widgets.byId, 'image'),
  youtubeWidget: getWidgetByType(widgets.byId, 'youtube'),
});

export default connect(mapStateToProps, {
  addTextToMessageDispatcher: addTextToMessage,
  addImageToMessageDispatcher: addImageToMessage,
  addYoutubeToMessageDispatcher: addYoutubeToMessage,
})(CreateMessageContainer);
