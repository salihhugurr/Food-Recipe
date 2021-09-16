const popularData = [
  {
    id: '1',
    image: require('../images/pizza1.png'),
    title: 'Primavera Pizza',
    ingredients: [
      {
        id: '1',
        name: 'ham',
      },
      {
        id: '2',
        name: 'tomato',
      },
      {
        id: '3',
        name: 'cheese',
      },
      {
        id: '4',
        name: 'garlic',
      },
    ],
  },
  {
    id: '2',
    image: require('../images/pizza2.png'),
    title: 'Vegetarian Pizza',
    weight: '450 gr',
    rating: '4.0',
    price: 5.99,
    sizeName: 'Small',
    sizeNumber: 10,
    crust: 'Thick Crust',
    deliveryTime: 40,
    ingredients: [
      {
        id: '1',
        name: 'cheese',
      },
      {
        id: '2',
        name: 'garlic',
      },
    ],
  },
  {
    id: '3',
    image: require('../images/pizza3.png'),
    title: 'Pepperoni Pizza',
    weight: '700 gr',
    rating: '5.0',
    price: 9.99,
    sizeName: 'Large',
    sizeNumber: 18,
    crust: 'Thin Crust',
    deliveryTime: 20,
    ingredients: [
      {
        id: '1',
        name: 'tomato',
      },
      {
        id: '2',
        name: 'cheese',
      },
    ],
  },
];

export default popularData;
