<script setup>
  import { useRoute } from "vue-router";

  import products from "@/temp/products.js";

  import ProductCard from "@/components/ProductCard.vue";

  const route = useRoute();
  const { id } = route.params;
  let product = products.value[id];

  // events
  // temporary behavior
  const userLikeProduct = (id) => products.value[id].likes++;
  const userDislikeProduct = (id) => products.value[id].likes--;
</script>

<template>
  <section class="product">
    <h2>Product View</h2>

    <hr class="rule" />

    <ProductCard
      :product-data="product"
      @like="(id) => userLikeProduct(id)"
      @dislike="(id) => userDislikeProduct(id)"
      class="product-card"
    />

    <hr class="rule" />

    <button @click="$router.push('/main')">Back to Main View</button>
  </section>
</template>

<style scoped></style>
