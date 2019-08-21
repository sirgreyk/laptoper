import { HANDLE_CART } from '../actions/actionTypes'

const handleCart = (state = false, action) => {
    switch (action.type) {
      case  HANDLE_CART:
        return action.open
      default:
        return state
    }
}
export default handleCart