<template>
  <div class="border rounded-lg p-4 shadow hover:shadow-lg transition">
    <img
      :src="`/images/${product.image}`"
      alt="Product image"
      class="w-full h-48 object-cover rounded mb-3"
    />
    <h2 class="text-lg font-semibold">{{ product.name }}</h2>
    <p class="text-gray-600 text-sm mb-2">{{ product.description }}</p>
    <p class="text-blue-600 font-bold mb-2">${{ product.price.toFixed(2) }}</p>
    <p class="text-sm text-gray-700">Stock: {{ product.stock }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>