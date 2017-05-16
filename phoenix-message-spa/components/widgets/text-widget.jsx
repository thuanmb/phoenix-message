import React, { PropTypes } from 'react';
import html from 'react-escape-html';
import Widget from './widget';

const TextWidget = ({ widgetId, content, allowEdit, onRemoveWidget }) => {
  const reg = /\n/g;
  let escapedContent = html`${content}`;
  escapedContent = {
    __html: escapedContent.__html.replace(reg, '<br>'),
  };

  return (
    <Widget
      widgetId={widgetId}
      content={content}
      contentKey="content"
      allowEdit={allowEdit}
      onRemoveWidget={onRemoveWidget}
      controlId="messageContent"
      title="Message"
      placeholder="Enter your message"
      inputType="textarea"
    >
      <h3
        className="tlt text-deeppink"
        dangerouslySetInnerHTML={escapedContent}
      />
    </Widget>
  );
};

TextWidget.propTypes = {
  widgetId: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  allowEdit: PropTypes.bool.isRequired,
  onRemoveWidget: PropTypes.func,
};

export default TextWidget;
