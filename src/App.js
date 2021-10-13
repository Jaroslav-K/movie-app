import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"

import { Modal } from "antd"
import "antd/dist/antd.css"

import Header from "./components/Header/Header"
import MovieSearch from "./components/MovieSearch/MovieSearch"
import SearchBox from "./components/SearchBox/SearchBox"
import AddFavourite from "./components/Favourites/Favourites"
import FavouritesPage from "./pages/FavouritesPage"
import RemoveFavourites from "./components/Favourites/RemoveFavourites"
import Loader from "./components/Loader/Loader"
import MovieDetail from "./components/MovieDetail/MovieDetail"

import "./App.css"

/*import classes from './MovieSearch.module.css'*/

function App() {
  const [movies, setMovies] = useState([])
  const [favourites, setFavourites] = useState([])
  const [searchValue, setSearchValue] = useState("")

  const [activateModal, setActivateModal] = useState(false)
  const [detail, setShowDetail] = useState(false)
  const [detailRequest, setDetailRequest] = useState(false)

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=9eb462ba`

    const response = await fetch(url)
    const responseJson = await response.json()

    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue])

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    )
    if (movieFavourites) {
      setFavourites(movieFavourites)
    }
  }, [])

  const saveToBrowserStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items))
  }

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie]
    const favouriteExists = favourites.filter(
      (fav) => fav.imdbID === movie.imdbID
    )

    if (favouriteExists.length === 0) {
      setFavourites(newFavouriteList)
      saveToBrowserStorage(newFavouriteList)
    }
  }

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    )
    setFavourites(newFavouriteList)
    saveToBrowserStorage(newFavouriteList)
  }

  return (
    <Switch>
      <Route path="/" exact>
        {/* <div> */}
        <div>
          <Header heading="Blockbusters" />
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div>
          <MovieSearch
            movies={movies}
            handleFavouritesClick={addFavouriteMovie}
            favouriteComponent={AddFavourite}
            ShowDetail={setShowDetail}
            DetailRequest={setDetailRequest}
            ActivateModal={setActivateModal}
          />
        </div>
        <div>
          <Modal
            title="Detail"
            centered
            visible={activateModal}
            onCancel={() => setActivateModal(false)}
            footer={null}
            width={800}
          >
            {detailRequest === false ? <MovieDetail {...detail} /> : <Loader />}
          </Modal>
        </div>
      </Route>
      <Route path="/favourites">
        <div>
          <Header heading="Favourites" />
        </div>
        <div>
          <FavouritesPage
            favourites={favourites}
            addFavouriteMovie={removeFavouriteMovie}
            AddFavourite={RemoveFavourites}
            ShowDetail={setShowDetail}
            DetailRequest={setDetailRequest}
            ActivateModal={setActivateModal}
            // isDisplayed={activateModal}
            // data={detail}
            // detailRequest = {detailRequest}
          />
        </div>
      </Route>
      {/* </div>  */}
    </Switch>
  )
}

export default App
