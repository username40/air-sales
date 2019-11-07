<template>
  <section>
    <Header/>
    <div class="container">
      <div class="product-description">
        <img src="https://via.placeholder.com/300">
        <h3 class="item-title">Product name</h3>
        <p class="item-description">prduct stock</p>
        <p class="item-description">product description</p>
        <p>product price</p>
      </div>
      <Cart/>
    </div>

  </section>
</template>


<script>
import Header from "~/components/Header.vue";
import Cart from "~/components/Cart.vue";
import { mapState } from "vuex";
import axios from "axios";

export default {
  components: {
    Header,
    Cart
  },
  data() {
    return {
      product: {}
    };
  },
  computed: {
    ...mapState(["products"])
  },
  methods: {
    addToCart: function() {
      this.$store.commit("addToCart", this.product);
    }
  },
  created() {
    let id = this.$route.params.id;
  }
};
</script>


<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}

.cart {
  margin-top: 0;
  margin-left: 0;
}
</style>