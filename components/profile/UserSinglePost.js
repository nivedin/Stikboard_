import React from 'react'
import {useState} from 'react'
import renderHTML from 'react-render-html'
import moment from 'moment'
import { API, APP_NAME } from '../../config';
import Link from 'next/link'
import { removeBlog } from '../../actions/blog'
import { getCookie,isAuth } from '../../actions/auth'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Img} from 'react-image'


import './css/profile.css'

const UserSinglePost = (blogs) => {
    const { blog } = blogs
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const token = getCookie('token')

    const deleteBlog = (slug) => {
        removeBlog(slug, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                //setMessage(data.message)
                //loadBlogs()
                window.location.reload(); 
                //console.log("success");
            }
        })
    }


    const deleteConfirm = (slug) => {
        let answer = window.confirm('Are you sure you want to delete the blog')
        if (answer) {
            deleteBlog(slug)
        }
    }
    const myComponent = () => (
        <Img
          src='/images/blank-profile-picture.webp'
        />
      )
    //{ console.log("blogs", blog); }
    return (
        <React.Fragment>
            <div className="userSinglePostContainer">
                <div className="userPostTitle">
                    <div className="profImageDate">
                        <div className="profImage">
                        <Img
                            src={[`${API}/user/photo/${isAuth().username}`, "/images/blank-profile-picture.webp"]}
                            unloader={myComponent}
                            className="img img-fluid "
                            style={{ height: '3rem', width: '3rem', borderRadius: '50%' }}
                            alt="user profile"
                        />
                        </div>
                        <div className="userNameDate">
                            <p className="userName">{blog.postedBy.name}</p>
                            <p className="postDate">Updated {moment(blog.updatedAt).fromNow()} </p>
                        </div>
                    </div>
                    {/* <div className="editBlog"> */}
                    {/* <div class="editBlog dropdown ">
                        <button  class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" class="svg-inline--fa fa-pen fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href={`/user/crud/${blog.slug}`}>Edit Blog</a>
                            <button class="dropdown-item"  onClick={() => deleteConfirm(blog.slug)}>Delete Blog</button>
                        </div>
                    </div> */}
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle className="editBlog">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" class="svg-inline--fa fa-pen fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>
                            </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href={`/user/crud/${blog.slug}`}>Edit Blog</DropdownItem>
                            <DropdownItem onClick={() => deleteConfirm(blog.slug)}>Delete blog</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    {/* </div> */}
                </div>
                <div className="userPostBody">
                    <div className="postTitle">
                        <Link href={`/blogs/${blog.slug}`}>
                            <span>{blog.title}</span>
                        </Link>
                        <hr />
                    </div>
                    <div className="postImage">
                        <Link href={`/blogs/${blog.slug}`}>
                            <img src={`${API}/blog/photo/${blog.slug}`} alt="blogImg" style={{}} />
                        </Link>

                    </div>
                    <div className="postDesc">
                        {renderHTML(blog.excerpt)}
                    </div>

                </div>
                <div className="userPostFooter">
                    <Link href={`/blogs/${blog.slug}`}>
                        <a className="readMore">Read More</a>
                    </Link>
                    {/* <div className="startIco">sds</div>
                    <div className="commentIco">sds</div>
                    <div className="shareIco">sds</div> */}
                </div>
            </div>
        </React.Fragment>
    )
}

export default UserSinglePost;