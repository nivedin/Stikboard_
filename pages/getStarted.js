import Layout from '../components/Layout.js'
import Head from 'next/head'
import GetstartedComponent from '../components/auth/Getstarted/Getstarted'
import {withRouter} from 'next/router'
import React from 'react'
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../config'

const GetStarted = ({router}) => {

    const head = () => (
        <Head>
            <title>GetStarted | {APP_NAME}</title>
            <meta name="description" content="Programming blogs,travell,photograp like a social media platform" />
            <link rel="canonical" href={`${DOMAIN}`} />
            <meta property="og:title" content={`Latest web blogs and news | ${APP_NAME}`} />
            <meta name="og:description" content="Programming blogs,travell,photograph like a social media platform" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}`} />

            <meta property="og:image" content={`${DOMAIN}/images/sbLogo.png`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/images/sbLogo.png`} />
            <meta property="og:image:type" content="image/png" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    )
    return (
       <React.Fragment>
       {head()}
           <GetstartedComponent/>
       </React.Fragment>
        
    )
}

export default withRouter(GetStarted);