import React from 'react'
import Router,{ useRouter } from "next/router";
import Head from 'next/head'
import Link from 'next/link'
import renderHTML from 'react-render-html'
import moment from 'moment'
import Rating from 'react-rating'
import Layout from '../../components/Layout'
import ProfileLayout from '../../components/profile/ProfileLayout'
import { useState, useEffect } from 'react'
import { singleBlog, listRelated, likeBlog, unlikeBlog,rateBlog } from '../../actions/blog'
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config'
import SmallCard from '../../components/blog/SmallCard'
import DisqusThread from '../../components/DisqusThread'
import { Img } from 'react-image'
import { getCookie, isAuth } from '../../actions/auth'
import Comment from '../../components/blog/Comment'


const SingleBlog = ({ blog, query }) => {

    const router = useRouter();

    const [related, setRelated] = useState([])
    const [likeValue, setLike] = useState({
        isLike: false,
        likes: 0
    })
    const [comments, setComments] = useState([])
    const [rating, setRating] = useState([])
    const [isRated, setIsRated] = useState(false)

    const { isLike, likes } = likeValue

    const loadRelated = () => {
        listRelated({ blog }).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setRelated(data)
            }
        })
    }

    let userId = isAuth() && isAuth()._id;

    const loadLike = () => {
        
        //let userLiked = blog.likes.indexOf(userId) !== -1
        const match = blog.likes.find(user => {
            return user._id === userId
        })
        // console.log("check state like userId", userId);
        // console.log("check state like userId", match);

        if (match) {
            setLike({
                isLike: true,
                likes: blog.likes.length
            })
        }
        else {
            setLike({
                isLike: false,
                likes: blog.likes.length
            })
        }

    }

    const loadComments = () => {
        setComments(blog.comments)
    }
    const loadRatings = () => {
        console.log(blog.ratings);

        // blog.ratings.find(rating => {
        //     if(rating.ratedBy._id === userId ){
        //         setRating(rating.rate)
        //         setIsRated(true)
        //         console.log("userfound");
        //     }else{
        //         console.log("user not found");
        //         setIsRated(false)
        //     }
        // })
        let ratedUser = blog.ratings.find(rating => rating.ratedBy._id === userId)
        if(ratedUser){
                    setRating(ratedUser.rate)
                    setIsRated(true)
                    //console.log("userfound");
                }else{
                    console.log("user not found");
                    setRating()
                    setIsRated(false)
                }
    }

    useEffect(() => {
        !isAuth() && Router.push(`/signin`)
    },[])

    useEffect(() => {
        loadLike()
        loadComments()
        loadRelated()
        loadRatings()
    }, [router.asPath])

    //console.log("Userrated",rating);

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
                <article className="mb-4">
                    <SmallCard blog={blog} />
                </article>
            </div>
        ))
    }

    const updateComments = (newComments) => {
        setComments(newComments)
    }

    // const showComments = () => {
    //     return (
    //         <div>
    //             {/* {console.log({blog})} */}
    //             <DisqusThread id={blog._id} title={blog.title} path={`/blog/${blog.slug}`} />
    //         </div>
    //     )
    // }

     const showComments = () => {
        return (
            <div>
                {/* {console.log(blog.comments)} */}
                 <Comment slug={blog.slug} comments={comments} updateComments={updateComments}/>
            </div>
        )
    }

    const myComponent = () => (
        <Img
            src='/images/blank-profile-picture.webp'
        />
    )

    const token = getCookie('token');


    const likeToggle = () => {
        if (!isAuth()) {
            Router.push('/signin')
        } else {
            let callApi = isLike ? unlikeBlog : likeBlog
            const userId = isAuth()._id;
            const slug = query.slug;
            //console.log(userId, token, slug);

            callApi(userId, token, slug).then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    //console.log(data);
                    //console.log("slug", slug);
                    setLike({
                        isLike: !isLike,
                        likes: data.likes.length
                    })
                }
            })
        }
    }

    const handleRating = (blogRate) => {
        console.log(blogRate);
        setRating(blogRate)
        const userId = isAuth()._id;
        const slug = query.slug;
        let rating = { rate : blogRate}
        rateBlog(slug,rating,userId,token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                
                setIsRated(true)
                console.log(data);
               
            }
        })
    }

    return (
        <React.Fragment>
            {head()}
            <ProfileLayout>
                <main>
                    <article>
                        <div className="container-fluid" >
                            <section>
                                <div className="row" style={{ width: '100%' }}>
                                    {/* <img src={`${API}/blog/photo/${blog.slug}`} alt={blog.title} className="img img-fluid featured-image" /> */}
                                    <Img
                                        src={`${API}/blog/photo/${blog.slug}`} unloader={myComponent} alt={blog.title} className="img img-fluid featured-image"
                                    />
                                </div>
                            </section>
                            <section>
                                <div className="container-fluid">
                                    <h1 className="display-4 mt-2 mb-2 font-weight-bold">{blog.title}</h1>
                                    <p className="lead mt-3 pb-2">
                                        Written by <Link href={`/profile/${blog.postedBy.username}`}><a className="blogUsername">{blog.postedBy.username}</a></Link> | Published {moment(blog.createdAt).fromNow()}
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
                                <div className="col-md-12 lead blogBody">
                                    {renderHTML(blog.body)}
                                </div>
                            </section>
                        </div>

                        <div className="container mt-5">
                            <div className="showLikeUnlike">
                                {/* {!isLike ? (<button className="btn btn-danger mr-4" onClick={likeToggle}><span className="mr-2">{likes}</span><span>Like</span></button>) : (<button onClick={likeToggle} className="btn btn-dark"><span className="mr-2">{likes}</span><span>Unlike</span></button>)} */}
                                <div className="startIco" onClick={likeToggle} style={{height:'30px',cursor:'pointer',display:'flex',alignItems:'center'}}>
                    {/* <p>{likes}</p> */} <span class="badge rounded-pill bg-light " style={{marginRight:'10px'}}>{likes}</span>
                    {!isLike ? (
                        <span>
                            <svg style={{height:'30px'}} aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
                        </span>
                    ) : (
                        <span>
                            <svg style={{height:'30px'}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        </span>
                    )}
                    </div>
                            </div>
                        </div>

                        <div className="container my-4">
                             <Rating
                            initialRating={rating}
                            emptySymbol="far fa-star fa-2x medium"
                            fullSymbol="fas fa-star fa-2x medium"
                            fractions={2}
                            onClick={handleRating}
                            readonly={isRated}
                            />
                    
                        </div>

                        <div className="container pt-5">
                            {showComments()}
                        </div>
                        <div className="container pt-4 pb-5" style={{maxWidth:'100vw'}}>
                            <h2 className="text-center pt-5 pb-5">Related Blogs</h2>
                            <hr />
                            <div className="row">
                                {showRelatedBlogs()}
                            </div>
                        </div>
                        <hr />            
                    </article>
                </main>
            </ProfileLayout>
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