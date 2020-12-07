import React from 'react'
import Search from '../blog/Search'

import './css/profile.css'


const SearchBar = () => {
    return (
        <React.Fragment>
            <div className="searchBarSection">
                <div className="searchBarContainer">
                    <Search/>
               </div>
            </div>
        </React.Fragment>
    )
}

export default SearchBar;