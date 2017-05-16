import React, { PropTypes, Component } from 'react';
import { Dialog } from 'react-toolbox/lib/dialog';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

class WidgetEditor extends Component {
  static propTypes = {
    isShow: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    textContent: PropTypes.string,
    onSave: PropTypes.func,
    onRemove: PropTypes.func,
    isUpdating: PropTypes.bool.isRequired,
    isRemoving: PropTypes.bool.isRequired,
    controlId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
  };

  constructor(props) {
    super();
    this.state = {
      value: props.textContent,
    };
  }

  hideDialog() {
    this.props.onHide();
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSaveText(e) {
    e.preventDefault();
    this.props.onSave(this.state.value);
  }

  handleRemoveWidget() {
    this.props.onRemove();
  }

  render() {
    const {
      isShow,
      isUpdating,
      isRemoving,
      controlId,
      title,
      placeholder,
      inputType,
    } = this.props;

    return (
      <Dialog
        active={isShow}
        onEscKeyDown={() => this.hideDialog()}
        onOverlayClick={() => this.hideDialog()}
        className="mw6"
      >
        <form>
          <FormGroup
            controlId={controlId}
          >
            <ControlLabel>{title}</ControlLabel>
            <FormControl
              componentClass={inputType}
              value={this.state.value}
              placeholder={placeholder}
              onChange={(e) => this.handleChange(e)}
            />
          </FormGroup>

          <Button type="submit" bsStyle="success" onClick={(e) => this.handleSaveText(e)} disabled={isUpdating}>
            {isUpdating ? 'Saving' : 'Save'}
          </Button>

          <Button className="m-l-10" bsStyle="danger" onClick={() => this.handleRemoveWidget()} disabled={isRemoving}>
            {isRemoving ? 'Removing' : 'Remove'}
          </Button>
        </form>
      </Dialog>
    );
  }
}

export default WidgetEditor;
