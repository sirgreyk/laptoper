import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
    //fontWeight: 500, 
  },
})
const TProductName = (props) => {
  const { classes, name, variant } = props

  return (
    <Typography variant={variant === undefined ? "subtitle2" : variant} className={classes.root}>
      {name}
    </Typography>
  )
}

TProductName.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

export default withStyles(styles)(TProductName)