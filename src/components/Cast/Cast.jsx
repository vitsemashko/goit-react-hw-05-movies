import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getMovieCredits } from '../../servises/movieApi';
import defaultPoster from '../../image/poster.png';
import css from './Cast.module.css';

const Cast = () => {
  const BASE_URL = 'https://image.tmdb.org/t/p/w300';
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    async function fetchMoviecast() {
      try {
        const movieCast = await getMovieCredits(movieId);
        setMovieCast(movieCast);
      } catch (error) {
        toast(error.message);
      }
    }

    fetchMoviecast();
  }, [movieId]);
  if (!movieCast) {
    return;
  }
  return (
    <div>
      {movieCast.length === 0 && (
        <p style={{ padding: 50 }}>Sorry, no cast was found for this movie.</p>
      )}
      <ul className={css.castList}>
        {movieCast.map(cast => (
          <li className={css.castItem} key={cast.id}>
            <img
              className={css.castImage}
              src={
                cast.profile_path ? BASE_URL + cast.profile_path : defaultPoster
              }
              alt={cast.name}
            />
            <p className={css.castText}>{cast.name}</p>
            <p className={css.castText}>Character: {cast.character} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cast;
