import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import moment from 'moment'
import Layout from '../../components/Layout'
import { useState, useEffect } from 'react'
import { userPublicProfile, follow, unfollow } from '../../actions/user'
import { getCookie, isAuth } from '../../actions/auth';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config'
import ContactForm from '../../components/form/ContactForm'
import FollowProfileBtn from '../../components/users/FollowProfile'
import { Img } from 'react-image';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const UserProfile = ({ user, blogs, query }) => {

    const [modal1, setModal1] = useState(false);
    const toggle1 = () => setModal1(!modal1);

    const [modal2, setModal2] = useState(false);
    const toggle2 = () => setModal2(!modal2);

    const init = (user) => {
        // console.log("user", user);
        // console.log("loggeduser", isAuth());
        const match = user.followers.find(follower => {
            return follower._id === isAuth()._id
        })
        //console.log("follow", match);

        if (match) {
            // console.log("follow", match)
            changeFollowing(true)
        } else {
            changeFollowing(false)
        }

    }

    const [following, changeFollowing] = useState(false)
    const [values, setValues] = useState({
        followers: user.followers,
        followings: user.following
    })

    const { followers, followings } = values;
    //console.log(followers, followings);

    useEffect(() => {
        init(user)

    }, [])

    const head = () => (
        <Head>
            <title>{user.username} | {APP_NAME}</title>
            <meta name="description" content={`Blogs by ${user.username}`} />
            <link rel="canonical" href={`${DOMAIN}/profile/${query.username}`} />
            <meta property="og:title" content={`${user.username} | ${APP_NAME}`} />
            <meta name="og:description" content={`Blogs by ${user.name}`} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}/profile/${query.username}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/images/sbLogo.png`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/images/sbLogo.png`} />
            <meta property="og:image:type" content="image/png" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    )
    // {
    //     console.log(followers, followings)
    // }
    const myComponent = () => (
        <Img
            src='/images/blank-profile-picture.webp'
        />
    )

    const token = getCookie('token');



    const clickFollowButton = (callApi) => {
        //console.log(isAuth()._id, token, user._id);

        callApi(isAuth()._id, token, user._id).then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                //console.log("chnge user", data);
                setValues({
                    followers: data.followers,
                    followings: data.following
                })
                changeFollowing(!following)

            }
        })

    }


    const showUserBlogs = () => {
        return blogs.map((blog, i) => {
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

    const showAllFollowers = () => {
        if (followers.length != 0) {
            return followers.map((follower, i) => {
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
        if (followings.length != 0) {
            return followings.map((following, i) => {
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



    return (
        <React.Fragment>
            {head()}
            <Layout>
                <div className="container" style={{ paddingTop: '140px' }}>
                    <div className="row ">
                        <div className="col-md-12 ">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center ">
                                        <div className="col-md-3">
                                            <Img
                                                src={[`${API}/user/photo/${user.username}`, "/images/blank-profile-picture.webp"]}
                                                unloader={myComponent}
                                                className="img img-fluid img-thumbnail mb-3"
                                                style={{ height: '10rem', width: '10rem', borderRadius: '50%' }}
                                                alt="user profile"
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <h5>{user.name}</h5>
                                            <h6 className="text-muted">@{user.username}</h6>
                                            {console.log(user)}
                                            {/* <p className="text-muted"><small>  Joined {moment(user.createdAt).fromNow()}</small></p> */}
                                            <p className="mt-4">{user.about ? <q>{user.about}</q> : ""}</p>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="followUnfollowList" style={{ display: 'flex' }}>
                                                <p><span>{blogs.length}</span><span>Posts</span></p>
                                                <p><span onClick={toggle1}>{followers ? followers.length : '0'}</span><span>Followers</span></p>
                                                <p><span onClick={toggle2}>{followings ? followings.length : '0'}</span><span>Following</span></p>
                                            </div>
                                            <FollowProfileBtn following={following} onButtonClick={clickFollowButton} />
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title bg-primary p-4">
                                        Recent blogs by {user.name}
                                    </h5>

                                    {showUserBlogs()}
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title bg-primary p-4">
                                        Message {user.name}
                                    </h5>
                                    <br />
                                    <ContactForm authorEmail={user.email} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    )
}

UserProfile.getInitialProps = ({ query }) => {
    return userPublicProfile(query.username).then(data => {
        if (data.error) {
            console.log(data.error);
        }
        else {
            return { user: data.user, blogs: data.blogs, query }
        }
    })
}

export default UserProfile;
