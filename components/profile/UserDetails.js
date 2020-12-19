import React from 'react'
import { API, APP_NAME } from '../../config';
import { useState, useEffect } from 'react';
import { getCookie, isAuth } from '../../actions/auth'
import { getProfile, userPublicProfile } from '../../actions/user';
import Link from 'next/link'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { Img } from 'react-image'

import './css/profile.css'


const UserDetails = () => {

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
   
    const [usernameForNow,setUsernameForNow] = useState("")
    const [allFollow, setFollow] = useState({
        allFollowings:[],
        allFollowers:[],
    })

    const {allFollowings,allFollowers} = allFollow;

    const [modal1, setModal1] = useState(false);
    const toggle1 = () => setModal1(!modal1);

    const [modal2, setModal2] = useState(false);
    const toggle2 = () => setModal2(!modal2);

    const token = getCookie('token');

    const {
        username,
        username_for_photo,
        name,
        email,
        about,
        followers,
        followings,
        password,
        error,
        success,
        loading,
        photo,
        userData
    } = values;


    const init = () => {
         
        setUsernameForNow(isAuth().username)
        getProfile(token).then(data => {
            console.log(data);
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    username: data.username,
                    username_for_photo: data.username,
                    name: data.name,
                    email: data.email,
                    about: data.about,
                    followers:data.followers,
                    followings:data.following
                });
            }
        });

        userPublicProfile(isAuth().username).then(data => {
            // console.log(data);
            if (data.error) {
                console.log(data.error);
            }
            else {
                setBlogs(data.blogs)
                setFollow({
                    allFollowers:data.user.followers,
                    allFollowings:data.user.following
                })
            }
        })
    };

    console.log("allFollow",allFollowers,allFollowings);

    useEffect(() => {
        init();
        setValues({ values });
       
    }, []);


    

    const myComponent = () => (
        <Img
            src='/images/blank-profile-picture.webp'
        />
    )
    const showProfileImage = () => (
        <Img
        src={[`${API}/user/photo/${usernameForNow}`, "/images/blank-profile-picture.webp"]}
        unloader={myComponent}
        alt="user profile"
    />
    )

    // { console.log(blogs); }

    // const showUserBlogs = () => {
    //     return allBlogs.map((blog, i) => {
    //         return (
    //             <div className="mt-4 mb-4" key={i}>
    //                 <Link href={`/blogs/${blog.slug}`}>
    //                     <a className="lead">
    //                         {blog.title}
    //                     </a>
    //                 </Link>
    //             </div>
    //         )

    //     })

    // }

    const showAllFollowers = () => {
        if (allFollowers && allFollowers.length != 0) {
            return allFollowers.map((follower, i) => {
                return (
                    <div key={i} className="userProfTabView">
                        <a href={`/profile/${follower.username}`}>
                            <p><span>
                                <Img
                                    src={[`${API}/user/photo/${follower.username}`, "/images/blank-profile-picture.webp"]}
                                    unloader={myComponent}
                                    className="img img-fluid "
                                    style={{ height: '2.5rem', width: '2.5rem', borderRadius: '50%' }}
                                    alt="user profile"
                                />
                            </span><span><span>{follower.username}</span><span>{follower.name}</span></span>
                            </p>
                        </a>
                    </div>
                )
            })

        } else {
            return <p>No users found</p>
        }


    }
    const showAllFollowing = () => {
        if (allFollowings && allFollowings.length != 0) {
            return allFollowings.map((following, i) => {
                return (
                    <div key={i} className="userProfTabView">
                        <a href={`/profile/${following.username}`}>
                            <p>
                                <span>
                                    <Img
                                        src={[`${API}/user/photo/${following.username}`, "/images/blank-profile-picture.webp"]}
                                        unloader={myComponent}
                                        className="img img-fluid "
                                        style={{ height: '2.5rem', width: '2.5rem', borderRadius: '50%' }}
                                        alt="user profile"
                                    />
                                </span><span><span>{following.username}</span><span>{following.name}</span></span>
                            </p>
                        </a>
                    </div>
                )
            })
        } else {
            return <p>No users found</p>
        }
    }

    console.log("followers",followers)
    console.log("following",followings)



    return (
        <React.Fragment>
            <div className="userDetailContent">
                <div className="userProfileTop">
                    <div className="userTopContainer">
                        <div className="userProfilePhoto">
                            {/* <Img
                                src={[`${API}/user/photo/${usernameForNow}`, "/images/blank-profile-picture.webp"]}
                                unloader={myComponent}
                            /> */}
                            {showProfileImage()}
                        </div>
                        <div className="userProfileRatingConnections">
                            {/* <p className="userRating">7.1</p>
                            <p className="userConnections">564</p> */}
                            <p className="noPosts"><span>{allBlogs.length}</span><span>Posts</span></p>
                            <p className="noPosts"><span onClick={toggle1}>{followers ? followers.length : '0'}</span><span>Followers</span></p>
                            <p className="noPosts"><span onClick={toggle2}>{followings ? followings.length : '0'}</span><span>Following</span></p>
                        </div>
                    </div>
                </div>
                  {/* //followers/// */}
                  <Modal isOpen={modal1} toggle={toggle1} className="buttonLabel1">
                                            <ModalHeader toggle={toggle1}>Followers</ModalHeader>
                                            <ModalBody>
                                                {showAllFollowers()}
                                            </ModalBody>
                                            {/* <ModalFooter>
                                                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                                                <Button color="secondary" onClick={toggle}>Cancel</Button>
                                            </ModalFooter> */}
                                        </Modal>
                                        {/* ///followers// */}
                                        {/* //following/// */}
                                        <Modal isOpen={modal2} toggle={toggle2} className="buttonLabel2">
                                            <ModalHeader toggle={toggle2}>Following</ModalHeader>
                                            <ModalBody>
                                                {showAllFollowing()}
                                            </ModalBody>
                                            {/* <ModalFooter>
                                                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                                                <Button color="secondary" onClick={toggle}>Cancel</Button>
                                            </ModalFooter> */}
                                        </Modal>
                                        {/* //following/// */}
                <div className="userProfBottom">
                    <div className="nameEditCont">
                        <p className="userName">{username}</p>
                        <p className="editProfile">
                            <Link href="/user/update">
                                <a><span className="editProfIcon"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cog" class="svg-inline--fa fa-cog fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path></svg></span><span> Edit Profile</span></a>
                            </Link>
                        </p>
                    </div>
                    <div className="userAbout">
                        <p>{about}</p>
                    </div>
                    {/* <p className="joinedDate">05/12/20202</p> */}
                </div>
                {/* {showUserBlogs()} */}
            </div>
        </React.Fragment>
    )
}


export default UserDetails;