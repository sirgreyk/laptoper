import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';
import MoreVert from '@material-ui/icons/MoreVert';
import FlagIcon from '@material-ui/icons/Flag';

import TextField from '@material-ui/core/TextField';

import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';

import AccountCircle from '@material-ui/icons/AccountCircle';

import Comment from './Comment'
import HorizontalScroll from './HorizontalScroll'

const useStyles = makeStyles(theme => ({
  answers: {
    paddingLeft: theme.spacing(2),
  },
  less: {
    paddingLeft: theme.spacing(4),
    cursor: "pointer"
  },

  advantages: {
    paddingTop: 4,
    paddingLeft: 8,
    display: "grid",
    alignItems: "center",
  },
  imgContainer: {
    margin: theme.spacing(1),
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
  },
  img: {
    height: 50,
    paddingRight: 4,
  },


  commentActions: {
    display: "flex",
    alignItems: "center",
  },
  like: {
    paddingLeft: 4,
    paddingRight: 4,
  },
  listItemText: {
    padding: 0,
  },
  avatar: {
    marginTop: theme.spacing(0.5),
  },
  avatarSmall: {
    marginTop: theme.spacing(0.5),
    width: 24,
    height: 24,
  },
  moreButton: {
    justifySelf: "end",
  },
  menu: {
    zIndex: 98,
  },
  lessMore: {
    display: 'flex',
    alignItems: 'end',
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1.5),
    cursor: "pointer",
  },

  comment: {
    display: 'flex',
  },
  commentAvatar: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(1),
    width: 24,
    height: 24,
  },
  commentField: {
    width: '100%',
    display: "grid",
    gridTemplateRows: "repeat(2, minmax(min-content, max-content))",
    justifyItems: 'end',
  },
  commentButtons: {
    display: "grid",
    gridGap: `${theme.spacing(1)}px ${theme.spacing(1)}px`,
    gridTemplateColumns: "repeat(2, minmax(min-content, max-content))",
    justifyItems: 'end',
  },
}))

const CommentGenerator = (props, context) => {
  const classes = useStyles()

  const { comments } = props

  const [addAnswer, setAddAnswer] = useState({});
  const handleAddAnswer = id => setAddAnswer({ ...addAnswer, [id]: !addAnswer[id] })

  const [anchorEl, setAnchorEl] = useState({});
  const handleClick = (e, id) => setAnchorEl({ ...anchorEl, [id]: e.currentTarget })
  const handleClose = id => setAnchorEl({ ...anchorEl, [id]: null })

  const [ answers, setAnswers ] = useState({})
  const handleAnswers = id => setAnswers({ ...answers, [id]: !answers[id] })

  useEffect(() => context.swipeableViews.slideUpdateHeight(), [answers, addAnswer, context.swipeableViews])

  return (
    comments.map((comment, index) => (
      <div key={index}>
        <Comment
          comment={comment}
        />
        <div className={classes.advantages}>
          {comment.advantages ?
            <> 
              <Typography variant="subtitle2" gutterBottom>
                Переваги:
                <Typography variant="body2" display="inline"> {comment.advantages}</Typography> 
              </Typography>
            </>
            : null
          }
          {comment.disadvantages ?
            <>
              <Typography variant="subtitle2" gutterBottom>
                Недоліки:
                <Typography variant="body2" display="inline"> {comment.disadvantages}</Typography> 
              </Typography>
            </>
            : null
          }
        </div>
        {comment.images ?
          <HorizontalScroll>
            {comment.images.map((img, index) => (
              <div className={classes.imgContainer} key={index}>
                <img src={img.src} className={classes.img} alt="images" key={index}/>
              </div>
            ))}
          </HorizontalScroll>
          : null
        }
        <div className={classes.commentActions}>
          <IconButton>
            <ThumbUp fontSize="small" />
          </IconButton>

          <Typography variant="button" className={classes.like}>{comment.likes.length}</Typography>

          <IconButton>
            <ThumbDown fontSize="small" />
          </IconButton>

          <Typography variant="button" className={classes.like}>{comment.dislikes.length}</Typography>

          <Button size="small" onClick={() => handleAddAnswer(comment.id)}>відповісти</Button>

          <IconButton
            aria-owns={anchorEl[comment.id] ? 'menu' : undefined}
            aria-haspopup="true"
            onClick={(e) => handleClick(e, comment.id)}
            >
            <MoreVert fontSize="small" />
          </IconButton>
          <Menu 
            id="menu" 
            anchorEl={anchorEl[comment.id]} 
            open={Boolean(anchorEl[comment.id])} 
            onClose={() => handleClose(comment.id)}
          >
            <MenuItem onClick={() => handleClose(comment.id)}>
            <ListItemIcon>
              <FlagIcon />
            </ListItemIcon>
            Повідомити
            </MenuItem>
          </Menu>
        </div>

        {comment.answers.length > 1 ?
          <>
          <Typography variant="subtitle2" className={classes.lessMore} onClick={() => handleAnswers(comment.id)}>
            {answers[comment.id] ? 
              <>Приховати відповіді<Icon fontSize="small">keyboard_arrow_up</Icon></>
              : <>Показати відповіді <Icon fontSize="small">keyboard_arrow_down</Icon></>
            }
          </Typography>
          <div className={classes.answers}>


            {answers[comment.id] && 
              comment.answers.map((answer, i) => (
                <div key={i}>
                  <Comment  small={true} comment={answer}/>
                  <div className={classes.commentActions} >
                    <IconButton>
                      <ThumbUp fontSize="small" />
                    </IconButton>

                    <Typography variant="button" className={classes.like}>{answer.likes.length}</Typography>

                    <IconButton>
                      <ThumbDown fontSize="small" />
                    </IconButton>

                    <Typography variant="button" className={classes.like}>{answer.dislikes.length}</Typography>

                    <Button size="small" onClick={() => handleAddAnswer(comment.id)}>відповісти</Button>

                    <IconButton
                      aria-owns={anchorEl[answer.id] ? 'menu' : undefined}
                      aria-haspopup="true"
                      onClick={(e) => handleClick(e, answer.id)}
                      >
                      <MoreVert fontSize="small" />
                    </IconButton>

                    <Menu 
                      id="menu" 
                      anchorEl={anchorEl[answer.id]} 
                      open={Boolean(anchorEl[answer.id])} 
                      onClose={() => handleClose(answer.id)}
                    >
                      <MenuItem onClick={() => handleClose(answer.id)}>
                      <ListItemIcon>
                        <FlagIcon />
                      </ListItemIcon>
                      Повідомити
                      </MenuItem>
                    </Menu>
                  </div>
                </div>
              ))
            }
          </div>
          </>
          : null
        }

        {addAnswer[comment.id] ?
          <div className={classes.comment}>
            <Avatar className={classes.commentAvatar}>
              <AccountCircle />
            </Avatar>
            <div className={classes.commentField}>
              <TextField
                fullWidth
                multiline
                id="addComment"
                placeholder="Додайте коментар для всіх..."
                rows="1"
                rowsMax="32"
                className={classes.textField}
                margin="normal"
              />
              <div className={classes.commentButtons}>
                <div><Button size='small' onClick={() => handleAddAnswer(comment.id)}>скасувати</Button></div>
                <div><Button variant='contained' color='primary' size='small'>коментувати</Button></div>
              </div>
            </div>
          </div>
          : null
        }
      </div>
    ))
  )
}

CommentGenerator.propTypes = {
  comments: PropTypes.array.isRequired,
}

CommentGenerator.contextTypes = {
  swipeableViews: PropTypes.object.isRequired,
};

export default CommentGenerator