import React, { PropTypes, PureComponent } from 'react';
import './message-style';
import TextWidget from '../widgets/text-widget';
import ImageWidget from '../widgets/image-widget';

class Message extends PureComponent {
  static propTypes = {
    editing: PropTypes.bool,
    widgets: PropTypes.array,
    publish: PropTypes.bool,
    onRemoveWidget: PropTypes.func,
  };

  render() {
    const {
      editing,
      widgets,
      publish,
      onRemoveWidget,
    } = this.props;
    return (
      <div className={`message bg-grey-3 text-white scrollable-y p-t-20 p-b-20 ${editing ? 'message--editing' : ''} ${publish ? 'message--publish' : ''}`}>
        {widgets.map((widget) => {
          let widgetHtml;
          const widgetId = widget.id;
          const payload = widget.asset.payload;

          switch (widget.type) {
            case 'text':
              widgetHtml = (
                <TextWidget
                  key={`widget-${widget.type}-${widgetId}`}
                  widgetId={widgetId}
                  content={payload.content}
                  allowEdit={editing}
                  onRemoveWidget={onRemoveWidget}
                />
              );
              break;
            case 'image':
              widgetHtml = (
                <ImageWidget
                  key={`widget-${widget.type}-${widgetId}`}
                  widgetId={widgetId}
                  url={payload.url}
                  allowEdit={editing}
                  onRemoveWidget={onRemoveWidget}
                />
              );
              break;
            case 'youtube':
              widgetHtml = (
                <div className="message__video-container m-t-20" key={`widget-${widget.type}-${widgetId}`}>
                  <iframe className="full-screen" src={`https://www.youtube.com/embed/${payload.videoId}`} frameBorder="0" allowFullScreen />
                </div>
              );
              break;
            default:
              widgetHtml = '';
          }

          return widgetHtml;
        })}
      </div>
    );
  }
}

export default Message;
