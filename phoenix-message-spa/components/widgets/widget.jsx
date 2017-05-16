import React, { PropTypes, Component } from 'react';
import { updateWidgetAjax, removeWidgetAjax } from 'CorePath/api';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import WidgetEditor from './widget-editor';
import { updateWidget, removeWidget } from './actions';

class TextWidget extends Component {
  static propTypes = {
    widgetId: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    contentKey: PropTypes.string.isRequired,
    updateWidgetHandler: PropTypes.func,
    removeWidgetHandler: PropTypes.func,
    allowEdit: PropTypes.bool.isRequired,
    onRemoveWidget: PropTypes.func,
    children: PropTypes.object,
    controlId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    styleName: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      isEditing: false,
      isUpdating: false,
      isRemoving: false,
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
      contentKey,
    } = this.props;
    const payload = { [contentKey]: newVal };

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

  onRemoveText() {
    const {
      widgetId,
      removeWidgetHandler,
      onRemoveWidget,
    } = this.props;

    this.setState({
      isRemoving: true,
    });

    removeWidgetAjax(widgetId).done(() => {
      this.setState({
        isRemoving: false,
      });
      this.onHideDialog();

      onRemoveWidget(widgetId);
      removeWidgetHandler(widgetId);

      toastr.success('Widget was removed.');
    });
  }

  showEditForm() {
    if (this.props.allowEdit) {
      this.setState({
        isEditing: true,
      });
    }
  }

  render() {
    const {
      content,
      allowEdit,
      children,
      controlId,
      title,
      placeholder,
      inputType,
      styleName,
    } = this.props;

    const {
      isEditing,
      isRemoving,
      isUpdating,
    } = this.state;

    return (
      <div>
        <div
          className={`${styleName} ${allowEdit ? 'pointer' : ''}`}
          onClick={() => this.showEditForm()}
        >
          {children}
        </div>
        <WidgetEditor
          isShow={isEditing}
          isUpdating={isUpdating}
          onHide={() => this.onHideDialog()}
          textContent={content}
          onSave={(newVal) => this.onSaveText(newVal)}
          onRemove={() => this.onRemoveText()}
          isRemoving={isRemoving}
          controlId={controlId}
          title={title}
          placeholder={placeholder}
          inputType={inputType}
        />
      </div>
    );
  }
}

export default connect(null, {
  updateWidgetHandler: updateWidget,
  removeWidgetHandler: removeWidget,
})(TextWidget);
