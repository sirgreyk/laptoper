import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Lightbox from 'react-image-lightbox';

import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import SortIcon from '@material-ui/icons/Sort';

import CommentGenerator from '../elements/CommentGenerator'
import HorizontalScroll from '../elements/HorizontalScroll';

const useStyles = makeStyles(theme => ({
  reviews: {
    padding: theme.spacing(1),
  },
  textBlock:{
    padding: theme.spacing(1),
    paddingLeft: 0,
  },
  images: {
    paddingBottom: 24,
  },
  imgContainer: {
    margin: theme.spacing(1),
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
  },
  img: {
    cursor: 'pointer',
    height: 100,
    marginRight: 4,
  },

  commentsHead: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: 'center',
    paddingTop: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(0.5),
  },
  margin: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}))

const Reviews = (props) => {
  const classes = useStyles()

  const { name, comments, commentImages, handleReview} = props

  const [ openLightBox, setOpenLightBox ] = useState(false)
  const handleOpenLightBox = () => setOpenLightBox(!openLightBox)

  const [ value, setValue ] = useState(0)
  const handleChangeIndex = index => setValue(index)

  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = event => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  const [sort, setSort] = useState('top')
  const handleChange = value => {
    setSort(value)
    handleClose()
  }

   useEffect(() => console.log(`sort reviews by ${sort}`), [sort])

  return (
    <div className={classes.reviews}>
      <Typography className={classes.textBlock} variant="h6" gutterBottom>Відгуки {name}</Typography>
      {commentImages ?
        <div className={classes.images}>
          <Typography className={classes.textBlock} variant="subtitle1" gutterBottom>Зображення покупців:</Typography>
          <HorizontalScroll>
            {commentImages.map((img, index) => (
              <div className={classes.imgContainer} key={index}>
                <img src={img.src} className={classes.img} alt="images" key={index} onClick={() => handleOpenLightBox()}/>
              </div>
            ))}
          </HorizontalScroll>
        </div>
      : null}

      <Divider />

      <div className={classes.commentsHead}>
        <Typography variant="subtitle1" >{comments.length} відгуків</Typography>
        <Button 
          className={classes.margin}
          aria-owns={anchorEl ? 'sort' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          size="small"
        > 
          <SortIcon className={classes.leftIcon} />
          порядок сортування
        </Button>
        <Menu id="sort" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={() => handleChange("top")} >Топ відгуки</MenuItem>
          <MenuItem onClick={() => handleChange("new")} >Спочатку новіші</MenuItem>
        </Menu>
        <Button onClick={() => handleReview(true)}> 
          Залишити відгук
        </Button>
      </div>



      <CommentGenerator 
        comments={comments}
      />

      {openLightBox && (
        <Lightbox
          mainSrc={commentImages[value].src}
          prevSrc={commentImages[(value + commentImages.length - 1) % commentImages.length].src}
          nextSrc={commentImages[(value + 1) % commentImages.length].src}
          onCloseRequest={() => handleOpenLightBox()}
          onMovePrevRequest={() => handleChangeIndex((value + commentImages.length - 1) % commentImages.length)}
          onMoveNextRequest={() => handleChangeIndex((value + 1) % commentImages.length)}
        />
      )}
    </div>
  )
}

Reviews.propTypes = {
  name: PropTypes.string.isRequired,
  comments: PropTypes.array,
  commentImages: PropTypes.array,
  handleReview: PropTypes.func.isRequired,
};

export default Reviews