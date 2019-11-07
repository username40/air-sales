<template>
  <div class="air-types-item">
    <nuxt-link
      :to="'/products/'+product.id"
      class="air-types-item__link"
      v-if="product.is_active === true"
    >
      <div class="item-img">
        <span
          class="special-offer-badge special-offer-badge_not-available first-badge"
          v-if="!product.stock"
        >Not Available!</span>
        <span class="special-offer-badge first-badge" v-if="product.stock">New!</span>
        <span
          class="special-offer-badge special-offer-bage_sale second-badge"
          v-if="product.stock"
        >Sale!</span>
        
        <img src="https://via.placeholder.com/128/CCCCCC/808080" alt>
      </div>
      <h3 class="item-title">{{ product.name }}</h3>
    </nuxt-link>
    <p class="item-description">{{ product.description }}</p>
    <p class="item-description">Осталось на складе: {{ product.stock }}</p>
    <p>{{ product.price }}р.</p>
    <button class="btn-secondary btn-sm add-to-cart" v-if="checkIsAvailable(product)" @click="addToCart()">Добавить</button>
    <button class="btn-secondary btn-sm add-to-cart dis-btn" v-else disabled>Добавить</button>
  </div>
</template>

<script>
export default {
  props: {
    product: {}
  },
  methods: {
    checkIsAvailable: function() {
      let product = this.product;
      if (product.stock <= 0 || product.price <= 0 || !product.is_active) {
        return false;
      }
      return true;
    },
    addToCart: function() {
      this.$store.commit("addToCart", this.product);
    },

  }
};
</script>

<style scoped lang="css">
.air-types-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid blue;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 5px;
  margin-top: 12px;
  text-decoration: none;
  margin-right: 5px;
  width: 30%;
}

.air-types-item:hover {
  text-decoration: none;
}

.air-types-item__link {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.air-types-item__link:hover {
  text-decoration: none;
}

.item-img {
  position: relative;
  overflow-x: hidden;
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

.special-offer-badge_not-available {
  background-color: red;
  color: #ffffff;
}
.item-title {
  font-family: "Open Sans", sans-serif;
  font-weight: 100;
  color: #2b3130;
  width: 100%;
  word-break: break-all;
}

.item-description {
  font-size: 14px;
  margin-top: 10px;
  font-family: "Open Sans", sans-serif;
  color: #c3c3c3;
}

.add-to-cart {
  margin-top: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  color: #ffffff;
  background-color: #000;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s linear;
}

.add-to-cart:hover {
  background-color: #ccc;
  color: #000;
}

.dis-btn {
  cursor: default;
  background-color: #ccc;
  color: #c3c3c3;
}

@media screen and (max-width: 990px) {
  .air-types-item {
    width: 30%;
  }
}
@media screen and (max-width: 766px) {
  .air-types-item {
    width: 45%;
  }
}

@media screen and (max-width: 575px) {
  .air-types-item {
    width: 100%;
  }
}
</style>