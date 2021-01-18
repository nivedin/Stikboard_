import React from 'react'
import UserSinglePost from './UserSinglePost'
import { API, APP_NAME } from '../../config';
import { useState, useEffect } from 'react';
import { getCookie, isAuth } from '../../actions/auth'
import { getProfile, userPublicProfile } from '../../actions/user';
import Loader from '../Loader'
import './css/profile.css'



const UserPosts = () => {

    const [allBlogs, setBlogs] = useState([])
    const [loading,isLoading] = useState(true)


    useEffect(() => {
        let usernameForNow = isAuth().username
        userPublicProfile(usernameForNow).then(data => {
            if (data.error) {
                console.log(data.error);
            }
            else {
                isLoading(false)
                setBlogs(data.blogs)
            }
        })

    }, []);

    const showAllBlogs = () => {
        if (allBlogs.length != 0) {
            if(loading){
                return <Loader/>
            }else{
             return allBlogs.sort((a, b) => b.createdAt > a.createdAt ? 1 : -1).map((blog, i) => {
                 return (
                     <React.Fragment>
                         <UserSinglePost blog={blog} key={i} />
                     </React.Fragment>
                 )
     
             })
            }
        }
        else{
                if(loading){
                    return <Loader/>
                }else{
                    <p>Start</p>
                }
        }

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