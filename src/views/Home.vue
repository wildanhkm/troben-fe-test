<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Popular Movies in 2024</h1>
    <SearchBar />
    <LoadingSpinner v-if="getLoading" />
    <MovieList :movies="getPopularMovies" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useMovieStore } from '../stores/movieStore';
import { storeToRefs } from 'pinia';
import MovieList from '../components/MovieList.vue';
import SearchBar from '../components/SearchBar.vue';
import LoadingSpinner from '../components/LoadingSpinner.vue'

const movieStore = useMovieStore();
const { getPopularMovies, getLoading } = storeToRefs(movieStore);

onMounted(async () => {
  await movieStore.fetchPopularMovies();
});
</script>
