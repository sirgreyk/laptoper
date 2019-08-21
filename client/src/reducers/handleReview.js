import { HANDLE_REVIEW } from '../actions/actionTypes'

const handleReview = (state = false, action) => {
    switch (action.type) {
      case  HANDLE_REVIEW:
        return action.open
      default:
        return state
    }
}
export default handleReview