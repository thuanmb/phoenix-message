import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import './message-style';

class Message extends PureComponent {
  static propTypes = {
    editing: PropTypes.bool,
    content: PropTypes.object,
    widgetList: PropTypes.object,
  };

  render() {
    const { editing, widgetList, content } = this.props;
    return (
      <div className={`message bg-grey-3 text-white scrollable-y p-t-20 p-b-20 ${editing ? 'message--editing' : ''}`}>
        {content.widgets.map((widgetData) => {
          let widgetHtml;
          const widget = widgetList[widgetData.widgetId];

          switch (widget.type) {
            case 'text':
              widgetHtml = (
                <h3 className="tlt text-deeppink">
                  <ul className="texts no-list-style">
                    <li data-in-effect="tada" className="m-t-20">{ widgetData.properties.content }</li>
                  </ul>
                </h3>
              );
              break;
            case 'image':
              widgetHtml = (
                <img alt="Message" className="m-t-20 b-rad-7 gallery-image" src={widgetData.properties.url} width="100%" />
              );
              break;
            case 'youtube':
              widgetHtml = (
                <div className="message__video-container m-t-20">
                  <iframe className="full-screen" src={`https://www.youtube.com/embed/${widgetData.properties.videoId}`} frameBorder="0" allowFullScreen />
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

const mapStateToProps = ({ entities: { widgets: { byId } } }) => ({
  widgetList: byId,
});

export default connect(mapStateToProps)(Message);
