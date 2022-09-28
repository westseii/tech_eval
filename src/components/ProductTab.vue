<script setup>
  const props = defineProps({
    productId: {
      type: Number,
      default: 0,
    },
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
  <div
    @click="$router.push(`/product/${productId}`)"
    class="product-tab"
  >
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
    border-radius: 8px;
    display: flex;
    max-width: 512px;
    padding: 8px;
  }
  .product-tab:hover {
    background: #fff;
    box-shadow: 2px 4px 8px 0 var(--main-div-light);
    cursor: pointer;
  }

  .image {
    color: var(--main-div-light);
    display: block;
    width: 128px;
  }

  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 8px;
  }
</style>
