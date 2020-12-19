import React from 'react'
import Search from '../blog/Search'
import SearchUser from '../users/SearchUser'

import './css/profile.css'


const SearchBar = () => {
    return (
        <React.Fragment>
            <div className="searchBarSection">
                <div className="searchBarContainer">
                    <SearchUser/>
               </div>
            </div>
        </React.Fragment>
    )
}

export default SearchBar;