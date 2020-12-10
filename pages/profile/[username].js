import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import moment from 'moment'
import Layout from '../../components/Layout'
import { useState, useEffect } from 'react'
import { userPublicProfile } from '../../actions/user'
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config'
import ContactForm from '../../components/form/ContactForm'
import {Img} from 'react-image'

const UserProfile = ({ user, blogs, query }) => {

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

    const myComponent = () => (
        <Img
          src='/images/blank-profile-picture.webp'
        />
      )

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
    return (
        <React.Fragment>
            {head()}
            <Layout>
                <div className="container" style={{paddingTop:'140px'}}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h5>{user.name}</h5>
                                            {console.log(user)}
                                            <p className="text-muted">Joined {moment(user.createdAt).fromNow()}</p>
                                        </div>
                                        <div className="col-md-4">
                                            {/* <img
                                                src={`${API}/user/photo/${user.username}`}
                                                className="img img-fluid img-thumbnail mb-3"
                                                style={{ height: '10rem', width: '10rem', borderRadius: '50%' }}
                                                alt="user profile"
                                            /> */}
                                            <Img
                                                src={[`${API}/user/photo/${user.username}`, "/images/blank-profile-picture.webp"]}
                                                unloader={myComponent}
                                                className="img img-fluid img-thumbnail mb-3"
                                                style={{ height: '10rem', width: '10rem', borderRadius: '50%' }}
                                                alt="user profile"
                                            />
                                        </div>
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
                                    <ContactForm authorEmail={user.email}/>
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
            //console.log(data);
            return { user: data.user, blogs: data.blogs, query }
        }
    })
}

export default UserProfile;
