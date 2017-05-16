import React, { PropTypes } from 'react';
import Widget from './widget';

const ImageWidget = ({ widgetId, url, allowEdit, onRemoveWidget }) => (
  <Widget
    widgetId={widgetId}
    content={url}
    contentKey="url"
    allowEdit={allowEdit}
    onRemoveWidget={onRemoveWidget}
    controlId="messageContent"
    title="Image URL"
    placeholder="Enter your the image url"
    inputType="input"
  >
    <img
      alt="Message"
      className="m-t-20 b-rad-7 gallery-image"
      src={url} width="100%" key={`widget-image-${widgetId}`}
    />
  </Widget>
);

ImageWidget.propTypes = {
  widgetId: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  allowEdit: PropTypes.bool.isRequired,
  onRemoveWidget: PropTypes.func,
};

export default ImageWidget;
