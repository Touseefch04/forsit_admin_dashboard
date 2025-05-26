<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold text-primary" href="#">Admin Dashboard</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/inventory">Inventory</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/add-product">Add Product</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container my-4">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>