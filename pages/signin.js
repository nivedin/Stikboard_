import Layout from '../components/Layout.js'
import SigninComponent from '../components/auth/Signin/SigninComponent'
import {withRouter} from 'next/router'
import React from 'react'
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../config'
import Head from 'next/head'


const Signin = ({router}) => {

    const head = () => (
        <Head>
            <title>Signin | {APP_NAME}</title>
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
    const redirectMessage = () => {
        if(router.query.message){
            return <div className="alert alert-danger">{router.query.message}</div>
        }else{
            return;
        }
    }
    return (
       <React.Fragment>
       {head()}
        <Layout>
        {redirectMessage()}
        <SigninComponent/>
        </Layout>
       </React.Fragment>
        
    )
}

export default withRouter(Signin);