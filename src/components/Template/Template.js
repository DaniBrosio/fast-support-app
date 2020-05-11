import React, { Component } from 'react'
import {
  Paper,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import OptionButton from '../OptionButton';
import { options } from '../../enums/options';

import { styles } from './Template.styles';

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { classes, template } = this.props;

    return (
      <Paper className={classes.template} key={template.id}>
        <div className={classes.leftSide}>
          <div className={classes.title}>
            <Typography variant="h5">{template.title}</Typography>
          </div>
          <div className={classes.content} >
            <Typography variant="body1">{template.content}</Typography>
          </div>
        </div>
        <div className={classes.rightSide}>
          {Array.isArray(template.options) && template.options.map(key => {
            return <OptionButton key={key} option={options[key]} template={template} />
          })}
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(Template);