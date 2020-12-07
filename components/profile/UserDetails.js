import React from 'react'
import { API, APP_NAME } from '../../config';
import { useState, useEffect } from 'react';
import { getCookie, isAuth } from '../../actions/auth'
import { getProfile, userPublicProfile } from '../../actions/user';
import Link from 'next/link'

import { Img } from 'react-image'

import './css/profile.css'


const UserDetails = ({ user, blogs, query }) => {

    const [values, setValues] = useState({
        username: '',
        username_for_photo: '',
        name: '',
        email: '',
        about: '',
        password: '',
        error: false,
        success: false,
        loading: false,
        photo: '',
        userData: process.browser && new FormData()
    });

    const [allBlogs, setBlogs] = useState([])

    const token = getCookie('token');

    const {
        username,
        username_for_photo,
        name,
        email,
        about,
        password,
        error,
        success,
        loading,
        photo,
        userData
    } = values;

    const init = () => {
        getProfile(token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    username: data.username,
                    username_for_photo: data.username,
                    name: data.name,
                    email: data.email,
                    about: data.about
                });
            }
        });


    };

    useEffect(() => {
        init();
        setValues({ values });
    }, []);


    useEffect(() => {
        let usernameForNow = isAuth().username
        userPublicProfile(usernameForNow).then(data => {
            // console.log(data);
            if (data.error) {
                console.log(data.error);
            }
            else {
                setBlogs(data.blogs)
            }
        })

    }, []);


    const myComponent = () => (
        <Img
            src='/images/blank-profile-picture.webp'
        />
    )

    // { console.log(blogs); }

    const showUserBlogs = () => {
        return allBlogs.map((blog, i) => {
            return (
                <div className="mt-4 mb-4" key={i}>
                    <Link href={`/blogs/${blog.slug}`}>
                        <a className="lead">
                            {blog.title}
                        </a>
                    </Link>
                </div>
            )

        })

    }
    return (
        <React.Fragment>
            <div className="userDetailContent">
                <div className="userProfileTop">
                    <div className="userTopContainer">
                        <div className="userProfilePhoto">
                            <Img
                                src={[`${API}/user/photo/${username}`, "/images/blank-profile-picture.webp"]}
                                unloader={myComponent}
                            />
                        </div>
                        <div className="userProfileRatingConnections">
                            <p className="userRating">7.1</p>
                            <p className="userConnections">564</p>
                        </div>
                    </div>
                </div>
                <div className="userProfBottom">
                    <div className="nameEditCont">
                        <p className="userName">{username}</p>
                        <p className="editProfile">Edit Profile</p>
                    </div>
                    <div className="userAbout">
                        <p>{about}</p>
                    </div>
                    <p className="joinedDate">05/12/20202</p>
                </div>
                {/* {showUserBlogs()} */}
            </div>
        </React.Fragment>
    )
}

// UserDetails.getInitialProps = () => {
//     return userPublicProfile(username).then(data => {
//         console.log(data);
//         if (data.error) {
//             console.log(data.error);
//         }
//         else {
//             //console.log(data);
//             return { user: data.user, blogs: data.blogs, query }
//         }
//     })
// }

export default UserDetails;