import React, { useState, useEffect } from 'react';

import './App.css';
import Header from './components/Header/Header';
import MovieSearch from './components/MovieSearch/MovieSearch';
import SearchBox from './components/SearchBox/SearchBox';
import AddFavourite from './components/Favourites/Favourites';

/*import classes from './MovieSearch.module.css'*/


const App = () => {
	const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=9eb462ba`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };
    
  return (
    <div>
      <div>
        <Header heading="Blockbusters"/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div>
        <MovieSearch movies= {movies} handleFavouritesClick={addFavouriteMovie} favouriteComponent={AddFavourite} />
      </div>
      <div>
        <Header heading="Favourites"/>
      </div>
      <div>
        <MovieSearch 
            movies= {favourites} 
            handleFavouritesClick={addFavouriteMovie} 
            favouriteComponent={AddFavourite} 
          />
      </div>
    </div>  
    
  );
};

export default App;