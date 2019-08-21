import { PROMOS_FETCH_START, PROMOS_FETCH_DONE, PROMOS_FETCH_FAIL } from '../actions/actionTypes'

const promo = (state = {
  loading: false,
  fail: false,
  json: []
}, action) => {
    switch (action.type) {
      case  PROMOS_FETCH_START:
        return {
          ...state,
          loading: true,
          fail: false
        }
      case  PROMOS_FETCH_FAIL:
        return {
          ...state,
          loading: false,
          fail: true
        }
      case  PROMOS_FETCH_DONE:
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
export default promo