<template>

    <section class="main-page">
        <Header />
    <div class="container"><a href="products" class="link-to-products"><h4 class="link-to-products">Продукты</h4></a></div>
    
    </section>




</template>


<script>
import Header from "~/components/Header.vue";

export default {
    components: {
        Header
    }
}
</script>


<style>
.link-to-products {
    text-decoration: underline;
    color: #000
}
</style>
