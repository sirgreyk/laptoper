import { LATEST } from '../actions/actionTypes'

const mlatest = (state = [
    {
      id: 1,
      img: 'air13.jpg',
      name: 'MacBook Air 13" 1.8GHz 128GB (MQD32) 2017',
      price: 25090,
    },
    {
      id: 2,
      img: 'air13retina.jpg',
      name: 'Ноутбук Apple MacBook Air 13" Retina 128GB (MREA2) Silver',
      price: 32219,
    },
    {
      id: 3,
      img: 'dell1.jpg',
      name: 'Ноутбук Dell Vostro 14 5481 (N2303VN5481_WIN) Gray',
      price: 30109,
    },
    {
      id: 4,
      img: 'pro1317.jpg',
      name: 'MacBook Pro 13" 2.3GHz 128GB Space Grey (MPXQ2) 2017',
      price: 32990,
    },
    {
      id: 5,
      img: 'pto1518.jpg',
      name: 'Apple MacBook Pro 15" Silver (MR962) 2018',
      price: 65519,
    },
    {
      id: 6,
      img: 'pto1518.jpg',
      name: 'Apple MacBook Pro 15" Silver (MR962) 2018',
      price: 65519,
    },
    {
      id: 7,
      img: 'pto1518.jpg',
      name: 'Apple MacBook Pro 15" Silver (MR962) 2018',
      price: 65519,
    },
    {
      id: 8,
      img: 'air13.jpg',
      name: 'MacBook Air 13" 1.8GHz 128GB (MQD32) 2017',
      price: 25090,
    },
  ], action) => {
    switch (action.type) {
      case  LATEST:
        return action.json
      default:
        return state
    }
}
export default mlatest