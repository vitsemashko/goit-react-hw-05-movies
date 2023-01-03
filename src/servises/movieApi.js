import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "39f90a74d7e7bd41ea5263b14ea99d63";

axios.defaults.baseURL = BASE_URL;

export async function getMoviesTrending() {
	try {
		const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
		if (response.data.results.length === 0) {
			throw Error("Sorry, but nothing was found for your request!");
		}
		return response.data.results;
	} catch (error) {
		if (error.request || error.response) {
			throw Error("Sorry, something went wrong, please try again!");
		} else {
			throw error;
		}
	}
}

export async function getMoviesSearch(query) {
	try {
		const response = await axios.get(
			`/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false`
		);
		if (!response.data.results.length) {
			throw Error("Sorry, no movies were found for your request!");
		}
		return response.data.results;
	} catch (error) {
		if (error.request || error.response) {
			throw Error("Sorry, something went wrong, please try again!");
		} else {
			throw error;
		}
	}
}

export async function getMovieCredits(movieId) {
	try {
		const response = await axios.get(
			`/movie/${movieId}/credits?api_key=${API_KEY}`
		);
		if (!response.data.cast.length) {
			throw Error("Sorry, no casts were found for your request!");
		}
		return response.data.cast;
	} catch (error) {
		if (error.request || error.response) {
			throw Error("Sorry, something went wrong, please try again!");
		} else {
			throw error;
		}
	}
}

export async function getMovieDetails(movieId) {
	try {
		const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
		if (response.data.length === 0) {
			throw Error("Sorry, no movies were found for your request!");
		}
		return response.data;
	} catch (error) {
		if (error.request || error.response) {
			throw Error("Sorry, something went wrong, please try again!");
		} else {
			throw error;
		}
	}
}

export async function getMovieReviews(movieId) {
	try {
		const response = await axios.get(
			`/movie/${movieId}/reviews?api_key=${API_KEY}`
		);
		if (!response.data.results.length) {
			throw Error("Sorry, no reviews were found for your request!");
		}
		return response.data.results;
	} catch (error) {
		if (error.request || error.response) {
			throw Error("Sorry, something went wrong, please try again!");
		} else {
			throw error;
		}
	}
}
