import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  // description: {
  //   padding: ttheme.spacing(1)
  // },
  textBlock: {
    padding: theme.spacing(1)
  }
}))

const Description = (props) => {
  const classes = useStyles()

  const { name, about} = props
  
  return (
    <div className={classes.description}>
      <Typography className={classes.textBlock} variant="h6" gutterBottom>Опис {name}</Typography>
      {about.map((a, index) => (
        <div className={classes.textBlock} key={index}>
          <Typography variant="subtitle2" gutterBottom>{a.title}</Typography>
          <Typography variant="body2" gutterBottom>{a.text}</Typography>
        </div>
      ))}
    </div>
  )
}


Description.propTypes = {
  name: PropTypes.string.isRequired,
  about: PropTypes.array.isRequired,
};

export default Description