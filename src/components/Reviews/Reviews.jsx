import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { getMovieReviews } from '../../servises/movieApi';

import css from './Reviews.module.css';
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        const movieReviews = await getMovieReviews(movieId);

        setReviews(movieReviews);
      } catch (error) {
        toast(error.message);
      }
    }

    fetchMovieReviews();
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <div>
      {reviews.length === 0 && (
        <p style={{ padding: 50 }}>
          Sorry, no reviews were found for this movie.
        </p>
      )}
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h2 className={css.reviewsTitle}>Author: {review.author}</h2>
            <p className={css.reviewsText}> {review.content} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
