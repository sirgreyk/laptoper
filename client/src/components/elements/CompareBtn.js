import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'

import CompareOutlined from '@material-ui/icons/CompareOutlined';

const useStyles = makeStyles(theme => ({
  leftIcon: {
    marginRight: theme.spacing(1),
  },
}))
const CompareBtn = (props) => {
  const classes = useStyles()

  const { id, icon, compare } = props
  const addToCompare = id => alert('To Compare added product with id : ', id)
  return (
    icon ?
    <IconButton aria-label="Add to favorite" onClick={() => addToCompare(id)} color={compare ? 'secondary' : 'default'}>
      <CompareOutlined color="inherit" />
    </IconButton>
    :
    <Button color="primary" onClick={() => addToCompare(id)}>
      <CompareOutlined className={classes.leftIcon} />
      порівняти
    </Button>
  )
}

CompareBtn.propTypes = {
  compare: PropTypes.bool,
  id: PropTypes.string.isRequired,
  icon: PropTypes.bool,
}

export default CompareBtn