import { HANDLE_EDIT} from '../actions/actionTypes'

const handleEdit = (state = false, action) => {
    switch (action.type) {
      case  HANDLE_EDIT:
        return action.open
      default:
        return state
    }
}
export default handleEdit