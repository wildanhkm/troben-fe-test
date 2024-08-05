<template>
  <div v-if="getMovieDetails" class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row">
      <img
        :src="getMovieDetails.Poster"
        :alt="getMovieDetails.Title"
        class="w-full md:w-1/3 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-8"
      />
      <div>
        <h1 class="text-3xl font-bold mb-4">{{ getMovieDetails.Title }}</h1>
        <p class="text-gray-600 mb-2">{{ getMovieDetails.Year }} | {{ getMovieDetails.Runtime }}</p>
        <p class="text-gray-600 mb-4">{{ getMovieDetails.Genre }}</p>
        <p class="mb-4">{{ getMovieDetails.Plot }}</p>
        <p><strong>Director:</strong> {{ getMovieDetails.Director }}</p>
        <p><strong>Writers:</strong> {{ getMovieDetails.Writer }}</p>
        <p><strong>Actors:</strong> {{ getMovieDetails.Actors }}</p>
        <p><strong>IMDb Rating:</strong> {{ getMovieDetails.imdbRating }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useMovieStore } from '../stores/movieStore';
import { storeToRefs } from 'pinia';

const route = useRoute();
const movieStore = useMovieStore();
const { getMovieDetails } = storeToRefs(movieStore);

onMounted(async () => {
  await movieStore.fetchMovieDetails(route.params.id as string);
});
</script>
