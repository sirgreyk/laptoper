import { PRODUCTS_FETCH_START, PRODUCTS_FETCH_DONE, PRODUCTS_FETCH_FAIL } from '../actions/actionTypes'

const products = (state = {
  loading: true,
  fail: false,
  json: null 
}, action) => {
    switch (action.type) {
      case  PRODUCTS_FETCH_START:
        return {
          ...state,
          loading: true,
          fail: false
        }
      case  PRODUCTS_FETCH_FAIL:
        return {
          ...state,
          loading: false,
          fail: true
        }
      case  PRODUCTS_FETCH_DONE:
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
export default products

// import { PRODUCTS } from '../actions/actionTypes'

// const products = (state = [
//     {
//       id: "1",
//       chipType: 'top sales',
//       rate: 3.5,
//       reviews: 23,
//       img: 'air13.jpg',
//       name: 'MacBook Air 13" 1.8GHz 128GB (MQD32) 2017',
//       pricing: {
//         price: 25090
//       },
//       description: 'Экран 13.3" (1440x900) WXGA+ LED / Intel Core i5 (1.8 - 2.9 ГГц) / RAM 8 ГБ / SSD 128 ГБ / Intel HD Graphics 6000 / без ОД / Wi-Fi / Bluetooth'
//     },
//     {
//       id: "2",
//       chipType: 'action',

//       rate: 3.5,
//       reviews: 23,
//       img: 'air13retina.jpg',
//       name: 'Apple MacBook Air 13" Retina 128GB (MREA2) Silver',
//       pricing: {
//         price: 32219
//       },
//       description: 'Экран 13.3" IPS (2560x1600) Retina, глянцевый / Intel Core i5-8210Y (1.6 - 3.6 ГГц) / RAM 8 ГБ / SSD 128 ГБ / Intel UHD Graphics 617 / без ОД / Wi-Fi / Bluetooth / веб-камера / macOS Mojave / 1.25 кг / серебристый'
//     },
//     {
//       id: "3",
//       chipType: 'exclusive',
//       rate: 3.5,
//       reviews: 23,
//       img: 'dell1.jpg',
//       name: 'Dell Vostro 14 5481 (N2303VN5481_WIN) Gray',
//       pricing: {
//         price: 30109
//       },
//       description: 'Экран 14" IPS (1920x1080) Full HD, глянцевый с антибликовым покрытием / Intel Core i5-8265U (1.6 - 3.9 ГГц) / RAM 8 ГБ / HDD 1 ТБ + SSD 128 ГБ / nVidia GeForce MX130, 2 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / Windows 10 Pro 64bit Rus / 1.55 кг / серый'
//     },
//     {
//       id: "4",
//       chipType: 'super',
//       pricing: {
//         price: 29450
//       },
//       rate: 3.5,
//       reviews: 23,
//       img: 'pro1317.jpg',
//       name: 'MacBook Pro 13" 2.3GHz 128GB Space Grey (MPXQ2) 2017',
//       pricing: {
//         price: 32990
//       },
//       description: 'кран 13.3" IPS (2560x1600) Retina, глянцевый/Intel Core i5 (2.3 - 3.6 ГГц)/RAM 8 ГБ/SSD 128 ГБ/Intel Iris Plus Graphics 640/без ОД/Wi-Fi/Bluetooth'
//     },
//     {
//       id: "5",
//       chipType: 'new',
//       rate: 3.5,
//       reviews: 23,
//       img: 'pto1518.jpg',
//       name: 'Apple MacBook Pro 15" Silver (MR962) 2018',
//       pricing: {
//         price: 65519
//       },
//       description: 'Экран 15.4" IPS (2880x1800), глянцевый / Intel Core i7-8750H (2.2 - 4.1 ГГц) / RAM 16 ГБ / SSD 256 ГБ / AMD Radeon Pro 555X, 4 ГБ / Wi-Fi / Bluetooth / веб-камера / Mac OS High Sierra / 1.83 кг / серебристый'
//     },
//     {
//       id: "6",
//       chipType: 'new',
//       rate: 3.5,
//       reviews: 23,
//       img: 'pto1518.jpg',
//       name: 'Apple MacBook Pro 15" Silver (MR962) 2018',
//       pricing: {
//         price: 65519
//       },
//       description: 'Экран 15.4" IPS (2880x1800), глянцевый / Intel Core i7-8750H (2.2 - 4.1 ГГц) / RAM 16 ГБ / SSD 256 ГБ / AMD Radeon Pro 555X, 4 ГБ / Wi-Fi / Bluetooth / веб-камера / Mac OS High Sierra / 1.83 кг / серебристый'
//     },
//     {
//       id: "7",
//       chipType: 'new',
//       rate: 3.5,
//       reviews: 23,
//       img: 'pto1518.jpg',
//       name: 'Apple MacBook Pro 15" Silver (MR962) 2018',
//       pricing: {
//         price: 65519
//       },
//       description: 'Экран 15.4" IPS (2880x1800), глянцевый / Intel Core i7-8750H (2.2 - 4.1 ГГц) / RAM 16 ГБ / SSD 256 ГБ / AMD Radeon Pro 555X, 4 ГБ / Wi-Fi / Bluetooth / веб-камера / Mac OS High Sierra / 1.83 кг / серебристый'
//     },
//     {
//       id: "8",
//       chipType: 'top sales',
//       rate: 3.5,
//       reviews: 23,
//       img: 'air13.jpg',
//       name: 'MacBook Air 13" 1.8GHz 128GB (MQD32) 2017',
//       pricing: {
//         price: 25090
//       },
//       description: 'Короткі характеристики: Экран 13.3" (1440x900) WXGA+ LED / Intel Core i5 (1.8 - 2.9 ГГц) / RAM 8 ГБ / SSD 128 ГБ / Intel HD Graphics 6000 / без ОД / Wi-Fi / Bluetooth'
//     },
//   ], action) => {
//     switch (action.type) {
//       case  PRODUCTS:
//         return action.json
//       default:
//         return state
//     }
// }
// export default products