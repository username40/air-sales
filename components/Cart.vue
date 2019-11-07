<template>
  <section class="cart">
    <h2 class="cart__title">Корзина</h2>
    <div class="cart-item" v-for="(cartItem, index) in cart" :key="cartItem.id">
      <div class="item-img">
        <span class="special-offer-badge first-badge">New!</span>
        <span class="special-offer-badge special-offer-bage_sale second-badge">Sale!</span>
        <img src="https://via.placeholder.com/96/CCCCCC/808080" alt>
      </div>
      <div class="cart-item__description">
        <h3 class="cart-item__title">{{ cartItem.name }}</h3>
        <p class="cart-item__value">
          <button @click="minusProduct(index)" class="plus-minus-btns" id="minus-btn">-</button>
          <span>{{ cartItem.quantity }}</span>
          <button @click="plusProduct(index)" class="plus-minus-btns" id="plus-btn" v-if="isAddAvaliable(cartItem)">+</button>
          <button @click="plusProduct(index)" class="plus-minus-btns" id="plus-btn" v-else disabled>+</button>
          
        </p>
      </div>
      <button class="delete-item-from-cart" @click="removeFromCart(index)">x</button>
    </div>

    <button @click="cleanCart()" class="clean-cart-button">Очистить корзину</button>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["cart"])
  },
  methods: {
    removeFromCart: function(index) {
      this.$store.commit("removeFromCart", index);
    },
    cleanCart: function() {
      this.$store.commit("cleanCart", this.product);
    },
    plusProduct: function(index) {
      this.$store.commit('plusProduct', index);
    },
    isAddAvaliable: function(cartItem) {
      if (cartItem.quantity >= cartItem.stock) {
        return false;
      }
      return true;
    },
      minusProduct: function(index) {
        this.$store.commit('minusProduct', index);
                
        // if (cart[index].quantity < cart[index].stock) {
        //     plusBtn.removeAttribute('disabled');
        // }
    },
  
  }
};
</script>

<style scoped>
.cart {
  display: table;
  border: 2px solid blue;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 20px;
  min-width: 400px;
}

.cart-item {
  display: flex;
  position: relative;
  margin-top: 15px;
}

.cart-item__description {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cart-item__title {
  margin-top: 20px;
  margin-bottom: 0;
}

.cart-item__value {
  margin-bottom: 0;
}

.plus-minus-btns {
  background-color: #CB5B15;
  border: none;
  border-radius: 5px;
  font-size: 1.2em;
  color: #ffffff;
  line-height: 1;
  width: 25px;
  height: 25px;
}

.plus-minus-btns:disabled {
  background-color: #000
}

.delete-item-from-cart {
  position: absolute;
  z-index: 2;
  right: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #c3c3c3;
  font-weight: 700;
  font-size: 20px;
  font-family: "Open Sans", sans-serif;
}

.delete-item-from-cart:hover {
  color: #000000;
}

.special-offer-badge {
  position: absolute;
  z-index: 2;
  top: 10px;
  padding-right: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 5px;
  background-color: #26cfb4;
  font-size: 12px;
  color: #000;
}

.first-badge {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.second-badge {
  left: 45px;
  border-radius: 5px;
}

.special-offer-bage_sale {
  background: #ffe600;
}

.clean-cart-button {
  border: none;
  padding: 4px;
  text-align: center;
  background-color: #808080;
  color: #fff;
  margin-top: 15px;
}

@media screen and (max-width: 1200px) {
  .cart {
    width: 100%!important;
    margin-left: 0;
  }
}

@media screen and (max-width: 575px) {
  .cart {
    min-width: 100%;
  }
}
</style>
