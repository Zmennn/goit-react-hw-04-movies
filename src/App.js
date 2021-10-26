import { HomePage, NavBar, MoviesPage } from './components/index';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />

      <Route path="/" exact component={HomePage} />

      <Route path="/movies" component={MoviesPage} />
    </>
  );
}

export default App;
