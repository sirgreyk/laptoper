import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
  },
  textBlock: {
    padding: theme.spacing.unit,
    paddingBottom: 0,
  },
})
const TDescription = (props) => {
  const { classes, description } = props

  return (
    <div className={classes.tdescription}>
    <Typography className={classes.textBlock} variant="subtitle2">
      Короткі характеристики:
    </Typography>
    <Typography variant="body2"className={classes.root}>
      {description}
    </Typography>
    </div>
  )
}

TDescription.propTypes = {
  classes: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
}

export default withStyles(styles)(TDescription)