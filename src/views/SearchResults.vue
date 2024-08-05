<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Search Results for "{{ searchQuery }}"</h1>
    <SearchBar />
    <MovieList :movies="getSearchResults" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useMovieStore } from '../stores/movieStore';
import MovieList from '../components/MovieList.vue';
import SearchBar from '../components/SearchBar.vue';
import { storeToRefs } from 'pinia';

const route = useRoute();
const movieStore = useMovieStore();
const { getSearchResults } = storeToRefs(movieStore)

const searchQuery = computed(() => route.query.q);

onMounted(async () => {
  await movieStore.searchMovies(searchQuery.value as string);
});
</script>
