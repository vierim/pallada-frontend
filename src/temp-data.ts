import { Product } from "./entities/product/types";

export const catalogItems = [
  {
    id: 1,
    title: 'Безе',
    slug: 'beze',
    pic: 'catalog-section/beze.jpg',
  },
  {
    id: 2,
    title: 'Вафли',
    slug: 'vafli',
    pic: 'catalog-section/vafli.jpg',
  },
  {
    id: 3,
    title: 'Восточные сладости',
    slug: 'vostochnye-sladosti',
    pic: 'catalog-section/vostochnye-sladosti.jpg',
  },
  {
    id: 4,
    title: 'Галеты',
    slug: 'galety',
    pic: 'catalog-section/galety.png',
  },
  {
    id: 5,
    title: 'Готовые завтраки',
    slug: 'zavtraki',
    pic: 'catalog-section/zavtraki.jpg',
  },
  {
    id: 6,
    title: 'Драже',
    slug: 'drazhe',
    pic: 'catalog-section/drazhe.jpg',
  },
  {
    id: 7,
    title: 'Зефир',
    slug: 'zephyr',
    pic: 'catalog-section/zephyr.jpg',
  },
  {
    id: 8,
    title: 'Ирис',
    slug: 'iris',
    pic: 'catalog-section/iris.jpg',
  },
];

export const mainPage = {
  cover: '',
  text: {
    headline: 'Кондитерка крупным и мелким оптом',
    pic: '',
    content: [
      'Оптовая продажа кондитерских изделий – специализация нашей компании. Мы располагаем широким ассортиментом продукции ведущих российских фабрик. Вы в любое время можете осуществить заказ, позвонив нам в офис, либо оставив заявку на электронную почту. Помимо оптовых цен в прайс­листе с каждым клиентом оговаривается дополнительная скидка в зависимости от объема заказа.',
      'Мы заключаем договоры на поставку кондитерских изделий оптом в Москву и Московскую область.',
      'Мы будем рады предложить Вам качественную продукцию по доступным ценам.',
    ],
  },
};

export const porducts: Product[] = [
  {
    id: '0001',
    name: 'Печенье "Ювелирное"',
    url: '/product/818/',
    pic: '/img/goods/165.png',
    pack: {
      size: 6,
      unit: 'кг/гофро',
    },
    price: {
      value: 222,
      unit: 'руб/кг',
    },
    brand: {
      name: 'Кондитерские изделия Морозова',
    },
    rating: 5,
    religion: false,
  },
  {
    id: '0002',
    name: 'Печенье "Пломбирчики" в белой глазури',
    url: '/product/921/',
    pic: '/img/goods/791.jpg',
    pack: {
      size: 2.6,
      unit: 'кг/тел',
    },
    price: {
      value: 343,
      unit: 'руб/кг',
    },
    vendor: 'Элит Кондитерский дом',
    rating: 5,
    bestSeller: true,
    religion: false,
  },
  {
    id: '0003',
    name: 'Печенье Обедница с джемом вишня и чернослив постное',
    url: '/product/1265/',
    pic: '/img/goods/1501.jpg',
    pack: {
      size: 3,
      unit: 'кг/тел',
    },
    price: {
      value: 294,
      unit: 'руб/кг',
    },
    vendor: 'Возрождение Фабрика домашней выпечки',
    rating: 4.5,
    religion: true,
    newProduct: true,
  },
];
