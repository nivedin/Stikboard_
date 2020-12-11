import Link from 'next/link'
import renderHTML from 'react-render-html'
import moment from 'moment'
import { API } from '../../config'


const Card = ({ blog }) => {

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


    return (
        <div className="lead py-2">
            <header>
                <Link href={`/blogs/${blog.slug}`}>
                    <a>
                        <h1 className="display-6 py-3 font-weight-bold">{blog.title}</h1>
                    </a>
                </Link>
            </header>
            <section>
                <p className="mark ml-1 py-2">
                    Written by <Link href={`/profile/${blog.postedBy.username}`}><a className="blogUsername">{blog.postedBy.username}</a></Link>  | Published {moment(blog.updatedAt).fromNow()}
                </p>
            </section>
            <section>
                {showBlogCategories(blog)}
                {showBlogTags(blog)}
            </section>
            <div className="row">
                <div className="col-md-12">
                    <section className="mt-5 ">
                    { `${API}/blog/photo/${blog.slug}` && <img className="img img-fluid " style={{ maxHeight: '300px', width: 'auto' }} src={`${API}/blog/photo/${blog.slug}`} alt={blog.title} />}
                    </section>
                </div>
                <div className="col-md-12">
                    <section className="pt-4">
                        <div className="pt-4 pb-4" style={{wordBreak:'break-all'}}>
                            {renderHTML(blog.excerpt)}
                        </div>
                        <Link href={`/blogs/${blog.slug}`}>
                            <a className="btn btn-primary py-2">Read more</a>
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Card;