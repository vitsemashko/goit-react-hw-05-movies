import { useEffect, useState } from "react";
import { getMoviesTrending } from "../../servises/movieApi";
import { toast } from "react-toastify";

import MovieList from "../../components/MovieList/MovieList";

import css from "./Home.module.css";

const Home = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchMovies() {
			try {
				const movies = await getMoviesTrending();
				setMovies(movies);
			} catch (error) {
				toast(error.message);
			}
		}
		fetchMovies();
	}, []);

	return (
		<main>
			<h1 className={css.Title}>Trending today</h1>
			<MovieList movies={movies} />
		</main>
	);
};

export default Home;
