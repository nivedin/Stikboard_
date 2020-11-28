import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import renderHTML from 'react-render-html'
import moment from 'moment'
import Layout from '../../components/Layout'
import { useState, useEffect } from 'react'
import { singleBlog, listRelated } from '../../actions/blog'
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config'
import SmallCard from '../../components/blog/SmallCard'
import DisqusThread from '../../components/DisqusThread'


const SingleBlog = ({ blog, query }) => {

    const [related, setRelated] = useState([])

    const loadRelated = () => {
        listRelated({ blog }).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setRelated(data)
            }
        })
    }

    useEffect(() => {
        loadRelated()
    }, [])

    const head = () => (
        <Head>
            <title>{blog.title} | {APP_NAME}</title>
            <meta name="description" content={blog.mdesc} />
            <link rel="canonical" href={`${DOMAIN}/blogs/${query.slug}`} />
            <meta property="og:title" content={`${blog.title} | ${APP_NAME}`} />
            <meta name="og:description" content={blog.mdesc} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}/blogs/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`} />
            <meta property="og:image:secure_url" content={`${API}/blog/photo/${blog.slug}`} />
            <meta property="og:image:type" content="image/png" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    )


    const showBlogCategories = blog => {
        return (
            blog.categories.map((c, i) => (
                <Link key={i} href={`/categories/${c.slug}`}>
                    <a className="btn btn-primary mr-2">
                        {c.name}
                    </a>
                </Link>
            ))
        )
    }

    const showBlogTags = blog => {
        return (
            blog.tags.map((t, i) => (
                <Link key={i} href={`/tags/${t.slug}`}>
                    <a className="btn btn-outline-success mr-1">
                        {t.name}
                    </a>
                </Link>
            ))
        )
    }

    const showRelatedBlogs = () => {
        return related.map((blog, i) => (
            <div className="col-md-4" key={i}>
                <article>
                    <SmallCard blog={blog} />
                </article>
            </div>
        ))
    }

    const showComments = () => {
        return(
            <div>
                <DisqusThread id={blog.id} title={blog.title} path={`/blog/${blog.slug}`}/>
            </div>
        )
    }

    return (
        <React.Fragment>
            {head()}
            <Layout>
                <main>
                    <article>
                        <div className="container-fluid">
                            <section>
                                <div className="row" style={{ marginTop: '10px' }}>
                                    <img src={`${API}/blog/photo/${blog.slug}`} alt={blog.title} className="img img-fluid featured-image" />
                                </div>
                            </section>
                            <section>
                                <div className="container">
                                    <h1 className="display-2 mt-2 mb-2 font-weight-bold">{blog.title}</h1>
                                    <p className="lead mt-3 pb-2">
                                        Written by <Link href={`/profile/${blog.postedBy.username}`}><a>{blog.postedBy.username}</a></Link> | Published {moment(blog.updatedAt).fromNow()}
                                    </p>

                                    <div className="pb-3">
                                        <p>
                                            {showBlogCategories(blog)}
                                            {showBlogTags(blog)}
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div className="container">
                            <section>
                                <div className="col-md-12 lead">
                                    {renderHTML(blog.body)}
                                </div>
                            </section>
                        </div>

                        <div className="container pb-5">
                            <h2 className="text-center pt-5 pb-5">Related Blogs</h2>
                            <hr />
                            {/* {JSON.stringify(related)} */}
                            <div className="row">
                                {showRelatedBlogs()}
                            </div>
                        </div>
                        <hr />

                        <div className="container pb-5">
                           {showComments()}
                        </div>
                        <hr />



                    </article>
                </main>
            </Layout>
        </React.Fragment>
    )

}

SingleBlog.getInitialProps = ({ query }) => {
    return singleBlog(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return { blog: data, query }
        }
    })
};

export default SingleBlog;