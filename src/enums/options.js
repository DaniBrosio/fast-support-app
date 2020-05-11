import React from 'react';
import LockIcon from '@material-ui/icons/Lock';
import FileCopyIcon from '@material-ui/icons/FileCopy';

export const options = {
  copy: { 
    label: 'copy',
    icon: <FileCopyIcon/>,
  },
  lock:{ 
    label: 'lock', 
    icon: <LockIcon/>,
    callback: (template) => {
      alert('locked '+template.title)
    }
  },
};