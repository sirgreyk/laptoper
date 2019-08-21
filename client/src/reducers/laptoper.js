import { LAPTOPER_FETCH_START, LAPTOPER_FETCH_DONE, LAPTOPER_FETCH_FAIL } from '../actions/actionTypes'

const laptoper = (state = {
  loading: false,
  fail: false,
  mainCarousel: [
  //   {src: './img/a22.jpg', title: 'title'},
  //   {src: './img/a33.jpg', title: 'title'},
  //   {src: './img/a44.jpg', title: 'title'},
  //   {src: './img/a55.jpg', title: 'title'},
  //   {src: './img/a66.jpg', title: 'title'},
  ],
}, action) => {
    switch (action.type) {
      case  LAPTOPER_FETCH_START:
        return {
          ...state,
          loading: true,
          fail: false
        }
      case  LAPTOPER_FETCH_FAIL:
        return {
          ...state,
          loading: false,
          fail: true
        }
      case  LAPTOPER_FETCH_DONE:
        return {
          ...state,
          loading: false,
          fail: false,
          mainCarousel: action.json.mainCarousel
        }
      default:
        return state
    }
}
export default laptoper