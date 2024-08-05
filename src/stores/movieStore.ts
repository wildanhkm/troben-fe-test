import { defineStore } from 'pinia';
import axios from 'axios';

const API_KEY = 'YOUR_OMDB_API_KEY';
const API_URL = 'https://www.omdbapi.com/';

export const useMovieStore = defineStore('movie', {
  state: () => ({
    popularMovies: [],
    movieDetails: null,
    searchResults: [],
    loading: false,
    error: null,
  }),
  getters: {
    getPopularMovies: (state) => { return state.popularMovies },
    getMovieDetails: (state) => { return state.movieDetails },
    getSearchResults: (state) => { return state.searchResults },
    getLoading: (state) => { return state.loading },
    getError: (state) => { return state.error },
  },
  actions: {
    async fetchPopularMovies() {
      this.loading = true;
      try {
        const response = await axios.get(`${API_URL}?apikey=${API_KEY}&s=2024&type=movie&y=2024`);
        this.popularMovies = response.data.Search;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    async fetchMovieDetails(id: string) {
      this.loading = true;
      try {
        const response = await axios.get(`${API_URL}?apikey=${API_KEY}&i=${id}`);
        this.movieDetails = response.data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    async searchMovies(query: string) {
      this.loading = true;
      try {
        const response = await axios.get(`${API_URL}?apikey=${API_KEY}&s=${query}`);
        this.searchResults = response.data.Search;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
});
