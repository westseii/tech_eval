<script setup>
  import products from "@/temp/products.js";

  import ProductCard from "@/components/ProductCard.vue";
</script>

<template>
  <section class="main">
    <h2>Main View</h2>

    <hr class="rule" />

    <ProductCard
      :key="product.id"
      :product-title="product.title"
      v-for="product in products"
    />
  </section>
</template>

<style scoped></style>
