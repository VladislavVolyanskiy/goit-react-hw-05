import Movies from 'components/modules/Movies/Movies';

import css from './home-page.module.css';

const HomePage = () => {
  return (
    <div className="container">
      <h2 className={css.homePAgeTitle}>Trending today</h2>
      <Movies />
    </div>
  );
};

export default HomePage;
