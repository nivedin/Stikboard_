import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Router from 'next/router'
import { getCookie, isAuth } from '../../actions/auth'
import { getCategories } from '../../actions/category'
import { getTags } from '../../actions/tag'
import { list, removeBlog } from '../../actions/blog'
import moment from 'moment'


const BlogRead = ({username}) => {

    const [blogs, setBlogs] = useState([])
    const [message, setMessage] = useState('')
    const token = getCookie('token')

    useEffect(() => {
        loadBlogs();
    }, []);

    const loadBlogs = () => {
        list(username).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setBlogs(data)
            }
        })
    }

    const deleteBlog = (slug) => {
        removeBlog(slug, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setMessage(data.message)
                loadBlogs()
            }
        })
    }


    const deleteConfirm = (slug) => {
        let answer = window.confirm('Are you sure you want to delete the blog')
        if (answer) {
            deleteBlog(slug)
        }
    }

    const showUpdateButton = (blog) => {
        if (isAuth() && isAuth().role !== "admin") {
            return (
                <Link href={`/user/crud/${blog.slug}`}>
                    <a className="ml-3 btn btn-sm btn-primary">Update</a>
                </Link>
            )
        }
        else if (isAuth() && isAuth().role === "admin") {
            return (
                <Link href={`/admin/crud/${blog.slug}`}>
                    <a className="ml-3 btn btn-sm btn-primary">Update</a>
                </Link>
            )
        }

    }

    const showAllBlogs = () => {
        return blogs.map((blog, i) => {
            return (
                <div key={i} className="mt-5">
                    <h3>{blog.title}</h3>
                    <p className="mark">Written by {blog.postedBy.name} | Published on {moment(blog.updatedAt).fromNow()}</p>

                    <button className="btn btn-sm btn-danger" onClick={() => deleteConfirm(blog.slug)}>Delete</button>
                    {showUpdateButton(blog)}
                </div>
            )
        })
    }


    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {message && <div className="alert alert-warning">{message}</div>}
                        {showAllBlogs()}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default BlogRead;