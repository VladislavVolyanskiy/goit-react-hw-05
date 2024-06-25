import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import css from './movie-search-form.module.css';

const MovieSearchForm = ({ onSubmit }) => {
  const [state, setState] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setState(value);
  };

  useEffect(() => {
    if (state) {
      setState(state);
    }
  }, [state]);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);

    // we won't flush queue text
    // setState('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        className={css.form__input}
        name="search"
        value={state}
        onChange={handleChange}
        placeholder="Type movie name"
        required
      />
      <button type="submit" className={`btn ${css.form__btn}`}>
        Find
      </button>
    </form>
  );
};

export default MovieSearchForm;

MovieSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
