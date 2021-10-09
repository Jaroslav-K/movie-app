import React from "react"
import MovieSearch from "../components/MovieSearch/MovieSearch"

const FavouritesPage = (props) => {
  return (
    <>
      <MovieSearch
        movies={props.favourites}
        handleFavouritesClick={props.addFavouriteMovie}
        favouriteComponent={props.AddFavourite}
      />
    </>
  )
}

export default FavouritesPage;
