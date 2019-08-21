import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  footer: {
    height: 300,
    width: "100%",
    background: "#263238",
  },
})
const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.footer}>
    Footer
    </div>
  )
}

export default Footer