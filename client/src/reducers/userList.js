import { LIST_FETCH_START, LIST_FETCH_DONE, LIST_FETCH_FAIL, LIST_SELECT } from '../actions/actionTypes'

const userList = (state = {
  selectList: null,
  loading: true,
  fail: false,
  json: null 
}, action) => {
    switch (action.type) {
      case  LIST_SELECT:
        return {
          ...state,
          selectList: action.list
        }
      case  LIST_FETCH_START:
        return {
          ...state,
          loading: true,
          fail: false
        }
      case  LIST_FETCH_FAIL:
        return {
          ...state,
          loading: false,
          fail: true
        }
      case  LIST_FETCH_DONE:
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
export default userList

// import { DESIRES_LISTS } from '../actions/actionTypes'

// const list = (state = {
//     id: '123123',
//     name: "Лист Бажань 1",
//     lists: [
//       {
//         id: '123123',
//         name: 'Лист Бажань 1',
//       },
//       {
//         id: '1231вчпівап23',
//         name: 'список 2',
//       },
//     ],
//     products: [
//       {
//         rate: 3.5,
//         reviews: 5,
//         id: '1',
//         chipType: 'top sales',
//         img: 'air13.jpg',
//         name: 'MacBook Air 13" 1.8GHz 128GB (MQD32) 2017',
//         price: 25090,
//         description: 'Экран 13.3" (1440x900) WXGA+ LED / Intel Core i5 (1.8 - 2.9 ГГц) / RAM 8 ГБ / SSD 128 ГБ / Intel HD Graphics 6000 / без ОД / Wi-Fi / Bluetooth'
//       },
//       {
//         rate: 3.5,
//         reviews: 5,
//         id: '2',
//         chipType: 'action',
//         img: 'air13retina.jpg',
//         name: 'Ноутбук Apple MacBook Air 13" Retina 128GB (MREA2) Silver',
//         price: 32219,
//         description: 'Экран 13.3" IPS (2560x1600) Retina, глянцевый / Intel Core i5-8210Y (1.6 - 3.6 ГГц) / RAM 8 ГБ / SSD 128 ГБ / Intel UHD Graphics 617 / без ОД / Wi-Fi / Bluetooth / веб-камера / macOS Mojave / 1.25 кг / серебристый'
//       },
//       {
//         rate: 3.5,
//         reviews: 5,
//         id: '3',
//         chipType: 'exclusive',
//         img: 'dell1.jpg',
//         name: 'Ноутбук Dell Vostro 14 5481 (N2303VN5481_WIN) Gray',
//         price: 30109,
//         description: 'Экран 14" IPS (1920x1080) Full HD, глянцевый с антибликовым покрытием / Intel Core i5-8265U (1.6 - 3.9 ГГц) / RAM 8 ГБ / HDD 1 ТБ + SSD 128 ГБ / nVidia GeForce MX130, 2 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / Windows 10 Pro 64bit Rus / 1.55 кг / серый'
//       },
//       {
//         rate: 3.5,
//         reviews: 5,
//         id: '4',
//         chipType: 'super price',
//         img: 'pro1317.jpg',
//         name: 'MacBook Pro 13" 2.3GHz 128GB Space Grey (MPXQ2) 2017',
//         price: 32990,
//         description: 'Короткі характеристики: Экран 13.3" IPS (2560x1600) Retina, глянцевый/Intel Core i5 (2.3 - 3.6 ГГц)/RAM 8 ГБ/SSD 128 ГБ/Intel Iris Plus Graphics 640/без ОД/Wi-Fi/Bluetooth'
//       },
//     ]
//   }, action) => {
//     switch (action.type) {
//       case  DESIRES_LISTS:
//         return action.user
//       default:
//         return state
//     }
// }
// export default list