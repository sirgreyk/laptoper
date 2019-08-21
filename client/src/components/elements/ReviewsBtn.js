import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

// import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import StarHalf from '@material-ui/icons/StarHalf';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    borderRadius: "4px",
  },
  v: {
    paddingLeft: theme.spacing(1),
  },
  small: {
    fontSize: '1rem'
  }
}))

const ReviewsBtn = (props) => {
  const classes = useStyles()

  const { id, handleReview, history, rate, reviews } = props
  const review = id => {
    alert(`review to ${id}`)
    history && history.push('/product')
    handleReview(true)
  }
  return (
    <div className={classes.root} onClick={handleReview ? () => review(id) : null}>
      <div>
        <Star fontSize="small" color="secondary" classes={{ fontSizeSmall: classes.small}}/>
        <Star fontSize="small"color="secondary" classes={{ fontSizeSmall: classes.small}}/>
        <Star fontSize="small" color="secondary" classes={{ fontSizeSmall: classes.small}}/>
        <StarHalf fontSize="small" color="secondary" classes={{ fontSizeSmall: classes.small}}/>
        <StarBorder fontSize="small" color="secondary" classes={{ fontSizeSmall: classes.small}}/>
      </div>
      <Typography variant="body2" color="textSecondary" className={classes.v}>{`${rate} (${reviews})`}</Typography>
    </div>
  )
}

ReviewsBtn.propTypes = {
  rate: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  handleReview: PropTypes.func.isRequired,
  history: PropTypes.object,
}

export default ReviewsBtn