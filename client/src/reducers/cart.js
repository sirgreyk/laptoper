import { CART } from '../actions/actionTypes'

const cart = (state = [
    {
      id: 1,
      chipType: 'top sales',
      img: 'air13.jpg',
      name: 'MacBook Air 13" 1.8GHz 128GB (MQD32) 2017',
      price: 25090,
      description: 'Экран 13.3" (1440x900) WXGA+ LED / Intel Core i5 (1.8 - 2.9 ГГц) / RAM 8 ГБ / SSD 128 ГБ / Intel HD Graphics 6000 / без ОД / Wi-Fi / Bluetooth'
    },
    {
      id: 2,
      chipType: 'action',

      img: 'air13retina.jpg',
      name: 'Ноутбук Apple MacBook Air 13" Retina 128GB (MREA2) Silver',
      price: 32219,
      description: 'Экран 13.3" IPS (2560x1600) Retina, глянцевый / Intel Core i5-8210Y (1.6 - 3.6 ГГц) / RAM 8 ГБ / SSD 128 ГБ / Intel UHD Graphics 617 / без ОД / Wi-Fi / Bluetooth / веб-камера / macOS Mojave / 1.25 кг / серебристый'
    },
    {
      id: 3,
      chipType: 'exclusive',
      img: 'dell1.jpg',
      name: 'Ноутбук Dell Vostro 14 5481 (N2303VN5481_WIN) Gray',
      price: 30109,
      description: 'Экран 14" IPS (1920x1080) Full HD, глянцевый с антибликовым покрытием / Intel Core i5-8265U (1.6 - 3.9 ГГц) / RAM 8 ГБ / HDD 1 ТБ + SSD 128 ГБ / nVidia GeForce MX130, 2 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / Windows 10 Pro 64bit Rus / 1.55 кг / серый'
    },
  ], action) => {
    switch (action.type) {
      case  CART:
        return action.json
      default:
        return state
    }
}
export default cart