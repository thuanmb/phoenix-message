import React, { PropTypes } from 'react';
import Widget from './widget';

const YouTubeWidget = ({ widgetId, videoId, allowEdit, onRemoveWidget }) => (
  <Widget
    widgetId={widgetId}
    content={videoId}
    contentKey="videoId"
    allowEdit={allowEdit}
    onRemoveWidget={onRemoveWidget}
    controlId="messageContent"
    title="Youtube ID"
    placeholder="Enter your the Youtube ID"
    inputType="input"
    styleName="m-t-20 p-10-20 b-all b-rad-7"
  >
    <div className="message__video-container" key={`widget-youtube-${widgetId}`}>
      <iframe className="full-screen" src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0" allowFullScreen />
    </div>
  </Widget>
);

YouTubeWidget.propTypes = {
  widgetId: PropTypes.number.isRequired,
  videoId: PropTypes.string.isRequired,
  allowEdit: PropTypes.bool.isRequired,
  onRemoveWidget: PropTypes.func,
};

export default YouTubeWidget;
