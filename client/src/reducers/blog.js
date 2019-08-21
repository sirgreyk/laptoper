import { BLOG_FETCH_START, BLOG_FETCH_DONE, BLOG_FETCH_FAIL } from '../actions/actionTypes'

const blog = (state = {
  loading: true,
  fail: false,
  json: null 
}, action) => {
    switch (action.type) {
      case  BLOG_FETCH_START:
        return {
          ...state,
          loading: true,
          fail: false
        }
      case  BLOG_FETCH_FAIL:
        return {
          ...state,
          loading: false,
          fail: true
        }
      case  BLOG_FETCH_DONE:
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
export default blog

// import { BLOG } from '../actions/actionTypes'

// const blog = (state =  [
//   {
//     date: new Date(2019, 5, 13),
//     type: 'news',
//     name: 'бла бла бал бал бал бал бал бал бла  бал бал бал бла  бал бал бал бла',
//     img: './img/action1.jpg',
//   },
//   {
//     date: new Date(2019, 5, 14),
//     type: 'article',
//     name: 'Ноутбуки і компютери',
//     img: './img/action2.jpg',
//   },
//   {
//     date: new Date(2019, 5, 18),
//     type: 'advice',
//     name: 'Ноутбуки і компютери',
//     img: './img/action3.jpg',
//   },
//   {
//     date: new Date(2019, 5, 20),
//     type: 'review',
//     name: 'Ноутбуки і компютери',
//     img: './img/action4.jpg',
//   },
//   {
//     date: new Date(2019, 5, 22),
//     type: 'advice',
//     name: 'Ноутбуки і компютери',
//     img: './img/action5.jpg',
//   },
//   {
//     date: new Date(2019, 5, 24),
//     type: 'article',
//     name: 'Ноутбуки і компютери',
//     img: './img/action6.jpg',
//   },
//   {
//     date: new Date(2019, 5, 13),
//     type: 'review',
//     name: 'Ноутбуки і компютери',
//     img: './img/action7.jpg',
//   },
// ], action) => {
//     switch (action.type) {
//       case  BLOG:
//         return action.json
//       default:
//         return state
//     }
// }
// export default blog