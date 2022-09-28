<script setup>
  const props = defineProps({
    productImage: {
      type: String,
      default: "http://dummyimage.com/107x100.png/dddddd/000000",
    },
    productTitle: {
      type: String,
      default: "Product Title",
    },
    productPrice: {
      type: String,
      default: "$2.99",
    },
  });
</script>

<template>
  <div class="product-tab">
    <img
      :alt="`Product image for ${productTitle}.`"
      :src="productImage"
      class="image"
    />

    <div class="details">
      <h3>{{ productTitle }}</h3>
      <div>{{ productPrice }}</div>
    </div>
  </div>
</template>

<style scoped>
  .product-tab {
    display: flex;
    overflow: auto;
    padding: 8px;
  }
  .product-tab:hover {
    background: #fff;
    box-shadow: 2px 4px 8px 0 var(--main-div-light);
    cursor: pointer;
  }

  .image {
    display: block;
  }

  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 8px;
  }
</style>
