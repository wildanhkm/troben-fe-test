<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div v-for="movie in movies" :key="movie.imdbID" class="bg-white rounded-lg shadow-md overflow-hidden">
      <router-link :to="{ name: 'MovieDetail', params: { id: movie.imdbID } }">
        <img :src="movie.Poster" :alt="movie.Title" class="w-full h-64 object-cover">
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">{{ movie.Title }}</h2>
          <p class="text-gray-600">{{ movie.Year }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, withDefaults } from 'vue';
import { MovieType } from '../types';

const props = withDefaults(
  defineProps<{
    movies: MovieType[]
  }>(),
  {
    movies: () => {
      return [] as MovieType[]
    }
  }
)

onMounted(() => {
  console.log('props :>> ', props);
})
</script>