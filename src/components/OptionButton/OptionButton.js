import React, { Component } from 'react'
import {
  IconButton,
  Tooltip,
  withStyles,
} from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import classNames from 'classnames';
import { options } from '../../enums/options';
import { styles } from './OptionButton.styles';

class OptionButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      copied: false,
      text: props.template.content || ''
    };
  }

  handleOption = (op, template) => {
    if (typeof op.callback === 'function') {
      op.callback(template);
    }
  }

  handleCopy = (text, result) => {
    console.log({ text, result })
    this.setState({copied: result}, ()=>{
      console.log(this.state);
    });
  }

  render() {
    const { classes, option, template } = this.props;
    const { copied } = this.state;
  
    return (
      option === options.copy
        ?
        <Tooltip title={copied ? 'Copied!' : option.label} open={copied} placement='top-end'>
          <CopyToClipboard text={template.content} onCopy={this.handleCopy}>
            <IconButton
              className={classNames(classes.button)}
              onClick={() => this.handleOption(option, template)}>
              {option.icon}
            </IconButton>
          </CopyToClipboard>
        </Tooltip>
        :
        <Tooltip title={option.label}>
          <IconButton
            className={classes.button}
            onClick={() => this.handleOption(option, template)}>
            {option.icon}
          </IconButton>
        </Tooltip>
    )
  }
}

export default withStyles(styles)(OptionButton);