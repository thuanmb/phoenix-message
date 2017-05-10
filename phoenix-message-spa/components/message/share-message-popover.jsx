import React, { PropTypes, Component } from 'react';
import { Dialog } from 'react-toolbox/lib/dialog';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import CopyToClipboard from 'react-copy-to-clipboard';

class ShareMessagePopover extends Component {
  static propTypes = {
    isShow: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    sharedMessageUrl: PropTypes.string,
    isCreating: PropTypes.bool.isRequired,
  };

  hideDialog() {
    this.props.onHide();
  }

  handleCopyUrl(e) {
    e.preventDefault();
    window.console.log(this.props.sharedMessageUrl);
  }

  render() {
    const {
      isShow,
      sharedMessageUrl,
      isCreating,
    } = this.props;

    return (
      <Dialog
        active={isShow}
        onEscKeyDown={() => this.hideDialog()}
        onOverlayClick={() => this.hideDialog()}
        className="mw6"
      >
        <form>
          {!isCreating && (
            <FormGroup
              controlId="messageContent"
            >
              <ControlLabel>Copy the url and share it</ControlLabel>
              <FormControl
                componentClass="input"
                value={sharedMessageUrl}
                disabled
              />
            </FormGroup>
          )}

          <Button type="submit" bsStyle="success btn-block" onClick={(e) => this.handleCopyUrl(e)} disabled={isCreating}>
            {isCreating ? (
              <span>Creating...</span>
            ) : (
              <CopyToClipboard
                text={sharedMessageUrl}
                onCopy={() => this.setState({ copied: true })}
              >
                <span>Copy to clipboard</span>
              </CopyToClipboard>
            )}
          </Button>
        </form>
      </Dialog>
    );
  }
}

export default ShareMessagePopover;
