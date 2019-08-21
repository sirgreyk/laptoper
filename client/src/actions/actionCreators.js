import { 
  LAPTOPER_FETCH_START,
  LAPTOPER_FETCH_DONE,
  LAPTOPER_FETCH_FAIL,

  DEPARTMENT_FETCH_START,
  DEPARTMENT_FETCH_DONE ,
  DEPARTMENT_FETCH_FAIL,

  
  PRODUCTS_FETCH_START,
  PRODUCTS_FETCH_DONE,
  PRODUCTS_FETCH_FAIL,
  
  // CATAGORY_FETCH_START,
  // CATAGORY_FETCH_DONE,
  // CATAGORY_FETCH_FAIL,

  // SUBCATAGORY_FETCH_START,
  // SUBCATAGORY_FETCH_DONE,
  // SUBCATAGORY_FETCH_FAIL,

  LATEST,
  POPULAR,
  RECOMEND,


  SET_VIEW,
  HANDLE_CART,
  HANDLE_REVIEW,
  HANDLE_EDIT,

  PRODUCTS,

  CATALOG,
  CATAGORYS,
  CATAGORY,

  PROMOS_FETCH_START,
  PROMOS_FETCH_DONE,
  PROMOS_FETCH_FAIL,

  PROMO_FETCH_START,
  PROMO_FETCH_DONE,
  PROMO_FETCH_FAIL,

  BLOG_FETCH_START,
  BLOG_FETCH_DONE,
  BLOG_FETCH_FAIL,
  POST_FETCH_START,
  POST_FETCH_DONE,
  POST_FETCH_FAIL,

  PRODUCT,
  COMMENTS,

  CART,

  SIGNUP_START,
  SIGNUP_DONE,
  SIGNUP_FAIL,

  AUTH_DONE,
  AUTH_FAIL,

  USER_FETCH_START,
  USER_FETCH_DONE,
  USER_FETCH_FAIL,

  USER_ORDERS_FETCH_START,
  USER_ORDERS_FETCH_DONE,
  USER_ORDERS_FETCH_FAIL,

  USER_HISTORY_FETCH_START,
  USER_HISTORY_FETCH_DONE,
  USER_HISTORY_FETCH_FAIL,

  LIST_FETCH_START,
  LIST_FETCH_DONE,
  LIST_FETCH_FAIL,
  LIST_SELECT,
  
  COMPARE,
  USER_COMMENTS,
} from './actionTypes'

import {base64} from '../utils/base64'

export const signup = ( firstName, secondName, phoneNumber, email, password) => dispatch => {
  dispatch({ type: SIGNUP_START })
  fetch('api/user/user_signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName, 
        secondName, 
        phoneNumber,
        email,
        password
      })
    })
    .then(req => {
      req.status === 200 ? dispatch({ type: SIGNUP_DONE }) : dispatch({ type: SIGNUP_FAIL}) 
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: SIGNUP_FAIL })
    }) 
}
export const login = (email, password) => dispatch => {
  fetch('api/user/user_login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    .then(() => {
      dispatch({ type: AUTH_DONE })
      dispatch(getUser())
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: AUTH_FAIL })
    }) 
}

export const getUser = () => dispatch => {
  dispatch({ type: USER_FETCH_START })
  const start = Date.now()

  fetch('api/user/user_get', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(data => data.json())
    .then(json => {
      json.img = base64(json.img)
      dispatch({ type: USER_FETCH_DONE, json })
      dispatch({ type: AUTH_DONE })
      console.log('time',Date.now() - start)
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: USER_FETCH_FAIL })
      dispatch({ type: AUTH_FAIL })
    }) 
}

export const getLaptoper = () => dispatch => {
  dispatch({ type: LAPTOPER_FETCH_START })
  const start = Date.now()

  fetch('api/laptoper/main_carousel_get', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(data => data.json())
    .then(json => {
      let parsedMainCarousel = []
      json.mainCarousel.map(item => {
        let parsedE = {}
        parsedE.img = base64(item.img.data)
        parsedE.largeImg = base64(item.largeImg.data)
        parsedE.url = item.url
        parsedMainCarousel.push(parsedE)
      })
      json.mainCarousel = parsedMainCarousel
      dispatch({ type: LAPTOPER_FETCH_DONE, json })
      console.log('time',Date.now() - start)
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: LAPTOPER_FETCH_FAIL })
    }) 
}

export const getDepartments = () => dispatch => {
  dispatch({ type: DEPARTMENT_FETCH_START })
  const start = Date.now()

  fetch('api/laptoper/department_get', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(data => data.json())
    .then(json => {
      dispatch({ type: DEPARTMENT_FETCH_DONE, json })
      console.log('time',Date.now() - start)
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: DEPARTMENT_FETCH_FAIL })
    }) 
}

// export const getCatagorys = () => dispatch => {
//   dispatch({ type: CATAGORY_FETCH_START })
//   const start = Date.now()

//   fetch('api/laptoper/catagory_get', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//     })
//     .then(data => data.json())
//     .then(json => {
//       let parsedCatagorys = []
//       json.map(item => {
//         let parsedItem = {
//           ...item
//         }
//         parsedItem.img = base64(item.img.data)
//         parsedCatagorys.push(parsedItem)
//         dispatch({ type: CATAGORY_FETCH_DONE, json: parsedCatagorys })
//         console.log('time',Date.now() - start)
//       })
//     })
//     .catch(err => {
//       console.log(err)
//       dispatch({ type: CATAGORY_FETCH_FAIL })
//     }) 
// }

export const getProducts = (share, discount, catagory, specsVariants, priceRange, sortBy = 'rate') => dispatch => {
  dispatch({ type: PRODUCTS_FETCH_START })
  const start = Date.now()

  fetch('api/product/products_get', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        share, //share name **
        discount, //discount name **
        catagory, // catagory name
        specsVariants, //array of product specs variant
        priceRange,
        // priceRange: {
        //   gte, // greate then
        //   lte  // low then
        // },
        sortBy, //rate low hight date
      })
    })
    .then(data => data.json())
    .then(json => {
      dispatch({ type: PRODUCTS_FETCH_DONE, json })
      console.log('time',Date.now() - start)
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: PRODUCTS_FETCH_FAIL })
    }) 
}

export const getUserOrders = () => dispatch => {
  dispatch({ type: USER_ORDERS_FETCH_START })
  const start = Date.now()

  fetch('api/order/order_get', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(data => data.json())
    .then(json => {
      dispatch({ type: USER_ORDERS_FETCH_DONE, json })
      console.log('time',Date.now() - start)
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: USER_ORDERS_FETCH_FAIL })
    })
}

export const getUserHistory = history => dispatch => {
  dispatch({ type: USER_HISTORY_FETCH_START })
  const start = Date.now()

  fetch('api/product/products_get_by_id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        history
      })
    })
    .then(data => data.json())
    .then(json => {
      dispatch({ type: USER_HISTORY_FETCH_DONE, json })
      console.log('time',Date.now() - start)
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: USER_HISTORY_FETCH_FAIL })
    })
}

export const selectList = list => ({ type: LIST_SELECT, list })
export const getUserList = list => dispatch => {
  dispatch({ type: LIST_FETCH_START })
  const start = Date.now()

  fetch('api/product/products_get_by_id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        list
      })
    })
    .then(data => data.json())
    .then(json => {
      dispatch({ type: LIST_FETCH_DONE, json })
      console.log('time',Date.now() - start)
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: LIST_FETCH_FAIL })
    })
}

export const getPromos = () => dispatch => {
  dispatch({ type: PROMOS_FETCH_START })
  const start = Date.now()

  fetch('api/laptoper/promos_get', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(data => data.json())
    .then(json => {
      let parsedPromos = []
      json.map(item => {
        let parsedItem = {
          ...item
        }
        parsedItem.img = base64(item.img.data)
        parsedItem.start = new Date(parsedItem.start)
        parsedItem.end = new Date(parsedItem.end)
        parsedPromos.push(parsedItem)
      })
      dispatch({ type: PROMOS_FETCH_DONE, json: parsedPromos })
      console.log('time',Date.now() - start)
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: PROMOS_FETCH_FAIL })
    }) 
}

export const getPromo = id => dispatch => {
  dispatch({ type: PROMO_FETCH_START })
  const start = Date.now()

  fetch(`api/laptoper/promo_get/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(data => data.json())
    .then(json => {
      json.img = base64(json.img.data)
      json.start = new Date(json.start)
      json.end = new Date(json.end)
      dispatch({ type: PROMO_FETCH_DONE, json })
      console.log('time',Date.now() - start)
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: PROMO_FETCH_FAIL })
    }) 
}

export const getBlog = () => dispatch => {
  dispatch({ type: BLOG_FETCH_START })
  const start = Date.now()

  fetch('api/laptoper/blog_get', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(data => data.json())
    .then(json => {
      let parsedBlog = []
      json.map(post => {
        let parsedPost = {
          ...post
        }
        parsedPost.img = base64(post.img.data)
        parsedPost.date = new Date(parsedPost.date)
        parsedBlog.push(parsedPost)
      })
      dispatch({ type: BLOG_FETCH_DONE, json: parsedBlog })
      console.log('time',Date.now() - start)
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: BLOG_FETCH_FAIL })
    }) 
}

export const getPost = id => dispatch => {
  dispatch({ type: POST_FETCH_START })
  const start = Date.now()

  fetch(`api/laptoper/post_get/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(data => data.json())
    .then(json => {
      json.img = base64(json.img.data)
      json.date = new Date(json.date)
      dispatch({ type: POST_FETCH_DONE, json })
      console.log('time',Date.now() - start)
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: POST_FETCH_FAIL })
    }) 
}

export const getLatest = (json) => ({ type: LATEST, json })
export const getPopular = (json) => ({ type: POPULAR, json })
export const getRecomend = (json) => ({ type: RECOMEND, json })

export const setView = (view) => ({ type: SET_VIEW, view })
export const handleCart = (open) => ({ type: HANDLE_CART, open })
export const handleReview = (open) => ({ type: HANDLE_REVIEW, open })
export const handleEdit = (open) => ({ type: HANDLE_EDIT, open })

//export const getProducts = (json) => ({ type: PRODUCTS, json })
export const getCatalog = (json) => ({ type: CATALOG, json })
export const getCategorys = (json) => ({ type: CATAGORYS, json })
export const getCategory = (json) => ({ type: CATAGORY, json })

// getShares = (json) => ({ type: SHARES, json })
// getShare = (json) => ({ type: SHARE, json })
// getDiscounts = (json) => ({ type: DISCOUNTS, json })
// getDiscount = (json) => ({ type: DISCOUNT, json })
//export const getBlog = (json) => ({ type: BLOG, json })
//export const getPost = (json) => ({ type: POST, json })

export const getComments = (json) => ({ type: COMMENTS, json })

export const getCart = (json) => ({ type: CART, json })

//getUser = (json) => ({ type: USER, json })
export const compare = (json) => ({ type: COMPARE, json })
export const userComments = (json) => ({ type: USER_COMMENTS, json })
// userOrders = (json) => ({ type: USER_ORDERS, json })
// userHistory = (json) => ({ type: USER_HISTORY, json })

// getDesiresLists = (json) => ({ type: DESIRES_LISTS, json })

