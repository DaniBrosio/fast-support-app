import React, { useState } from 'react';
import {
  IconButton,
  Tooltip,
} from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { options } from '../../enums/options';
import { useStyles } from './OptionButton.styles';

export default function OptionButton(props) {
  const { option, template } = props;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
  }


  return (
    option === options.copy
      ?
      <CopyToClipboard text={template.content} onCopy={handleCopy}>
        <RegularButton copied={copied} option={option} template={template} />
      </CopyToClipboard>
      :
      <RegularButton option={option} template={template} />
  )
}

function RegularButton (props) {
  const { option, copied, template } = props;
  const classes = useStyles();
  
  const handleOption = (op,template) => {
    if (typeof op.callback === 'function') {
      op.callback(template);
    }
  }

  return (
    <Tooltip title={option.label}>
      <IconButton
        className={copied ? classes.red :  classes.button}
        onClick={()=>handleOption(option,template)}>
        {option.icon}
      </IconButton>
    </Tooltip>
  )
}