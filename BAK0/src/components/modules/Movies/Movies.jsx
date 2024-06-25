import { useState, useEffect } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';

import MovieList from '../MovieList/MovieList';

import { getTrendingMovies } from '../../api/movies';

import css from './movies.module.css';

const Movies = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAPI = async () => {
      setLoading(true);
      try {
        const result = await getTrendingMovies(page);
        if (page === 1) {
          return setItems([...result.results]);
        }
        setItems(prevState => [...prevState, ...result.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAPI();
  }, [page]);

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
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
      {error && <p>Error</p>}
      {<MovieList items={items} />}
      {items.length > 0 && (
        <button
          type="button"
          onClick={onLoadMore}
          className={`btn ${css.loadMoreBtn}`}
        >
          Load more
        </button>
      )}
    </>
  );
};

export default Movies;
