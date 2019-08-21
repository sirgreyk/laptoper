import { DEPARTMENT_FETCH_START, DEPARTMENT_FETCH_DONE, DEPARTMENT_FETCH_FAIL } from '../actions/actionTypes'

const catalog = (state = {
  loading: true,
  fail: false,
  json: null 
}, action) => {
    switch (action.type) {
      case  DEPARTMENT_FETCH_START:
        return {
          ...state,
          loading: true,
          fail: false
        }
      case  DEPARTMENT_FETCH_FAIL:
        return {
          ...state,
          loading: false,
          fail: true
        }
      case  DEPARTMENT_FETCH_DONE:
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
export default catalog




// import { CATALOG } from '../actions/actionTypes'

// const catalog = (state = [
//   {
//     department: 'Ноутбуки і компютери',
//     img: './img/c1.jpg',
//   },
//   {
//     department: 'Ноутбуки і компютери',
//     img: './img/c1.jpg',
//   },
//   {
//     department: 'Ноутбуки і компютери',
//     img: './img/c1.jpg',
//   },
//   {
//     department: 'Ноутбуки і компютери',
//     img: './img/c1.jpg',
//   },
//   {
//     department: 'Ноутбуки і компютери',
//     img: './img/c1.jpg',
//   },
//   {
//     department: 'Ноутбуки і компютери',
//     img: './img/c1.jpg',
//   },
// ], action) => {
//     switch (action.type) {
//       case  CATALOG:
//         return action.json
//       default:
//         return state
//     }
// }
// export default catalog