import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import { BASE_URL } from './utils/urls';

export const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setList(data.results));
  }, []);

  const [detail, setDetail] = useState([]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <MovieList movies={list} />} />
        <Route exact path='/details/:movieId' component={MovieDetails}>
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
