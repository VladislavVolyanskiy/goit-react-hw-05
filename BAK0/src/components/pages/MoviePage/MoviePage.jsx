import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MagnifyingGlass } from 'react-loader-spinner';

import css from './movie-page.module.css';

import MovieSearchForm from 'components/modules/MovieSearchForm/MovieSearchForm';
import MovieList from 'components/modules/MovieList/MovieList';

import { getSearchMovie } from 'components/api/movies';

const MoviePage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query');

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const { results } = await getSearchMovie(search);
        if (results.length === 0) {
          setNoResults(true);
        }
        setItems([...results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (search) {
      fetchMovie();
    }
  }, [search]);

  const reset = () => {
    setItems([]);
    setError(null);
    setNoResults(false);
  };

  const changeSearch = search => {
    reset();
    setSearchParams({ query: search });
  };

  return (
    <div className="container">
      <h2 className={css.moviePage__title}>Search movie</h2>
      <MovieSearchForm onSubmit={changeSearch} />
      {items.length > 0 && <MovieList items={items} />}
      {noResults && (
        <p className={css.noResults__text}>
          We don't have any movies for <b>{search}</b>
        </p>
      )}
      {loading && (
        <div className="loading__container">
          <MagnifyingGlass
            height="120"
            width="120"
            color="#f36721"
            glassColor="#ffffff"
          />
        </div>
      )}
      {error && <p>Oops. Something goes wrong. Please try again.</p>}
    </div>
  );
};

export default MoviePage;
