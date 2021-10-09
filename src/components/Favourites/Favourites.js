import React from 'react';
import classes from './Favourites.module.css'


const AddFavourite = () => {
    return (
        <>
           <span className={classes.addToFavourites}></span> 
           <i class="fas fa-star">Add to Favourites	&#11088;</i>
        </>
    )
}

export default AddFavourite;