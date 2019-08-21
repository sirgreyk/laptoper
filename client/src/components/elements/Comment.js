import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';

import AccountCircle from '@material-ui/icons/AccountCircle';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles(theme => ({
  commentContainer: {
    paddingTop: theme.spacing(2),
    display: 'grid',
  },
  commentContainerSmall: {
    display: 'grid',
  },
  commentHead: {
    display: "flex",
  },
  commentBar: {
    paddingLeft: 8,
    display: "grid",
    gridTemplateRows: "1fr",
  },
  avatar: {
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
  },
  avatarSmall: {
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(2),
    width: 24,
    height: 24,
  },
  caption: {
    paddingLeft: theme.spacing(0.5),
  },

  commentBody: {
    paddingLeft: 8,
  },
  body : {
    whiteSpace: 'pre-line',
    paddingTop: 4,
  },

  lessMore: {
    display: 'flex',
    alignItems: 'end',
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
  },
  flex: {
    display: 'flex'
  },
}))

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timezone: 'UTC',
}

const Comment = (props, context) => {
  const classes = useStyles()

  const { small, comment } = props
  const [ showMore,setShowMore ] = useState(false)
  const handleMore = () => setShowMore(!showMore)

  useEffect(() => context.swipeableViews.slideUpdateHeight(), [showMore, context.swipeableViews])

  const starCounter = () => {
    let rating = []
    for (let i = 0; i < comment.rating; i++) {
      rating.push(<Star fontSize="small" color="secondary" />)
    }
    for (let i = 0; i < 5 - comment.rating; i++) {
      rating.push(<StarBorder fontSize="small" color="secondary" />)
    }
    return rating
  }

  return (
    <div 
      className={small ? classes.commentContainerSmall : classes.commentContainer} 
      id={comment.id}
    >
        <div className={classes.commentHead}>
          <div>
            <Avatar className={small ? classes.avatarSmall : classes.avatar}>
              <AccountCircle />
            </Avatar>
          </div>
          <div className={classes.commentBar}>
            <div className={classes.commentBarText}>
              <Typography variant="subtitle2"  id={comment.userId} >
                {comment.userName}
                <Typography display="inline" className={classes.caption} variant="caption">{comment.date.toLocaleString("ua", options)}</Typography>
              </Typography>
            </div>
            <Typography variant="caption" color='secondary' className={classes.flex}>
              {comment.rating ? starCounter().map((star, index) => <div key={index}>{star}</div>) : null}
            </Typography>
           </div>
        </div>

        <div className={classes.commentBody}>
            {comment.body.length < 500 ? 
              <Typography variant="body2" className={classes.body}>{comment.body}</Typography>
              :
              <>
                {showMore ? 
                  <Typography variant="body2" className={classes.body}>{comment.body}</Typography> 
                  :
                  <Typography variant="body2" className={classes.body}>{comment.body.slice(0, 497) + '...'}</Typography> 
                }
                <Typography variant="subtitle2" className={classes.lessMore} onClick={handleMore}>
                  {showMore ? 
                    <>Приховати <Icon fontSize="small">keyboard_arrow_up</Icon></>
                    : <>Показати ще <Icon fontSize="small">keyboard_arrow_down</Icon></>
                  }
                </Typography>
              </>
            }
        </div>

    </div> 
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  small: PropTypes.bool,
}

Comment.contextTypes = {
  swipeableViews: PropTypes.object.isRequired,
};

export default Comment