// import { Suspense } from 'react/cjs/react.production.min';
import { Route, Switch } from 'react-router-dom';
import { NavBar } from './components/index';
// import HomePage from './pages/HomePage/HomePage.jsx';
// import MoviesPage from './pages/MoviesPage/MoviesPage.jsx';
// import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage.jsx';
import React, { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage.jsx'));
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage.jsx'),
);

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={HomePage} />

          <Route path="/movies" component={MoviesPage} />

          <Route>
            <MovieDetailsPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
