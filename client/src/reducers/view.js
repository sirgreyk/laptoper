import { SET_VIEW } from '../actions/actionTypes'

const view = (state = true, action) => {
    switch (action.type) {
      case  SET_VIEW:
        return action.view
      default:
        return state
    }
}
export default view