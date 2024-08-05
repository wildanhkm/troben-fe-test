<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-blue-600 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <router-link to="/" class="text-2xl font-bold">IMDB Movie App</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<!-- <script>
export default {
  name: 'App'
}
</script> -->