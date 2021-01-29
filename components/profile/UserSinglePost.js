import React from 'react'
import { useState, useEffect } from 'react'
import renderHTML from 'react-render-html'
import moment from 'moment'
import { API, APP_NAME } from '../../config';
import Link from 'next/link'
import { removeBlog, likeBlog, unlikeBlog } from '../../actions/blog'
import { getCookie, isAuth } from '../../actions/auth'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem ,Modal, ModalHeader, ModalBody} from 'reactstrap';
import { Img } from 'react-image';
import Comment from '../../components/blog/Comment'


import './css/profile.css'

const UserSinglePost = (blogs) => {
    const { blog } = blogs
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [userId, setUserId] = useState("")
    // const [username, setUsername] = useState("")

    const [modal1, setModal1] = useState(false);

    const toggle1 = () => {
        setComments(comments)
       
        setModal1(!modal1);
    }


    const [likeValue, setLike] = useState({
        isLike: false,
        likes: 0
    })

    const { isLike, likes } = likeValue

    const [comments, setComments] = useState([])

    const loadLike = () => {
        let userId = isAuth() && isAuth()._id;
        //let userLiked = blog.likes.indexOf(userId) !== -1
        const match = blog.likes && blog.likes.find(user => {
            return user._id === userId
        })
        // console.log("check state like userId", userId);
        // console.log("check state like userId", match);
        let blogLikeLength = blog && blog.likes ? blog.likes.length : ""

        if (match) {
            setLike({
                isLike: true,
                likes: blogLikeLength
            })
        }
        else {
            setLike({
                isLike: false,
                likes: blogLikeLength
            })
        }

    }
    const loadComments = () => {
        setComments(blog.comments)
    }

    useEffect(() => {
        setUserId(isAuth()._id)
        //setUsername(isAuth().username)
        loadComments()
        loadLike()
    }, [])


    const token = getCookie('token');

    const likeToggle = () => {
        if (!isAuth()) {
            Router.push('/signin')
        } else {
            let callApi = isLike ? unlikeBlog : likeBlog
            const userId = isAuth()._id;
            const slug = blog.slug;
            //console.log(userId, token, slug);

            callApi(userId, token, slug).then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    console.log(data);
                    console.log("slug", slug);
                    setLike({
                        isLike: !isLike,
                        likes: data.likes.length
                    })
                }
            })
        }

    }

    const toggle = () => setDropdownOpen(prevState => !prevState);

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

    const updateComments = (newComments) => {
        setComments(newComments)
    }

   

    const showEditIcon = () => {
        //console.log(blog.postedBy._id, userId)
        if (blog.postedBy._id === userId) {
            return (
                <Dropdown direction="left" isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle className="editBlog">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" class="svg-inline--fa fa-pen fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem href={`/user/crud/${blog.slug}`}>Edit Blog</DropdownItem>
                        <DropdownItem onClick={() => deleteConfirm(blog.slug)}>Delete blog</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            )
        } else {
            return ""
        }
    }
    //{ console.log("blogs", blog); }
    return (
        <React.Fragment>
            <div className="userSinglePostContainer">
                <div className="userPostTitle">
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
                    {showEditIcon()}

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
                            {/* <img src={`${API}/blog/photo/${blog.slug}`} alt="blogImg" style={{}} /> */}
                            <Img
                    className="img img-fluid "
                    src={[`${API}/blog/photo/${blog.slug}`]}
                    unloader={myComponent}
                    style={{ maxHeight: '300px', width: 'auto' }}
                    alt={blog.title}
                  />
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
                </div>
                <div className="likeCmntShare">
                <div className="startIco" onClick={likeToggle}>
                    {/* <p>{likes}</p> */} <span class="badge rounded-pill bg-light">{likes}</span>
                    {!isLike ? (
                        <span>
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
                        </span>
                    ) : (
                        <span>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        </span>
                    )}
                    </div>

                    <div className="commentIco" onClick={toggle1}><span>
                    <span class="badge rounded-pill bg-light text-dark">{comments.length}</span> <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="comment" className="svg-inline--fa fa-comment fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"></path></svg>                    </span></div>
                    <div className="shareIco"><span>
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="paper-plane" class="svg-inline--fa fa-paper-plane fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"></path></svg></span>
                    </div>
                   
                </div>
            </div>
            {/* ///Comment/// */}
            {/* {console.log("comments",blog)} */}
            <Modal isOpen={modal1} toggle={toggle1} className="buttonLabel1">
                <ModalHeader toggle={toggle1}>Comment</ModalHeader>
                <ModalBody>
                    <Comment slug={blog.slug} comments={comments} updateComments={updateComments}/>
                </ModalBody>
            </Modal>
            {/* ///Comment/// */}
        </React.Fragment>
    )
}

export default UserSinglePost;