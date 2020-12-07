import React from 'react'
import UserSinglePost from './UserSinglePost'
import { API, APP_NAME } from '../../config';
import { useState, useEffect } from 'react';
import { getCookie, isAuth } from '../../actions/auth'
import { getProfile, userPublicProfile } from '../../actions/user';
import './css/profile.css'



const UserPosts = () => {

    const [allBlogs, setBlogs] = useState([])


    useEffect(() => {
        let usernameForNow = isAuth().username
        userPublicProfile(usernameForNow).then(data => {
            if (data.error) {
                console.log(data.error);
            }
            else {
                setBlogs(data.blogs)
            }
        })

    }, []);

    const showAllBlogs = () => {
        if (allBlogs.length === 0) {
            return (
                <h1>Start creating</h1>
            )
        }
        return allBlogs.map((blog, i) => {
            return (
                <React.Fragment>
                    <UserSinglePost blog={blog} key={i} />
                </React.Fragment>
            )

        })

    }

    return (
        <React.Fragment>
            <div className="userPostContainer">
                {showAllBlogs()}
            </div>
        </React.Fragment>
    )
}

export default UserPosts;