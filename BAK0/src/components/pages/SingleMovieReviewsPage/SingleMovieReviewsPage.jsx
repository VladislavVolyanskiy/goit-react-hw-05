import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProgressBar } from 'react-loader-spinner';

import css from './single-movie-reviews-page.module.css';

import { getSingleMovieReviews } from 'components/api/movies';

const SingleMovieReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchCredits = async () => {
      setLoading(true);
      try {
        const { results } = await getSingleMovieReviews(id);
        setReviews([...results]);
        if (!results.length) {
          setNoResults(true);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCredits();
  }, [id]);

  const elements = reviews.map(({ id, author, content }) => (
    <li key={id} className={css.review__item}>
      <p className={css.review__author}>
        Author: <b>{author}</b>
      </p>
      <p className={css.review__content}>{content}</p>
    </li>
  ));

  return (
    <>
      {loading && (
        <div className="loading__container__reviews_cast">
          <ProgressBar
            height="120"
            width="120"
            borderColor="#f36721"
            barColor="#B9B9B9"
          />
        </div>
      )}
      {error && <p>Oops. Something goes wrong. Please try again.</p>}
      {noResults && (
        <p className={css.no__reviews}>There is no reviews for this movie.</p>
      )}
      <ul className={css.review__list}>{elements}</ul>
    </>
  );
};

export default SingleMovieReviewsPage;
