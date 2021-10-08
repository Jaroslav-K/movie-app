import React from 'react';
import classes from './MovieSearch.module.css'

const MovieSearch = (props) => {
    return(
        <>
            <div className={classes.container}> 
                {props.movies.map((movie, index)=> (
                    
                    <div className={classes.imageWrapper}>
                        <img src={movie.Poster} alt='movie'></img>    
                    </div>
                        
                ))}
            </div>    
        </>    
    );
};

export default MovieSearch;