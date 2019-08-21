import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  center: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
},
}))

const Spinner = () => {
  const classes = useStyles()

  return (
      <div className={classes.center}>
        LOADING...
      </div>
  )
}

Spinner.propTypes = {
};

export default Spinner