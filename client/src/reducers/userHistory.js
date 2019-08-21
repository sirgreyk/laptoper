import { USER_HISTORY_FETCH_START, USER_HISTORY_FETCH_DONE, USER_HISTORY_FETCH_FAIL } from '../actions/actionTypes'

const userHistory = (state = {
  loading: true,
  fail: false,
  json: null 
}, action) => {
    switch (action.type) {
      case  USER_HISTORY_FETCH_START:
        return {
          ...state,
          loading: true,
          fail: false
        }
      case  USER_HISTORY_FETCH_FAIL:
        return {
          ...state,
          loading: false,
          fail: true
        }
      case  USER_HISTORY_FETCH_DONE:
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
export default userHistory
// import { USER_HISTORY } from '../actions/actionTypes'

// const userHistory = (state = [ 
//     {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, 
//   ], action) => {
//     switch (action.type) {
//       case  USER_HISTORY:
//         return action.json
//       default:
//         return state
//     }
// }
// export default userHistory