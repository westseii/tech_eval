<script setup>
  import { useRoute } from "vue-router";

  import products from "@/temp/products.js";

  const route = useRoute();
  const { id } = route.params;
  let product;

  product = products.value[id];

  // events
  const userAddLike = () => products.value[id].likes++;
  const userRemoveLike = () => products.value[id].likes--;
</script>

<template>
  <section class="product">
    <h2>Product View</h2>

    <hr class="rule" />

    <div>
      <h3>{{ product.title }}</h3>
      <div>{{ product.description }}</div>
    </div>

    <div v-if="product.likes !== undefined">
      <br />
      <span>{{ product.likes }}</span>
      <button @click="userAddLike">Like</button>
      <button @click="userRemoveLike">Dislike</button>
    </div>

    <hr class="rule" />

    <button @click="$router.push('/main')">Back to Main View</button>
  </section>
</template>

<style scoped></style>
