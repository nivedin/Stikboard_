import React, { useEffect, useState } from 'react';
import { getCookie, isAuth } from '../../actions/auth';
import { API } from '../../config';
import { Img } from 'react-image'
import FollowProfileBtn from '../users/FollowProfile'
import { getAllUser } from '../../actions/user';

const SearchUser = () => {

    const [users, setUsers] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [searchFind, setSearchFind] = useState([]);


    const init = () => {
        getAllUser().then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                setUsers(data)
            }
        })
    }

    useEffect(() => {
        init()
    }, [])



    const myComponent = () => (
        <Img
            src='/images/blank-profile-picture.webp'
        />
    )

    const handleChange = (e) => {
        let currentSearchValue = e.target.value
        setSearchValue(currentSearchValue)
        if (currentSearchValue.length === 0) {
            setSearchFind("")
        } else {
            // users.users.filter(user => user.profile.includes(currentSearchValue)).map(filteredName => (
            //     setSearchFind(filteredName)
            // ))
            const results = users.users.filter(user =>
                user.username.toLowerCase().includes(currentSearchValue)
            );
            setSearchFind(results);

        }

    }
    const handleSubmit = (e) => {
        if (searchValue.length === 0) {
            setSearchFind("")
        } else {
            // users.users.filter(user => user.profile.includes(currentSearchValue)).map(filteredName => (
            //     setSearchFind(filteredName)
            // ))
            const results = users.users.filter(user =>
                user.username.toLowerCase().includes(searchValue)
            );
            setSearchFind(results);

        }
    }


    const showSearchBar = () => (
        <div className="userSearchBar" >
            <input type="search" placeholder="Search user" className="form-control" onChange={handleChange} value={searchValue} />
            <button onClick={handleSubmit}><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
            </svg></button>
        </div>

    )

    const showSearchResult = () => {

        // {searchFind.map((searchFindItem, i) => {
        //     return <li>{searchFindItem.name}</li>
        // })}
        if (searchFind.length === 0) {
            return ""
        } else {
            return (
                searchFind.map((searchFindItem, i) => {
                    // return <li>{searchFindItem.name}</li>
                    return <div key={i} className="userProfTabView">
                        <a href={`/profile/${searchFindItem.username}`}>
                            <p>
                                <span>
                                    <Img
                                        src={[`${API}/user/photo/${searchFindItem.username}`, "/images/blank-profile-picture.webp"]}
                                        unloader={myComponent}
                                        className="img img-fluid "
                                        style={{ height: '2.5rem', width: '2.5rem', borderRadius: '50%' }}
                                        alt="user profile"
                                    />
                                </span><span><span>{searchFindItem.username}</span><span>{searchFindItem.name}</span></span>
                            </p>
                        </a>
                    </div>
                })
            )
        }
        // searchFind.length === 0 ? "No result found" : {searchFind.map((searchFindItem, i) => {
        //     <li>{searchFindItem.name}</li>
        // })} 
    }

    // console.log(users.users);
    console.log("searchValue", searchValue);
    console.log("searchFind", searchFind);
    return (
        <div className="userSearch">
            {showSearchBar()}
            {showSearchResult()}
        </div>
    )

}

export default SearchUser;