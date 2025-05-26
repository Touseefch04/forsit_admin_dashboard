<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Inventory Management</h1>

    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search products..."
      class="mb-4 p-2 border rounded w-full md:w-1/2"
    />

    <table class="w-full bg-white rounded shadow text-left">
      <thead class="bg-gray-100">
        <tr>
          <th class="p-3">Name</th>
          <th class="p-3">Description</th>
          <th class="p-3">Price</th>
          <th class="p-3">Stock</th>
          <th class="p-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in filteredProducts"
          :key="product.id"
          class="border-t hover:bg-gray-50"
        >
          <td class="p-3">{{ product.name }}</td>
          <td class="p-3">{{ product.description }}</td>
          <td class="p-3">${{ product.price.toFixed(2) }}</td>
          <td class="p-3">
            <input
              type="number"
              v-model.number="product.stock"
              class="w-20 p-1 border rounded"
            />
          </td>
          <td class="p-3">
            <button
              @click="updateStock(product)"
              class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Save
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
      searchQuery: '',
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter((p) =>
        p.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  async mounted() {
    const res = await axios.get('http://localhost:5000/api/products');
    this.products = res.data;
  },
  methods: {
    async updateStock(product) {
      try {
        await axios.put(`http://localhost:5000/api/products/${product.id}`, {
          stock: product.stock,
        });
        alert('Stock updated successfully!');
      } catch (err) {
        alert('Failed to update stock.');
      }
    },
  },
};
</script>
