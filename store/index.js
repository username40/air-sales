import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      products: [{
        id: 1,
        alias: 'vozduh-iz-moskvy',
        name: 'Воздух из Москвы',
        description: 'Самый богатый воздух России.',
        price: '110.00',
        stock: 6,
        is_active: true,
      },
      {
        id: 2,
        alias: 'vozduh-iz-ekaterinburga',
        name: 'Воздух из Екатеринбурга',
        description: 'Наиболее Уральский воздух. Почти как в альпах.',
        price: '90.00',
        stock: 40,
        is_active: true
      },
      {
        id: 3,
        alias: 'vozduh-iz-celabinska',
        name: 'Воздух из Челябинска',
        description: 'Почти как на Урале, только погрязнее',
        price: '50.00',
        stock: 90,
        is_active: true
      },
      {
        id: 4,
        alias: 'bezvozdusnyj-vozduh',
        name: 'Безвоздушный воздух',
        description: 'Воздух без воздуха это не воздух',
        price: '5.00',
        stock: 0,
        is_active: true
      },
      
      {
        id: 6,
        alias: 'vozduh-iz-sankt-peterburga',
        name: 'Воздух из Санкт-Петербурга',
        description: 'Воздух северной столицы. С запахом рыбы и дождя',
        price: '95.00',
        stock: 10,
        is_active: true
      },
      {
        id: 7,
        alias: 'samarskij-vozduh',
        name: 'Самарский возду',
        description: 'Любители Самары оценят',
        price: '87.00',
        stock: 3,
        is_active: true
      },
      {
        id: 5,
        alias: 'bescennyj-vozduh',
        name: 'Бесценный воздух',
        description: 'Буквально воздух без цены. Должен выводиться, но купить нельзя',
        price: '0',
        stock: 3,
        is_active: true
      }
    ],
      cart: []
    }),
    mutations: {
      addToCart(state, productCart) {
        let cartItem = Object.assign({}, productCart, { quantity: 1 });
        let isIncremented = false;

        state.cart.forEach(item => {
          if (item.id === cartItem.id) {
            item.quantity++;
            isIncremented = true;
          }
        });

        if (!isIncremented) {
          state.cart.push(cartItem);
        }
      },
      removeFromCart(state, index) {
        state.cart.splice(index, 1);
      },
      cleanCart(state) {
        state.cart = [];
      },
      plusProduct(state, index) {
        state.cart[index].quantity++;
      },
      minusProduct(state, index) {   
        if (state.cart[index].quantity === 1) {
          state.cart.splice(index, 1);
        } else {
          state.cart[index].quantity--;
        }
        
      }
    }
  });
};

export default createStore;
