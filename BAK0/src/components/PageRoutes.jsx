import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviePage = lazy(() => import('./pages/MoviePage/MoviePage'));
const SingleMoviePage = lazy(() =>
  import('./pages/SingleMoviePage/SingleMoviePage')
);
const SingleMovieCreditsPage = lazy(() =>
  import('./pages/SingleMovieCreditsPage/SingleMovieCreditsPage')
);

const SingleMovieReviewsPage = lazy(() =>
  import('./pages/SingleMovieReviewsPage/SingleMovieReviewsPage')
);

const PageRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/movies/:id" element={<SingleMoviePage />}>
          <Route path="credits" element={<SingleMovieCreditsPage />} />
          <Route path="reviews" element={<SingleMovieReviewsPage />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default PageRoutes;
