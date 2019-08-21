import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  center: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'grid',
    justifyItems: 'center',
},
}))

const Fail = (props) => {
  const classes = useStyles()
  const { history, loadFunc } = props

  const reload = () => {
    loadFunc()
    // const currentPath = history.location.pathname
    // history.push('empty')
    // setTimeout(() => {
    //   history.push(currentPath)
    // })
  }

  return (
      <div className={classes.center}>
        Fail to load data
        <Button onClick={reload}>Оновити</Button>
      </div>
  )
}

Fail.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Fail