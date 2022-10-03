<script setup>
  import { inject, onMounted, ref } from "vue";

  import ProductTab from "@/components/ProductTab.vue";

  // product prices are formatted in USD
  const formatter = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  });

  const products = ref();

  const getProducts = async () => {
    const response = await fetch(`${inject("api")}/products`, {
      method: "GET",
    });
    const json = await response.json();
    products.value = json.data.map((product) => {
      // only the necessary keys
      return {
        id: product.id,
        title: product.title,
        image: product.image,
        price: formatter.format(product.price),
      };
    });
  };

  onMounted(() => getProducts());
</script>

<template>
  <section class="main">
    <h2>Main View</h2>

    <p>
      The database is populated with different items and descriptions from a video game that I used
      to play.
    </p>

    <hr class="rule" />

    <ProductTab
      :key="product.id"
      :product-data="product"
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
