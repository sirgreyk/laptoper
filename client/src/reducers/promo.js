import { PROMO_FETCH_START, PROMO_FETCH_DONE, PROMO_FETCH_FAIL } from '../actions/actionTypes'

const promo = (state = {
  loading: false,
  fail: false,
  json: null
}, action) => {
    switch (action.type) {
      case  PROMO_FETCH_START:
        return {
          ...state,
          loading: true,
          fail: false
        }
      case  PROMO_FETCH_FAIL:
        return {
          ...state,
          loading: false,
          fail: true
        }
      case  PROMO_FETCH_DONE:
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