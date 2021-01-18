import Link from 'next/link'
import renderHTML from 'react-render-html'
import moment from 'moment'
import { API } from '../../config'
import { Img } from 'react-image'


const SmallCard = ({ blog }) => {

    const myComponent = () => (
        <Img
            src='/images/blank-profile-picture.webp'
        />
    )

    return (
        <div className="card">
            <section>
                <Link href={`/blogs/${blog.slug}`}>
                    <a>
                        {/* <img className="img img-fluid " style={{ height: '250px', width: '100%' }} src={`${API}/blog/photo/${blog.slug}`} alt={blog.title} /> */}
                        <Img
                                src={`${API}/blog/photo/${blog.slug}`}
                                unloader={myComponent}
                                className="img img-fluid "
                                style={{ height: '250px', width: '100%' }}
                                alt={blog.title}
                            />
                    </a>
                </Link>
            </section>
            <div className="card-body">
                <section>
                    <Link href={`/blogs/${blog.slug}`}>
                        <a>
                            <h5 className="card-title">
                                {blog.title}
                            </h5>
                        </a>
                    </Link>
                    {/* <p className="card-text">
                        Posted {moment(blog.updatedAt).fromNow()} by <Link href={`/`}><a>{blog.postedBy.username}</a></Link>
                    </p>
                    <hr />
                    <p className="card-text">
                        {renderHTML(blog.excerpt)}
                    </p> */}
                    <a href={`/profile/${blog.postedBy.username}`}>
                <div className="profImageDate">
                        <div className="profImage">
                            <Img
                                src={[`${API}/user/photo/${blog.postedBy.username}`, "/images/blank-profile-picture.webp"]}
                                unloader={myComponent}
                                className="img img-fluid "
                                style={{ height: '3rem', width: '3rem', borderRadius: '50%' }}
                                alt="user profile"
                            />
                        </div>
                        <div className="userNameDate">
                            <p className="userName">{blog.postedBy.name}</p>
                            <p className="postDate">Created {moment(blog.createdAt).fromNow()} </p>
                        </div>
                    </div>
                </a>
                </section>
            </div>

        </div>
    )
}

export default SmallCard;