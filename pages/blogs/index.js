import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { withRouter } from 'next/router'
import Layout from '../../components/Layout'
import ProfileLayout from '../../components/profile/ProfileLayout'
import { useState } from 'react'
import { listBlogsWithCategoriesAndTags } from '../../actions/blog'
import Card from '../../components/blog/Card'
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config'


const Blogs = ({ blogs, categories, tags, totalBlogs, blogsLimit, blogSkip, router }) => {


    const head = () => (
        <Head>
            <title>Blogs | {APP_NAME}</title>
            <meta name="description" content="Programming blogs,travell,photograp like a social media platform" />
            <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
            <meta property="og:title" content={`Latest web blogs and news | ${APP_NAME}`} />
            <meta name="og:description" content="Programming blogs,travell,photograph like a social media platform" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
            <meta name="twitter:card" content={`${DOMAIN}/images/mainLogoMeta.jpg`}/>
            <meta property="og:site_name" content="Stikboard"/>
            <meta name="twitter:image:alt" ontent="Programming blogs,travell,photograph like a social media platform"/>
            <meta property="og:image" content={`${DOMAIN}/images/mainLogoMeta.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/images/mainLogoMeta.jpg`} />
            <meta property="og:image:type" content="image/png" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
            <meta name="twitter:site" content="Stikboard"/>
        </Head>
    )


    const [limit, setLimit] = useState(blogsLimit);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(totalBlogs);
    const [loadedBlogs, setLoadedBlogs] = useState([]);


    const loadMore = () => {
        let toSkip = skip + limit;
        listBlogsWithCategoriesAndTags(toSkip, limit).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setLoadedBlogs([...loadedBlogs, ...data.blogs]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };

    const loadMoreButton = () => {
        return (
            size > 0 &&
            size >= limit && (
                <button onClick={loadMore} className="btn btn-outline-primary btn-lg">
                    Load more
                </button>
            )
        );
    };

    const showAllBlogs = () => {
        return blogs.map((blog, i) => {
            return (
                <article key={i}>
                    <Card blog={blog} />
                    <hr />
                </article>
            )
        })
    }


    const showAllCategories = () => {
        return (
            categories.map((c, i) => (
                <Link href={`/categories/${c.slug}`} key={i}>
                    <a className="btn btn-primary mr-2 mb-4">
                        {c.name}
                    </a>
                </Link>
            ))
        )
    }

    const showAllTags = () => {
        return (
            tags.map((t, i) => (
                <Link href={`/tags/${t.slug}`} key={i}>
                    <a className="btn btn-outline-success mr-2 mb-4">
                        {t.name}
                    </a>
                </Link>
            ))
        )
    }

    const showLoadedBlogs = () => {
        return loadedBlogs.map((blog, i) => (
            <article key={i}>
                <Card blog={blog} />
            </article>
        ));
    };

    return (
        <React.Fragment>
            {head()}
            <Layout>
                <main style={{paddingTop:'140px'}}>
                    <div className="container-fluid">
                        <header>
                            <div className="col-md-12 px-3">
                                <h1 className="display-4 font-weight-bold text-center">Blog List</h1>
                            </div>
                            <section>
                                <div className="mt-5 pb-5 text-center">
                                    {showAllCategories()}
                                    <br /><br />
                                    {showAllTags()}
                                </div>
                            </section>
                        </header>
                    </div>
                    <div className="container-fluid">
                        {showAllBlogs()}
                    </div>
                    <div className="container-fluid">
                        {showLoadedBlogs()}
                    </div>
                    <div className="text-center pt-5 pb-5">{loadMoreButton()}</div>
                </main>
            </Layout>
        </React.Fragment>

    )
}

Blogs.getInitialProps = () => {
    let skip = 0;
    let limit = 2;
    return listBlogsWithCategoriesAndTags(skip, limit).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                blogs: data.blogs,
                categories: data.categories,
                tags: data.tags,
                totalBlogs: data.size,
                blogsLimit: limit,
                blogSkip: skip
            };
        }
    });
};


export default withRouter(Blogs);

