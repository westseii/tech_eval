<script setup>
  const props = defineProps({
    productData: {
      type: Object,
      required: true,
    },
  });
</script>

<template>
  <div
    @click="$router.push(`/product/${productData.id}`)"
    class="product-tab"
  >
    <img
      :alt="`Product image for ${productData.title}.`"
      :src="productData.image"
      class="image"
    />

    <div class="details">
      <h3>{{ productData.title }}</h3>
      <div>{{ productData.price }}</div>
    </div>
  </div>
</template>

<style scoped>
  .product-tab {
    background: var(--main-elevated-light);
    border-radius: 8px;
    box-shadow: 1px 2px 4px 0 var(--main-div-light);
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
