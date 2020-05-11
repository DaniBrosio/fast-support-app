export const styles = theme => ({
  template: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: theme.spacing(2),
    margin: theme.spacing(2,0),
    
  },
  rightSide: {
    // minWidth: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(2)
  },
  leftSide: {
  },
  button: ({copied}) => ({
    color: copied ? 'green' : 'grey',
  })
})