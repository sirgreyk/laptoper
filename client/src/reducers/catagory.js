import { CATAGORY } from '../actions/actionTypes'

const catagory = (state = {
  name: 'Ноутбуки',
  types: [
    {
      name: 'Для нескладних задач',
      img: './img/c1.jpg',
    },
    {
      name: 'Універсальні ноутбуки',
      img: './img/c1.jpg',
    },
    {
      name: 'Для бізнесу',
      img: './img/c1.jpg',
    },
    {
      name: 'Тонкі та легкі',
      img: './img/c1.jpg',
    },
    {
      name: 'Геймерскі',
      img: './img/c1.jpg',
    },
    {
      name: 'Ноутбуки з SSD',
      img: './img/c1.jpg',
    },
    {
      name: 'Ноутбуки з Windows',
      img: './img/c1.jpg',
    },
    {
      name: 'Трансформери 2в1',
      img: './img/c1.jpg',
    },
  ],
  brands: [
    {
      img: './img/brand.jpg',
    },
    {
      img: './img/brand.jpg',
    },
    {
      img: './img/brand.jpg',
    },
    {
      img: './img/brand.jpg',
    },
    {
      img: './img/brand.jpg',
    },
    {
      img: './img/brand.jpg',
    },
    {
      img: './img/brand.jpg',
    },
  ],
}, action) => {
    switch (action.type) {
      case  CATAGORY:
        return action.json
      default:
        return state
    }
}
export default catagory