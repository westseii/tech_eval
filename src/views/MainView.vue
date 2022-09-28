<script setup>
  import products from "@/temp/products.js";

  import ProductTab from "@/components/ProductTab.vue";

  // product prices are preformatted before being passed as a prop (String)
  const formatter = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  });

  // const testVar = import.meta.env.VITE_TEST_VAR;
  // console.log(testVar);
</script>

<template>
  <section class="main">
    <h2>Main View</h2>

    <hr class="rule" />

    <!-- TODO: these component props are cumbersome; temporary solution -->
    <ProductTab
      :key="product.id"
      :product-id="product.id"
      :product-image="product.image"
      :product-price="formatter.format(product.price)"
      :product-title="product.title"
      class="product-tab"
      v-for="product in products"
    />
  </section>
</template>

<style scoped>
  .product-tab:nth-of-type(n + 2) {
    margin-top: 16px;
  }
</style>
