import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'

//import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';

const useStyles = makeStyles(theme => ({
  leftIcon: {
    marginRight: theme.spacing(1),
  },
}))

const FavoriteBtn = (props) => {
  const classes = useStyles()

  const { id, icon, like } = props
  const addToFavorite = id => alert('To Facorite added product with id : ', id)
  return (
    icon ?
    <IconButton aria-label="Add to favorite" onClick={() => addToFavorite(id)} color={like ? 'secondary' : 'default'}>
      <Favorite />
    </IconButton>
    :
    <Button color="primary" onClick={() => addToFavorite(id)}>
      <Favorite className={classes.leftIcon} />
      в відібране
    </Button>
  )
}

FavoriteBtn.propTypes = {
  like: PropTypes.string,
  id: PropTypes.string.isRequired,
  icon: PropTypes.bool,
}

export default FavoriteBtn