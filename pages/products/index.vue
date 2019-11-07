<template>
  <section class="container">
    <Header/>
    <div class="air-types">
      <h2 class="air-types-title">Виды воздуха</h2>
      <div class="air-types__container">
        <div class="air-types__items-container" v-if="products.length > 0">
          <CardItem :product="product" v-for="product in products" :key="product.id"/>
        </div>
        <div v-else>Loading</div>

        <Cart/>

      </div>
    </div>
  </section>
</template>

<script>
import Header from "~/components/Header.vue"
import CardItem from "~/components/CardItem.vue";
import Cart from "~/components/Cart.vue";
import { mapState } from "vuex";
import axios from 'axios';

export default {
  components: {
    CardItem,
    Cart,
    Header
  },
  data() {
    return {
      product: {}
    };
  },
  computed: {
    ...mapState(["products"])
  },
  mounted() {
    this.$store.dispatch('getApi');
  }
};
</script>

<style scoped>
.container {
  width: 1200px;
  margin: 0 auto;
}

.air-types {
  margin-top: 20px;
}

.air-types__container {
  display: flex;
  justify-content: space-around;
  position: relative;
  height: auto;
  min-height: 100% !important;
  /* flex-wrap: wrap; */
}

.air-types__items-container {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.air-types > .air-types-title {
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  font-weight: 100;
}

.air-types__items-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
@media screen and (max-width: 1200px) {
  .air-types__container {
    width: 100%;
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 575px) {
  .container {
    width: 100% !important;
  }
}
</style>
<!--
<style scoped>
  
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
-->