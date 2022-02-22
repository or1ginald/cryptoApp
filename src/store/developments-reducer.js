const initialState = {
  events: [
    {
      id: 1,
      name: 'events',
      img: 'https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-500x.jpg',
      data: '11/01/2012',
      rating: 3,
      description:
        'lorem ' +
        'fffffffffffffffffffffffffffffffffff' +
        'fffffffffffffffffffffffffffffffffffffffffff' +
        'fffffffffffffffffffffff',
    },
    {
      id: 2,
      name: 'events',
      img: 'https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-500x.jpg',
      data: '11/01/2012',
      rating: 5,
      description:
        'lorem ' +
        'fffffffffffffffffffffffffffffffffff' +
        'fffffffffffffffffffffffffffffffffffffffffff' +
        'fffffffffffffffffffffff',
    },
    {
      id: 3,
      name: 'events',
      img: 'https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-500x.jpg',
      data: '11/01/2012',
      rating: 4.2,
      description:
        'lorem ' +
        'fffffffffffffffffffffffffffffffffff' +
        'fffffffffffffffffffffffffffffffffffffffffff' +
        'fffffffffffffffffffffff',
    },
    {
      id: 4,
      name: 'events',
      img: 'https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-500x.jpg',
      data: '11/01/2012',
      rating: 4.8,
      description:
        'lorem ' +
        'fffffffffffffffffffffffffffffffffff' +
        'fffffffffffffffffffffffffffffffffffffffffff' +
        'fffffffffffffffffffffff',
    },
    {
      id: 5,
      name: 'events',
      img: 'https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-500x.jpg',
      data: '11/01/2012',
      rating: 4.3,
      description:
        'lorem ' +
        'fffffffffffffffffffffffffffffffffff' +
        'fffffffffffffffffffffffffffffffffffffffffff' +
        'fffffffffffffffffffffff',
    },
  ],
};

export const developmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
