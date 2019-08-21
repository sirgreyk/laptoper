import { USER_COMMENTS } from '../actions/actionTypes'

const userComments = (state = [], action) => {
    switch (action.type) {
      case  USER_COMMENTS:
        return action.json
      default:
        return state
    }
}
export default userComments