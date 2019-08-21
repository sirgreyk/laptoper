import { SIGNUP_START, SIGNUP_DONE, SIGNUP_FAIL } from '../actions/actionTypes'

const signup = (state = {
  done: false,
  load: false,
  fail: false,
}, action) => {
    switch (action.type) {
      case  SIGNUP_START:
        return {
          done: false,
          load: true,
          fail: false
        }
      case  SIGNUP_FAIL:
        return {
          done: false,
          load: false,
          fail: true
        }
      case  SIGNUP_DONE:
        return {
          done: true,
          load: false,
          fail: false
        }
      default:
        return state
    }
}
export default signup