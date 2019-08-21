// import { CATAGORY_FETCH_START, CATAGORY_FETCH_DONE, CATAGORY_FETCH_FAIL } from '../actions/actionTypes'

// const catagorys = (state = {
//   loading: true,
//   fail: false,
//   json: null 
// }, action) => {
//     switch (action.type) {
//       case  CATAGORY_FETCH_START:
//         return {
//           ...state,
//           loading: true,
//           fail: false
//         }
//       case  CATAGORY_FETCH_FAIL:
//         return {
//           ...state,
//           loading: false,
//           fail: true
//         }
//       case  CATAGORY_FETCH_DONE:
//         return {
//           ...state,
//           loading: false,
//           fail: false,
//           json: action.json
//         }
//       default:
//         return state
//     }
// }
// export default catagorys


// import { CATAGORY } from '../actions/actionTypes'

// const catagory = (state = {
//   name: 'Ноутбуки та комп\'ютери',
//   catagory: [
//     {
//       name: 'Ноутбуки',
//       img: './img/c1.jpg',
//     },
//     {
//       name: 'Аксесуари для ноутбуків і пк',
//       img: './img/c1.jpg',
//     },
//     {
//       name: 'Планшети',
//       img: './img/c1.jpg',
//     },
//     {
//       name: 'Аксессуари до планшетів',
//       img: './img/c1.jpg',
//     },
//     {
//       name: 'Електроні книги',
//       img: './img/c1.jpg',
//     },
//     {
//       name: 'Комплектуючі',
//       img: './img/c1.jpg',
//     },
//     {
//       name: 'Компютери',
//       img: './img/c1.jpg',
//     },
//     {
//       name: 'Серверне обладнання',
//       img: './img/c1.jpg',
//     },
//     {
//       name: 'Орг техніка',
//       img: './img/c1.jpg',
//     },
//     {
//       name: 'Програмне забезпечення',
//       img: './img/c1.jpg',
//     },
//   ]
// }, action) => {
//     switch (action.type) {
//       case  CATAGORY:
//         return action.json
//       default:
//         return state
//     }
// }
// export default catagory
