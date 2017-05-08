import React, { PropTypes, Component } from 'react';
import { updateWidgetAjax } from 'CorePath/api';
import { connect } from 'react-redux';
import html from 'react-escape-html';
import TextWidgetProperties from './text-widget-editor';
import { updateWidget } from './actions';

class TextWidget extends Component {
  static propTypes = {
    widgetId: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    updateWidgetHandler: PropTypes.func,
  };

  constructor() {
    super();
    this.state = {
      isEditing: false,
      isUpdating: false,
    };
  }

  onHideDialog() {
    this.setState({
      isEditing: false,
    });
  }

  onSaveText(newVal) {
    const {
      widgetId,
      updateWidgetHandler,
    } = this.props;
    const payload = { content: newVal };

    this.setState({
      isUpdating: true,
    });

    updateWidgetAjax(widgetId, payload).done(() => {
      updateWidgetHandler(widgetId, payload);

      this.setState({
        isUpdating: false,
      });

      this.onHideDialog();
    });
  }

  showEditForm() {
    this.setState({
      isEditing: true,
    });
  }

  render() {
    const {
      content,
    } = this.props;
    const reg = /\n/g;
    let escapedContent = html`${content}`;
    escapedContent = {
      __html: escapedContent.__html.replace(reg, '<br>'),
    };

    return (
      <div>
        <h3
          className="tlt text-deeppink"
          onClick={() => this.showEditForm()}
          dangerouslySetInnerHTML={escapedContent}
        />
        <TextWidgetProperties
          isShow={this.state.isEditing}
          isUpdating={this.state.isUpdating}
          onHide={() => this.onHideDialog()}
          textContent={content}
          onSave={(newVal) => this.onSaveText(newVal)}
        />
      </div>
    );
  }
}

export default connect(null, {
  updateWidgetHandler: updateWidget,
})(TextWidget);
