import { COMPARE } from '../actions/actionTypes'

const compare = (state = {
  specs: [
      {
        type: 'made',
        name: "Країна-виробник товару",
      },
      {
        type: 'CPU',
        name: "Процесор",
      },
      {
        type: 'diagonal',
        name: "Діагональ екрана",
      },
      {
        type: 'RAM',
        name: 'Обсяг оперативної пам`яті',
      },
      {
        type: 'OS',
        name: 'Операційна система',
      },
      {
        type: 'CPU generation',
        name: 'Покоління процесора Intel',
      },
      {
        type: 'color',
        name: 'Колір',
      },
      {
        type: 'optical drive',
        name: 'Оптичний привод',
      },
      {
        type: 'keyboard',
        name: 'Клавіатура',
      },
      {
        type: 'drive',
        name: 'Об`єм накопичувача',
      },
      {
        type: 'ua keyboard layout',
        name: 'Українська розкладка клавіатури',
      },
      {
        type: 'battery',
        name: 'Батарея',
      },
      {
        type: 'number of the slots for RAM',
        name: 'Кількість слотів для оперативної пам`яті',
      },
      {
        type: 'weight',
        name: 'Вага',
      },
      {
        type: 'type of RAM',
        name: 'Тип оперативної пам`яті',
      },
      {
        type: 'additional features',
        name: 'Додаткові можливості',
      },
      {
        type: 'GPU',
        name: 'Графічний адаптер',
      },
      {
        type: 'network adapters',
        name: 'Мережеві адаптери',
      },
      {
        type: 'connectors and I / O ports',
        name: 'Роз`єми та порти введення-виведення',
      },
      {
        type: 'specs battery',
        name: 'Характеристики батареї',
      },
      {
        type: 'dimensions',
        name: 'Габарити (Ш х Г х В)',
      },
      {
        type: 'supply kit',
        name: 'Комплект постачання',
      },
      {
        type: 'brand registration',
        name: 'Країна реєстрації бренду',
      },
      {
        type: 'warranty',
        name: 'Гарантія',
      },
  ],
  products: [
    {
      id: 11,
      img: 'air13.jpg',
      name: 'Ноутбук ASUS VivoBook 15 X542UF-DM262 (90NB0IJ3-M03720) Golden',
      price: 14499,
      specs: [
        {
          type: 'made',
          name: "Країна-виробник товару",
          spec: "Китай",
        },
        {
          type: 'CPU',
          name: "Процесор",
          spec: "Двоядерний Intel Core i3-8130U (2.2 - 3.4 ГГц)",
        },
        {
          type: 'diagonal',
          name: "Діагональ екрана",
          spec: '15.6" (1920x1080) Full HD',
        },
        {
          type: 'RAM',
          name: 'Обсяг оперативної пам`яті',
          spec: '8 ГБ',
        },
        {
          type: 'OS',
          name: 'Операційна система',
          spec: 'Endless OS',
        },
        {
          type: 'CPU generation',
          name: 'Покоління процесора Intel',
          spec: '8-е Kaby Lake S',
        },
        {
          type: 'color',
          name: 'Колір',
          spec: 'Золотий',
        },
        {
          type: 'optical drive',
          name: 'Оптичний привод',
          spec: 'DVD Super Multi',
        },
        {
          type: 'keyboard',
          name: 'Клавіатура',
          spec: 'Без підсвітки',
        },
        {
          type: 'drive',
          name: 'Об`єм накопичувача',
          spec: '256 ГБ SSD',
        },
        {
          type: 'ua keyboard layout',
          name: 'Українська розкладка клавіатури',
          spec: 'З',
        },
        {
          type: 'battery',
          name: 'Батарея',
          spec: 'Незнімна',
        },
        {
          type: 'number of the slots for RAM',
          name: 'Кількість слотів для оперативної пам`яті',
          spec: '2',
        },
        {
          type: 'weight',
          name: 'Вага',
          spec: '2.3 кг',
        },
        {
          type: 'type of RAM',
          name: 'Тип оперативної пам`яті',
          spec: 'DDR4-2400 МГц',
        },
        {
          type: 'additional features',
          name: 'Додаткові можливості',
          spec: 'Веб-камера VGA \nВбудований мікрофон \nВбудовані динаміки',
        },
        {
          type: 'GPU',
          name: 'Графічний адаптер',
          spec: "Дискретний, nVidia GeForce MX130, 2 ГБ виділеної пам'яті GDDR5",
        },
        {
          type: 'network adapters',
          name: 'Мережеві адаптери',
          spec: 'Gigabit Ethernet \nWi-Fi 802.11ac \nBluetooth 4.1',
        },
        {
          type: 'connectors and I / O ports',
          name: 'Роз`єми та порти введення-виведення',
          spec: '1 x USB 2.0/2 x USB 3.0/1 x USB 3.1 Type-C/HDMI/VGA/LAN (RJ-45)/комбінований аудіороз"єм для навушників/мікрофона/кардридер SD',
        },
        {
          type: 'specs battery',
          name: 'Характеристики батареї',
          spec: "Літій-полімерна, 2-осередкова, 38 Вт*год \nШвидка зарядка, до 60% за 49 хвилин",
        },
        {
          type: 'dimensions',
          name: 'Габарити (Ш х Г х В)',
          spec: '380 x 251 x 23.2 мм',
        },
        {
          type: 'supply kit',
          name: 'Комплект постачання',
          spec: 'Ноутбук\nАдаптер живлення\nДокументація',
        },
        {
          type: 'brand registration',
          name: 'Країна реєстрації бренду',
          spec: 'Тайвань',
        },
        {
          type: 'warranty',
          name: 'Гарантія',
          spec: '12 місяців',
        },
    ],
    },
    
    {
      id: 22,
      img: 'dell1.jpg',
      name: 'Lenovo IdeaPad 330S-14IKB (81F400S1RA) Midnight Blue',
      price: 17999,
      specs: [
        {
          type: 'made',
          name: "Країна-виробник товару",
          spec: "Китай",
        },
        {
          type: 'CPU',
          name: "Процесор",
          spec: "Чотириядерний Intel Core i5-8250U (1.6 - 3.4 ГГц)",
        },
        {
          type: 'diagonal',
          name: "Діагональ екрана",
          spec: '14" (1920x1080) Full HD',
        },
        {
          type: 'RAM',
          name: 'Обсяг оперативної пам`яті',
          spec: '8 ГБ',
        },
        {
          type: 'OS',
          name: 'Операційна система',
          spec: 'DOS',
        },
        {
          type: 'CPU generation',
          name: 'Покоління процесора Intel',
          spec: '8-е Kaby Lake R',
        },
        {
          type: 'color',
          name: 'Колір',
          spec: 'Синій',
        },
        {
          type: 'optical drive',
          name: 'Оптичний привод',
          spec: 'Немає',
        },
        {
          type: 'keyboard',
          name: 'Клавіатура',
          spec: 'З підсвіткою',
        },
        {
          type: 'drive',
          name: 'Об`єм накопичувача',
          spec: '256 ГБ SSD',
        },
        {
          type: 'ua keyboard layout',
          name: 'Українська розкладка клавіатури',
          spec: 'З',
        },
        {
          type: 'battery',
          name: 'Батарея',
          spec: 'Незнімна',
        },
        {
          type: 'number of the slots for RAM',
          name: 'Кількість слотів для оперативної пам`яті',
          spec: '1',
        },
        {
          type: 'weight',
          name: 'Вага',
          spec: '1.67 кг',
        },
        {
          type: 'type of RAM',
          name: 'Тип оперативної пам`яті',
          spec: 'DDR4-2400 МГц',
        },
        {
          type: 'additional features',
          name: 'Додаткові можливості',
          spec: 'Веб-камера HD 720P \nВбудований мікрофон \nВбудовані динаміки',
        },
        {
          type: 'GPU',
          name: 'Графічний адаптер',
          spec: 'Інтегрований, Intel UHD Graphics 620',
        },
        {
          type: 'network adapters',
          name: 'Мережеві адаптери',
          spec: 'Wi-Fi 802.11ac \nBluetooth 4.1',
        },
        {
          type: 'connectors and I / O ports',
          name: 'Роз`єми та порти введення-виведення',
          spec: '2 x USB 3.1/1 x USB 3.1 Type-C/HDMI/комбінований аудіороз`єм для навушників/мікрофона/кардридер',
        },
        {
          type: 'specs battery',
          name: 'Характеристики батареї',
          spec: '3-осередкова 52.5 (Вт*год)\nФункція швидкої зарядки',
        },
        {
          type: 'dimensions',
          name: 'Габарити (Ш х Г х В)',
          spec: '323.1 x 234.8 x 18.95 мм',
        },
        {
          type: 'supply kit',
          name: 'Комплект постачання',
          spec: 'Ноутбук\nАдаптер живлення\nДокументація\nГарантійний талон',
        },
        {
          type: 'brand registration',
          name: 'Країна реєстрації бренду',
          spec: 'Китай',
        },
        {
          type: 'warranty',
          name: 'Гарантія',
          spec: '12 місяців',
        },
    ],
    },
    {
      id: 33,
      img: 'p1.jpg',
      name: 'Asus TUF Gaming FX505GE-BQ371 (90NR00S2-M07930) Black',
      price: 25999,
      specs: [
        {
          type: 'made',
          name: "Країна-виробник товару",
          spec: "Китай",
        },
        {
          type: 'CPU',
          name: "Процесор",
          spec: "Чотириядерний Intel Core i5-8300H (2.3 - 4.0 ГГц)",
        },
        {
          type: 'diagonal',
          name: "Діагональ екрана",
          spec: '15.6" (1920x1080) Full HD',
        },
        {
          type: 'RAM',
          name: 'Обсяг оперативної пам`яті',
          spec: '8 ГБ',
        },
        {
          type: 'OS',
          name: 'Операційна система',
          spec: 'Без ОС',
        },
        {
          type: 'CPU generation',
          name: 'Покоління процесора Intel',
          spec: '8-е Cofee Lake',
        },
        {
          type: 'color',
          name: 'Колір',
          spec: 'Чорний',
        },
        {
          type: 'optical drive',
          name: 'Оптичний привод',
          spec: 'Немає',
        },
        {
          type: 'keyboard',
          name: 'Клавіатура',
          spec: 'З підсвіткою',
        },
        {
          type: 'drive',
          name: 'Об`єм накопичувача',
          spec: '1 ТБ',
        },
        {
          type: 'ua keyboard layout',
          name: 'Українська розкладка клавіатури',
          spec: 'З',
        },
        {
          type: 'battery',
          name: 'Батарея',
          spec: 'Незнімна',
        },
        {
          type: 'number of the slots for RAM',
          name: 'Кількість слотів для оперативної пам`яті',
          spec: '2',
        },
        {
          type: 'weight',
          name: 'Вага',
          spec: '2.2 кг',
        },
        {
          type: 'type of RAM',
          name: 'Тип оперативної пам`яті',
          spec: 'DDR4-2666 МГц',
        },
        {
          type: 'additional features',
          name: 'Додаткові можливості',
          spec: 'Веб-камера HD 720P \nВбудований мікрофон \nВбудовані динаміки',
        },
        {
          type: 'GPU',
          name: 'Графічний адаптер',
          spec: 'Дискретний, nVidia GeForce GTX 1050 Ti, 4 ГБ виділеної пам"яті',
        },
        {
          type: 'network adapters',
          name: 'Мережеві адаптери',
          spec: 'Wi-Fi 802.11ac\nBluetooth 5.0\nGigabit Ethernet',
        },
        {
          type: 'connectors and I / O ports',
          name: 'Роз`єми та порти введення-виведення',
          spec: "1 x USB 2.0/2 x USB 3.1 Type A (5 Гбіт/сек)/HDMI/LAN (RJ-45)/комбінований аудіороз'єм для навушників/мікрофона",
        },
        {
          type: 'specs battery',
          name: 'Характеристики батареї',
          spec: '3-коміркова, 48 Вт*год',
        },
        {
          type: 'dimensions',
          name: 'Габарити (Ш х Г х В)',
          spec: '360.4 x 262 x 26.8 мм',
        },
        {
          type: 'supply kit',
          name: 'Комплект постачання',
          spec: 'Ноутбук\nАдаптер живлення\nДокументація',
        },
        {
          type: 'brand registration',
          name: 'Країна реєстрації бренду',
          spec: 'Тайвань',
        },
        {
          type: 'warranty',
          name: 'Гарантія',
          spec: '12 місяців',
        },
    ],
    },
  ]
}, action) => {
    switch (action.type) {
      case  COMPARE:
        return action.json
      default:
        return state
    }
}
export default compare