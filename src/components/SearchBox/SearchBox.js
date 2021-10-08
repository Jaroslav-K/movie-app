import React from 'react';
import classes from './SearchBox.module.css'

const SearchBox= (props) => {
    return  (
        <div>
            <input 
                className={classes.Box} 
                value={props.value} 
                onChange={(event)=> props.setSearchValue(event.target.value)}
                placeholder="Type to search">

            </input>
        </div>
    )
}

export default SearchBox;