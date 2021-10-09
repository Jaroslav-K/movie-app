import React from "react"
import classes from "./Favourites.module.css"

const AddFavourite = () => {
  return (
    <>
      <span className={classes.addToFavourites}></span>
      <i class="fas fa-star">I am into it. &#11088;</i>
    </>
  )
}

export default AddFavourite;
