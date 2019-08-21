import { USER_ORDERS_FETCH_START, USER_ORDERS_FETCH_DONE, USER_ORDERS_FETCH_FAIL } from '../actions/actionTypes'

const userOrders = (state = {
  loading: true,
  fail: false,
  json: null 
}, action) => {
    switch (action.type) {
      case  USER_ORDERS_FETCH_START:
        return {
          ...state,
          loading: true,
          fail: false
        }
      case  USER_ORDERS_FETCH_FAIL:
        return {
          ...state,
          loading: false,
          fail: true
        }
      case  USER_ORDERS_FETCH_DONE:
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
export default userOrders

// [
//   {
//     history: [
//       {
//         status: 'Прямує до міста отримувача',
//         date: new Date(),
//       },
//       {
//         status: 'Комплектуєтся',
//         date: new Date(),
//       },
//       {
//         status: 'Комплектуєтся перевізником',
//         date: new Date(),
//       },
//       {
//         status: 'Передано до служби доставки',
//         date: new Date(),
//       },
//       {
//         status: 'Нове замовленя',
//         date: new Date(),
//       },
//     ],
//     status: 'done',
//     date: new Date(),
//     number: '684356',
//     products: [
//       {
//         productId: '135534',
//         quantity: '2',
//         img: 'air13.jpg',
//         name: 'MacBook Air 13" 1.8GHz 128GB (MQD32) 2017',
//         price: 25090,
//       },
//       {
//         productId: '776664',
//         quantity: '1',
//         img: 'pto1518.jpg',
//         name: 'Apple MacBook Pro 15" Silver (MR962) 2018',
//         price: 65519,
//       },
//     ]
//   },
//   {
//     history:[
//       {
//         status: 'Виконано',
//         date: new Date(),
//       },
//       {
//         status: 'Знаходится у місті отримувача',
//         date: new Date(),
//       },
//       {
//         status: 'Прямує до міста отримувача',
//         date: new Date(),
//       },
//       {
//         status: 'Комплектуєтся',
//         date: new Date(),
//       },
//       {
//         status: 'Комплектуєтся перевізником',
//         date: new Date(),
//       },
//       {
//         status: 'Передано до служби доставки',
//         date: new Date(),
//       },
//       {
//         status: 'Опрацьовано автоматично',
//         date: new Date(),
//       },
//       {
//         status: 'Нове замовленя',
//         date: new Date(),
//       },
//     ],
//     status: 'done',
//     date: new Date(),
//     number: '684356',
//     products: [
//       {
//         productId: '135534',
//         quantity: '1',
//         img: 'air13retina.jpg',
//         name: 'Apple MacBook Air 13" Retina 128GB (MREA2) Silver',
//         price: 32219,
//       },
//     ]
//   },
//   {
//     history:[
//       {
//         status: 'Виконано',
//         date: new Date(),
//       },
//       {
//         status: 'Знаходится у місті отримувача',
//         date: new Date(),
//       },
//       {
//         status: 'Прямує до міста отримувача',
//         date: new Date(),
//       },
//       {
//         status: 'Комплектуєтся',
//         date: new Date(),
//       },
//       {
//         status: 'Комплектуєтся перевізником',
//         date: new Date(),
//       },
//       {
//         status: 'Передано до служби доставки',
//         date: new Date(),
//       },
//       {
//         status: 'Опрацьовано автоматично',
//         date: new Date(),
//       },
//       {
//         status: 'Нове замовленя',
//         date: new Date(),
//       },
//     ],
//     status: 'done',
//     date: new Date(),
//     number: '7486746',
//     products: [
//       {
//         productId: '776664',
//         quantity: '1',
//         img: 'dell1.jpg',
//         name: 'Dell Vostro 14 5481 (N2303VN5481_WIN) Gray',
//         price: 30109,
//       },
//     ]
//   },
//   ]