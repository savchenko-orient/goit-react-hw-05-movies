import { lazy, Suspense } from 'react';

import { Routes, Route, NavLink } from 'react-router-dom';
import { NotFound } from './NotFound/NotFound';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {

  return (
    <>
      <nav >
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Suspense fallback={<p>Load page...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
