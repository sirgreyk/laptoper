import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

import ListAlt from '@material-ui/icons/ListAltOutlined'
import Comment from '@material-ui/icons/CommentOutlined'
import InfoIcon from '@material-ui/icons/InfoOutlined'
import DescriptionIcon from '@material-ui/icons/DescriptionOutlined'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRightOutlined'

import Reviews from './Reviews'
import TechSpec from './TechSpec'
import Description from './Description'
import Info from './Info'
import ProductShortMob from './ProductShortMob'

import ImagesMob from './ImagesMob'
import ReviewsBtn from '../elements/ReviewsBtn';
import Price from '../elements/Price';

const Arrow = () => (
  <ListItemSecondaryAction>
  <ListItemIcon>
    <KeyboardArrowRight />
  </ListItemIcon>
</ListItemSecondaryAction>
)

const useStyles = makeStyles(theme => ({
  root: {},
  tabs: {
    textAlign: "center",
    zIndex: 100,
    background: "#344955",
    color: "#fff",
    position: "sticky",
    top: 0,
  },
  product: {
    margin: "0 auto",
    display: "block",
    gridTemplateColumns: "1fr",
    gridTemplateAreas: "'content'",
  },
  short:{
    display: 'none',
  },
  content: {
    gridArea: "content",
  },
  '@media (min-width: 600px)': {
    product: {
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridTemplateAreas: "'content content short' 'content content .'",
    },
    short:{
      display: 'block',
      justifySelf: "center",
      gridArea: "short",
      position: "sticky",
      top: 50,
      padding: '0 16px',
    },
  },

  contentMain: {
    paddingTop: theme.spacing(1),
  },
  main: {
    maxWidth: 600,
    padding: '0 16px',
  },

  price: {
    padding: '12px 0'
  },
}))
const ProductMob = (props) => {
  const classes = useStyles()

  const { product, comments, handleReview} = props
  const [value, setValue] = useState(0)
  const handleChange = (e, newValue) => setValue(newValue)
  const handleChangeIndex = index => setValue(index)
  return (
    <div className={classes.root}>
      <div className={classes.tabs}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          variant="scrollable"
        >
          <Tab label="все про товар" />
          <Tab label="характеристики" />
          <Tab label="відгуки" />
          <Tab label="опис" />
          <Tab label="інфо" />
        </Tabs>
      </div>
        <div className={classes.product}>
          <div className={classes.content}>
            <SwipeableViews
              animateHeight
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <div className={classes.contentMain}>
                <ImagesMob imgs={product.imgs} chipType={product.chipType} /> 
                <div className={classes.main}>
                  <Typography  variant="h6">
                    {product.name}
                  </Typography>
                  <ReviewsBtn id={product.id} handleReview={handleReview} rate={product.rate} reviews={product.reviews}/>
                  <div className={classes.price}>
                    <Price price={product.price}/>
                  </div>
                  <Typography variant="body2"  component="p">
                    {product.description}
                  </Typography>
                </div>
                <div className={classes.list}>
                  <List component="nav">
                    <ListItem button onClick={() => handleChangeIndex(1)}>
                      <ListItemIcon>
                        <ListAlt />
                      </ListItemIcon>
                      <ListItemText primary="Всі характеристики" />
                      <Arrow />
                    </ListItem>

                    <ListItem button onClick={() => handleChangeIndex(2)}>
                      <ListItemIcon>
                        <Comment />
                      </ListItemIcon>
                      <ListItemText primary="Відгуки" />
                      <Arrow />
                    </ListItem>

                    <ListItem button onClick={() => handleChangeIndex(3)}>
                      <ListItemIcon>
                        <DescriptionIcon />
                      </ListItemIcon>
                      <ListItemText primary="Опис" />
                      <Arrow />
                    </ListItem>

                    <ListItem button onClick={() => handleChangeIndex(4)}>
                      <ListItemIcon>
                        <InfoIcon />
                      </ListItemIcon>
                      <ListItemText primary="інформація" />
                      <Arrow />
                    </ListItem>
                  </List>
                </div>
              </div>

              <div><TechSpec techSpec={product.techSpec} name={product.name}/></div>
              <div><Reviews handleReview={handleReview} name={product.name} comments={comments.comments} commentImages={comments.commentImages}/></div>
              <div><Description name={product.name} about={product.about}/></div>
              <div><Info /></div>
              
            </SwipeableViews>
          </div>
          <div className={classes.short}>
            <ProductShortMob 
              name={product.name} 
              img={product.img} 
              id={product.id} 
              price={product.price} 
              rate={product.rate} 
              reviews={product.reviews}
              handleReview={handleReview}/>
          </div>
        </div>
    </div>
  )
}

ProductMob.propTypes = {
  product: PropTypes.object.isRequired,
  comments: PropTypes.object.isRequired,
  handleReview: PropTypes.func.isRequired,
};

export default ProductMob