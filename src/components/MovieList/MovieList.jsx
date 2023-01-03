import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
	const location = useLocation();

	return (
		<ul className={css.movieList}>
			{movies.map((movie) => (
				<li className={css.movieListItem} key={movie.id}>
					<Link to={`/movies/${movie.id}`} state={{ from: location }}>
						{movie.title}
					</Link>
				</li>
			))}
		</ul>
	);
};

MovieList.propTypes = {
	movies: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
		})
	).isRequired,
};
export default MovieList;
