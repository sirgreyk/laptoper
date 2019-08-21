import { POST_FETCH_START, POST_FETCH_DONE, POST_FETCH_FAIL } from '../actions/actionTypes'

const post = (state = {
  loading: true,
  fail: false,
  json: null 
}, action) => {
    switch (action.type) {
      case  POST_FETCH_START:
        return {
          ...state,
          loading: true,
          fail: false
        }
      case  POST_FETCH_FAIL:
        return {
          ...state,
          loading: false,
          fail: true
        }
      case  POST_FETCH_DONE:
        return {
          ...state,
          loading: false,
          fail: false,
          json: action.json
        }
      default:
        return state
    }
}
export default post