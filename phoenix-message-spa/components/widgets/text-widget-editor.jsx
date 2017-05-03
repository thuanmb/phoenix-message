import React, { PropTypes, Component } from 'react';
import { Dialog } from 'react-toolbox/lib/dialog';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

class TextWidgetProperties extends Component {
  static propTypes = {
    isShow: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    textContent: PropTypes.string,
    onSave: PropTypes.func,
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

  render() {
    const {
      isShow,
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
            controlId="messageContent"
          >
            <ControlLabel>Message content</ControlLabel>
            <FormControl
              componentClass="textarea"
              value={this.state.value}
              placeholder="Enter your message"
              onChange={(e) => this.handleChange(e)}
            />
          </FormGroup>

          <Button type="submit" bsStyle="success" onClick={(e) => this.handleSaveText(e)}>
            Save
          </Button>
        </form>
      </Dialog>
    );
  }
}

export default TextWidgetProperties;
