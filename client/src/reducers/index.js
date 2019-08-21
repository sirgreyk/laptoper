import { combineReducers } from 'redux'
import view from './view'
import products from './products'
import product from './product'
import comments from './comments'
import laptoper from './laptoper';
import compare from './compare'
import user from './user'
import userComments from './userComments'
import userOrders from './userOrders'
import userHistory from './userHistory'
import userList from './userList'
import handleReview from './handleReview'
import handleEdit from './handleEdit'
import handleCart from './handleCart'
import cart from './cart'
import mpopular from './mpopular'
import mlatest from './mlatest'
import mrecomend from './mrecomend'

import catalog from './catalog'
import catagorys from './catagorys'
import catagory from './catagory'
import blog from './blog'
import post from './post'
import promo from './promo';
import promos from './promos';

import signup from './signup';


export default combineReducers({ 
  signup,

  laptoper,
  promo,
  promos,
  catalog,
  catagorys,
  catagory,
  blog,
  post,
  user,
  userComments,
  userList,
  userOrders,
  userHistory,

  products,
  product,
  comments,
  compare,

  view,
  handleReview,
  handleEdit,
  handleCart,

  cart,
  
  mpopular,
  mrecomend,
  mlatest,


})