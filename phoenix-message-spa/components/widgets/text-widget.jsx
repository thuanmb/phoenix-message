import React, { PropTypes, Component } from 'react';
import TextWidgetProperties from './text-widget-editor';

class TextWidget extends Component {
  static propTypes = {
    widgetId: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  };

  constructor() {
    super();
    this.state = {
      isEditing: false,
    };
  }

  onHideDialog() {
    this.setState({
      isEditing: false,
    });
  }

  onSaveText(newVal) {
    console.log(this.props.widgetId, newVal);
    this.onHideDialog();
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

    return (
      <div>
        <h3 className="tlt text-deeppink" onClick={() => this.showEditForm()}>
          { content }
        </h3>
        <TextWidgetProperties
          isShow={this.state.isEditing}
          onHide={() => this.onHideDialog()}
          textContent={content}
          onSave={(newVal) => this.onSaveText(newVal)}
        />
      </div>
    );
  }
}

export default TextWidget;
