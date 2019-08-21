import { USER_FETCH_START, USER_FETCH_DONE, USER_FETCH_FAIL, AUTH_DONE, AUTH_FAIL } from '../actions/actionTypes'

const user = (state = {
  auth: false,
  loading: true,
  fail: false,
  json: null
}, action) => {
    switch (action.type) {
      case  USER_FETCH_START:
        return {
          ...state,
          loading: true,
          fail: false
        }
      case  USER_FETCH_FAIL:
        return {
          ...state,
          loading: false,
          fail: true
        }
      case  USER_FETCH_DONE:
        return {
          ...state,
          loading: false,
          fail: false,
          json: action.json
        }
      case  AUTH_DONE:
        return {
          ...state,
          auth: true,
        }
      case  AUTH_FAIL:
        return {
          ...state,
          auth: false,
        }
      default:
        return state
    }
}
export default user



// import { USER } from '../actions/actionTypes'

// const user = (state = {
//   settings: {
//     view: true,
//   },
//   firstName: 'Анатолій',
//   secondName: 'reghszyjdbx',
//   email: 'google@gmail.com',
//   phoneNumber: '0358646546846',
//   adress: {
//     Region: "Одеська",
//     Area: "Ширяєвський",
//     MainDescription: "Ширяєво",
//     SettlementTypeCode: 'смт.',
//     Warehouses: 1
//   },
//   about: {
//     bornDate: new Date(),
//     gender: "female",
//     children: false,
//     car: true,
//     hobby:{
//       run: false,
//       bike: true,
//       handMade: true,
//       music: false,
//       turism: true,
//       cyberSports: true,
//       fishing: true,
//       hunting: false,
//       gardening: true,
//       fitnes: true,
//       yoga: false,
//     },
//   },
//   img: undefined,
//   cart: [
//     {
//       number: 1,
//       productId: '1',
//     },
//     {
//       number: 1,
//       productId: '2',
//     },
//     {
//       number: 1,
//       productId: '3',
//     }
//   ],
//   compare: [ 
//     {
//       catagory: "laptop",
//       products: [ '1', '2' ]
//     },
//     {
//       catagory: 'phone',
//       products: [ '45', '57' ]
//     } 
//   ],
//   lists: [ 
//     {
//       name: 'Мій лист бажань',
//     products: [ {img: 'air13.jpg'},{img: 'air13.jpg'},{img: 'air13.jpg'},{img: 'air13.jpg'} ]
//     },
//     {
//       name: 'Телефонc уот ай уонт',
//       products: [ {img: 'air13.jpg'},{img: 'air13.jpg'} ]
//     },
//   ],
//   orders: [ 4568452, 6468454, 68768454, 6484864, ],
//   comments: [ 12,12,13,46,76,78 ],
//   history: [ {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, {name: 'Apple macBook 5000', img: 'air13.jpg'}, ],
// }, action) => {
//     switch (action.type) {
//       case  USER:
//         return action.user
//       default:
//         return state
//     }
// }
// export default user
