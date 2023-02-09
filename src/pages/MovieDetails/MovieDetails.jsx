import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { toast } from 'react-toastify';

import GoBack from '../../components/GoBack/GoBack';
import { getMovieDetails } from '../../servises/movieApi';
import Loader from '../../components/Loader/Loader';

import defaultPoster from '../../image/poster.png';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w400';

  const location = useLocation();
  const goBack = location.state?.from ?? '/';

  const { movieId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const movieDetails = await getMovieDetails(movieId);
        setDetails(movieDetails);
      } catch (error) {
        toast(error.message);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  return (
    <main>
      <GoBack to={goBack}>Go back</GoBack>
      <div className={css.Wrapper}>
        <img
          className={css.Image}
          src={
            details.poster_path
              ? `${BASE_IMG_URL}` + details.poster_path
              : defaultPoster
          }
          alt={details.title || details.name}
        />
        <div>
          <h2 className={css.Title}>
            {details.title} (
            {details.release_date
              ? details.release_date.slice(0, 4)
              : ' No year'}
            )
          </h2>
          <p className={css.Text}>
            User Score:{' '}
            {details.vote_average
              ? Math.floor(details.vote_average * 10).toFixed(0)
              : ''}
            %
          </p>
          <h3 className={css.TitleOverview}> Overview</h3>
          <p className={css.Text}>{details.overview}</p>
          <h3 className={css.TitleOverview}>Genres</h3>
          <p className={css.Text}>
            {details.genres
              ? details.genres.map(genre => genre.name).join(' ')
              : 'Sorry genre not found.'}
          </p>
        </div>
      </div>
      <div className={css.Inform}>
        <h2 className={css.Title}>Additional information</h2>
        <ul>
          <li className={css.Item}>
            <Link to="cast" state={{ from: goBack }}>
              Cast
            </Link>
          </li>
          <li className={css.Item}>
            <Link to="reviews" state={{ from: goBack }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
