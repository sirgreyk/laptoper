import { PRODUCT } from '../actions/actionTypes'

const product = (state ={
  id: '22',
  chipType: 'top sales',
  img: 'p1.jpg',
  rate: 3.5,
  reviews: 23,
  name: 'Lenovo IdeaPad 330S-14IKB (81F400S1RA) Midnight Blue',
  price: 17999,
  imgs: [
    {smallImage: './img/p1.jpg', title: 'title', largeImage: './img/p11.jpg'},
    {smallImage: './img/p2.jpg', title: 'title', largeImage: './img/p22.jpg'},
    {smallImage: './img/p3.jpg', title: 'title', largeImage: './img/p33.jpg'},
    {smallImage: './img/p4.jpg', title: 'title', largeImage: './img/p44.jpg'},
    {smallImage: './img/p5.jpg', title: 'title', largeImage: './img/p55.jpg'},
    {smallImage: './img/p6.jpg', title: 'title', largeImage: './img/p66.jpg'},
    {smallImage: './img/p7.jpg', title: 'title', largeImage: './img/p77.jpg'},
    {smallImage: './img/p8.jpg', title: 'title', largeImage: './img/p88.jpg'},
    {smallImage: './img/p9.jpg', title: 'title', largeImage: './img/p99.jpg'},
  ],
  description: 'Екран 14" IPS (1920x1080) Full HD, матовий / Intel Core i5-8250U (1.6 - 3.4 ГГц) / RAM 8 ГБ / SSD 256 ГБ / Intel UHD Graphics 620 / без ОД / Wi-Fi / Bluetooth / веб-камера / DOS / швидка зарядка / 1.67 кг / синій',
  about: [
    {
      title: "Тонкий і легкий",
      text: "14-дюймовий IdeaPad 330S — це стильний, елегантний і неймовірно компактний ноутбук. Він ідеально підходить як для віддаленої роботи, так і для перегляду фільмів у дорозі та не стане тягарем завдяки малій вазі"
    },
    {
      title: "Поєднання простоти та розкоші",
      text: "Скошені кути та лаконічний дизайн. Металеве покриття преміум-класу. Вузька рамка."
    },
    {
      title: "Приголомшлива якість зображення формату Full HD",
      text: "Насолоджуйтесь чудовою графікою у процесі потокового передавання відео або перегляду фото в мережі на 14-дюймовому IPS-дисплеї стандарту Full HD (1920×1080)."
    },
    {
      title: "Насичене звучання завдяки технології Dolby Audio",
      text: "IdeaPad 330S стане вашим персональним центром розваг завдяки кристально чистому й багатогранному звуку Dolby Audio. Навіть на максимальній гучності динаміки передадуть найтонші нюанси звуку."
    },
    {
      title: "Швидкісне під'єднання",
      text: "Wi-Fi 802.11 ac і технологія Bluetooth 4.1 забезпечують практично миттєвий доступ до інтернету і під'єднання до інших пристроїв. Швидкість з'єднання стандарту Wi-Fi 802.11 ac утричі вища проти стандарту 802.11 b/g\n."
    },
  ],
  techSpec: [
    {
      name: "Країна-виробник товару",
      spec: "Китай",
    },
    {
      name: "Процесор",
      spec: "Чотириядерний Intel Core i5-8250U (1.6 - 3.4 ГГц)",
    },
    {
      name: "Діагональ екрана",
      spec: '14" (1920x1080) Full HD',
    },
    {
      name: 'Обсяг оперативної пам`яті',
      spec: '8 ГБ',
    },
    {
      name: 'Операційна система',
      spec: 'DOS',
    },
    {
      name: 'Покоління процесора Intel',
      spec: '8-е Kaby Lake R',
    },
    {
      name: 'Колір',
      spec: 'Синій',
    },
    {
      name: 'Оптичний привод',
      spec: 'Немає',
    },
    {
      name: 'Клавіатура',
      spec: 'З підсвіткою',
    },
    {
      name: 'Об`єм накопичувача',
      spec: '256 ГБ SSD',
    },
    {
      name: 'Українська розкладка клавіатури',
      spec: 'З',
    },
    {
      name: 'Батарея',
      spec: 'Незнімна',
    },
    {
      name: 'Кількість слотів для оперативної пам`яті',
      spec: '1',
    },
    {
      name: 'Вага',
      spec: '1.67 кг',
    },
    {
      name: 'Тип оперативної пам`яті',
      spec: 'DDR4-2400 МГц',
    },
    {
      name: 'Додаткові можливості',
      spec: 'Веб-камера HD 720P \nВбудований мікрофон \nВбудовані динаміки',
    },
    {
      name: 'Графічний адаптер',
      spec: 'Інтегрований, Intel UHD Graphics 620',
    },
    {
      name: 'Мережеві адаптери',
      spec: 'Wi-Fi 802.11ac \nBluetooth 4.1',
    },
    {
      name: 'Роз`єми та порти введення-виведення',
      spec: '2 x USB 3.1/1 x USB 3.1 Type-C/HDMI/комбінований аудіороз`єм для навушників/мікрофона/кардридер',
    },
    {
      name: 'Характеристики батареї',
      spec: '3-осередкова 52.5 (Вт*год)\nФункція швидкої зарядки',
    },
    {
      name: 'Габарити (Ш х Г х В)',
      spec: '323.1 x 234.8 x 18.95 мм',
    },
    {
      name: 'Комплект постачання',
      spec: 'Ноутбук\nАдаптер живлення\nДокументація\nГарантійний талон',
    },
    {
      name: 'Країна реєстрації бренду',
      spec: 'Китай',
    },
    {
      name: 'Гарантія',
      spec: '12 місяців',
    },
  ],
}, action) => {
    switch (action.type) {
      case  PRODUCT:
        return action.json
      default:
        return state
    }
}
export default product