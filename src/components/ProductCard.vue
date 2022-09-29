<script setup>
  const props = defineProps({
    productData: {
      type: Object,
      required: true,
    },
  });

  const emit = defineEmits(["like", "dislike"]);

  // product prices are formatted in USD
  const formatter = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  });

  // events
  // temporary behavior
  const userLike = () => emit("like", props.productData.id);
  const userDislike = () => emit("dislike", props.productData.id);
</script>

<template>
  <div class="product-card">
    <div class="image-container">
      <img
        :alt="`Product image for ${productData.title}.`"
        :src="productData.image"
        class="image"
      />
    </div>

    <div class="content">
      <div>
        <h3>{{ productData.title }}</h3>
        <p>{{ formatter.format(productData.price) }}</p>
        <p>{{ productData.description }}</p>

        <hr class="rule-sm" />
      </div>

      <div class="likes-container">
        <span>{{ productData.likes }}&nbsp;</span>
        <button @click="userLike">Like</button>
        <button @click="userDislike">Dislike</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .product-card {
    align-items: center;
    display: flex;
  }

  .image-container {
    width: 256px;
  }
  .image {
    color: var(--main-div-light);
    width: 100%;
  }

  .content {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 8px;
    width: 512px;
  }

  .likes-container {
    align-self: flex-end;
  }
</style>
