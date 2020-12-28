import React from 'react'
import {  useEffect,useState} from 'react';
import Layout from '../../components/Layout'
import Private from '../../components/auth/Private'
import Link from 'next/link'
import SideBar from '../../components/profile/Sidebar'
import MiddleSection from '../../components/profile/MiddleSection'
import SearchBar from '../../components/profile/SearchBar'
import ProfileLayout from '../../components/profile/ProfileLayout'
import Head from 'next/head'
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config'
import { isAuth } from '../../actions/auth'
import '../../components/profile/css/profile.css'




const UserIndex = () => {

    const [username, setUsername] = useState("")

    let userName;
    useEffect(() => {
       userName = isAuth().username
       setUsername(userName);
    }, []);

    const head = () => (
        <Head>
            <title>{username} | {APP_NAME}</title>
            <meta name="description" content="Spend all day doing what you love the most. Meet like-minded people and learn. Expose your talents. Connect with people with similar talents around the world. Stikboard is here to stay." />
            <link rel="canonical" href={`${DOMAIN}`} />
            <meta property="og:title" content={`Not your usual social network | ${APP_NAME}`} />
            <meta name="og:description" content="Spend all day doing what you love the most.Meet like-minded people and learn.Expose your talents.Connect with people with similar talents around the world.Stikboard is here to stay." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}`} />
            <meta name="twitter:card" content={`${DOMAIN}/images/mainLogoMeta.jpg`}/>
            <meta name="keywords" content="socialmedia,blog,technology,writings,poem,movies,reviews,connect,share,stikboard,follow,connection,group,travell"/>
            <meta name="robots" content= "index, follow"/>
            {/* <!-- Schema.org markup for Google+ --> */}
            <meta itemprop="name" content={APP_NAME}/>
            <meta itemprop="description" content="Spend all day doing what you love the most.Meet like-minded people and learn.Expose your talents.Connect with people with similar talents around the world.Stikboard is here to stay." />
            <meta itemprop="image" content={`${DOMAIN}/images/mainLogoMeta.jpg`}/>
            <meta property="og:site_name" content="Stikboard"/>
            <meta name="twitter:image:alt" ontent="Share your creation to the world,connect with similar talents and participate in exciting competitions."/>
            <meta property="og:image" content={`${DOMAIN}/images/mainLogoMeta.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/images/mainLogoMeta.jpg`} />
            <meta property="og:image:type" content="image/png" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
            <meta name="twitter:site" content="Stikboard"/>
            {/* <!-- Twitter Card data --> */}
            <meta name="twitter:card" content="Share your creation to the world,connect with similar talents and participate in exciting competitions."/>
            <meta name="twitter:title" content={APP_NAME}/>
            <meta name="twitter:description" content="Spend all day doing what you love the most.Meet like-minded people and learn.Expose your talents.Connect with people with similar talents around the world.Stikboard is here to stay."/>
            <meta name="twitter:creator" content="Stikboard"/>
            <meta name="twitter:image:src" content={`${DOMAIN}/images/mainLogoMeta.jpg`}/>
        </Head>
    )
    return (
       <React.Fragment>
       {head()}
            <Private>
            <ProfileLayout>
                    {/* <h1 className="pt-5 pb-5">User Dashboard</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <a href="/user/crud/blog">Create Blog</a>
                                </li>
                                <li className="list-group-item">
                                    <Link href="/user/crud/blogs">
                                        <a>Update Blog</a>
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link href="/user/update">
                                        <a>Update Profile</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8">right</div>
                    </div> */}
                    {/* <SideBar /> */}
                    <MiddleSection/>
                    {/* <SearchBar/> */}
                </ProfileLayout>
            </Private>
       </React.Fragment>
    )
}

export default UserIndex;