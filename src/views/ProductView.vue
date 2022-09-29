<script setup>
  import { inject, onMounted, ref } from "vue";
  import { useRoute } from "vue-router";

  import ProductCard from "@/components/ProductCard.vue";

  const route = useRoute();
  const { id } = route.params;
  const product = ref();

  const getProductById = async () => {
    const response = await fetch(`${inject("api")}/product/${id}`, {
      method: "GET",
    });
    const json = await response.json();
    product.value = json.data;
  };

  onMounted(() => getProductById());

  // events
  const userLikeProduct = (id) => console.log(`Liked: ${id}`);
  const userDislikeProduct = (id) => console.log(`Disliked: ${id}`);
</script>

<template>
  <section class="product">
    <h2>Product View</h2>

    <hr class="rule" />

    <!-- TODO: fix component load popping -->
    <ProductCard
      :product-data="product"
      @dislike="(id) => userDislikeProduct(id)"
      @like="(id) => userLikeProduct(id)"
      class="product-card"
      v-if="product"
    />

    <hr class="rule" />

    <button @click="$router.push('/main')">Back to Main View</button>
  </section>
</template>

<style scoped></style>
