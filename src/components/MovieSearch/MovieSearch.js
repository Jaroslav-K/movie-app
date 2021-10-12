import React, { useState, useEffect } from "react"
import classes from "./MovieSearch.module.css"
import { Card } from "antd"
import "antd/dist/antd.css"

const MovieSearch = (props) => {
  const FavouriteComponent = props.favouriteComponent

  const clickHandler = (movie) => {
    // Display Modal and Loading Icon
    props.ActivateModal(true)
    props.DetailRequest(true)

    fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=9eb462ba`)
      .then((resp) => resp)
      .then((resp) => resp.json())
      .then((response) => {
        props.DetailRequest(false)
        props.ShowDetail(response)
      })
      .catch(({ message }) => {
        props.DetailRequest(false)
      })
  }

  return (
    <>
      <div className={classes.container}>
        {props.movies.map((movie, index) => (
          <div className={classes.imageWrapper}>
            <img
              src={movie.Poster}
              alt={movie.Title}
              onClick={() => clickHandler(movie)}
            ></img>

            <div
              onClick={() => props.handleFavouritesClick(movie)}
              className={classes.favorites}
            >
              <FavouriteComponent />
            </div>
            {/* }) */}
          </div>
        ))}
      </div>
    </>
  )
}

export default MovieSearch
