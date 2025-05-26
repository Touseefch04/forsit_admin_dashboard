<template>
  <div class="p-6 max-w-xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Add New Product</h1>

    <form @submit.prevent="submitProduct" class="space-y-4 bg-white p-6 rounded shadow">
      <div>
        <label class="block font-semibold">Product Name</label>
        <input v-model="product.name" type="text" required class="w-full border p-2 rounded" />
      </div>

      <div>
        <label class="block font-semibold">Description</label>
        <textarea v-model="product.description" required class="w-full border p-2 rounded"></textarea>
      </div>

      <div>
        <label class="block font-semibold">Price ($)</label>
        <input v-model.number="product.price" type="number" step="0.01" required class="w-full border p-2 rounded" />
      </div>

      <div>
        <label class="block font-semibold">Initial Stock</label>
        <input v-model.number="product.stock" type="number" required class="w-full border p-2 rounded" />
      </div>

      <div>
        <label class="block font-semibold">Product Image Name</label>
        <input v-model="product.image" type="text" placeholder="e.g. image.jpg" class="w-full border p-2 rounded" />
        <p class="text-sm text-gray-500">* Just the image name for now (mocked)</p>
      </div>

      <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Add Product
      </button>
    </form>

    <p v-if="successMessage" class="mt-4 text-green-600">{{ successMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      product: {
        name: '',
        description: '',
        price: 0,
        stock: 0,
        image: '',
      },
      successMessage: '',
    };
  },
  methods: {
    async submitProduct() {
      try {
        await axios.post('http://localhost:5000/api/products', this.product);
        this.successMessage = 'Product added successfully!';
        this.product = { name: '', description: '', price: 0, stock: 0, image: '' };
      } catch (error) {
        alert('Failed to add product.');
      }
    },
  },
};
</script>