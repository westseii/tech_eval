<script setup>
  const props = defineProps({
    productTitle: {
      type: String,
      default: "Product Title",
    },
  });
</script>

<template>
  <div class="product-card">
    <div>{{ productTitle }}</div>
  </div>
</template>

<style scoped>
  .product-card {
    padding: 8px;
  }
  .product-card:hover {
    background: #fff;
  }
</style>
