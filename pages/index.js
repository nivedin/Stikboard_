import React from 'react'
import Layout from '../components/Layout.js'
import Home from '../components/Home/Home.js'
import Link from 'next/link'
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../config'
import Head from 'next/head'


const Index = () => {

    const head = () => (
        <Head>
            <title>{APP_NAME}</title>
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
            <Layout>
            <Home />
            {/* <h2>Index Page</h2>
            <Link href="/signin"><a>signin</a></Link>
            <Link href="/signup"><a>signup</a></Link> */}
        </Layout>
       </React.Fragment>
    )
}

export default Index;