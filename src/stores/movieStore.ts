import { defineStore } from 'pinia';
import axios from 'axios';
import { MovieType, ErrorType } from '../types';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = 'https://www.omdbapi.com/';

export const useMovieStore = defineStore('movie', {
  state: () => ({
    popularMovies: [] as MovieType[],
    movieDetails: {} as MovieType,
    searchResults: [] as MovieType[],
    loading: false,
    error: '',
  }),
  getters: {
    getPopularMovies: (state) => {
      return state.popularMovies;
    },
    getMovieDetails: (state) => {
      return state.movieDetails;
    },
    getSearchResults: (state) => {
      return state.searchResults;
    },
    getLoading: (state) => {
      return state.loading;
    },
    getError: (state) => {
      return state.error;
    },
  },
  actions: {
    clearMovieDetails() {
      this.movieDetails = {} as MovieType;
    },

    clearSearchResults() {
      this.searchResults = [] as MovieType[];
    },
    
    async fetchPopularMovies() {
      this.loading = true;
      try {
        const response = await axios.get(`${API_URL}?apikey=${API_KEY}&s=2024&type=movie&y=2024`);
        this.popularMovies = response.data.Search;
      } catch (error) {
        const catchError = error as ErrorType;
        this.error = catchError.Error;
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
        const catchError = error as ErrorType;
        this.error = catchError.Error;
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
        const catchError = error as ErrorType;
        this.error = catchError.Error;
      } finally {
        this.loading = false;
      }
    },
  },
});
