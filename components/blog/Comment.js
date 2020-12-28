import { useState, useEffect } from 'react'
import { commentBlog, uncommentBlog } from '../../actions/blog'
import { getCookie, isAuth } from '../../actions/auth'
import CommentDisplay from './CommentDisplay'

function Comment({ slug, comments, updateComments }) {

    const [commentText, setCommentText] = useState("")
    //const [blogComments, setComments] = useState(comments)


    const handleChange = (e) => {
        // console.log(e.target.value);
        setCommentText(e.target.value)
    }
    const handleClick = (e) => {
        e.preventDefault()
        const userId = isAuth()._id;
        const token = getCookie('token');
        // const slug = slug
        const comment = { text: commentText }
        //console.log("request", userId, token, slug, comment)
        commentBlog(userId, token, slug, comment).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                //console.log("data", data)
                setCommentText("")
                updateComments(data.comments)
            }
        })
    }

    // console.log(commentText);
    // console.log("auth", isAuth());
    //console.log("comments", blogComments);
    //console.log("comments", comments);



    const showCommentInput = () => {
        return (
            <div >
                <form className="commentBar">
                    <input type="text" onChange={handleChange} value={commentText} />
                    <button onClick={handleClick}><span>Comment</span></button>
                </form>
            </div>
        )
    }

    const showAllComment = () => {
        return (
            comments.sort((a, b) => b.createdOn > a.createdOn ? 1 : -1).map((comment, i) => {
                return (
                    <CommentDisplay comment={comment} key={i} />
                )
            })
        )
    }






    return (
        <div>
            {/* {console.log("prop", slug)} */}
            {showCommentInput()}
            <div className="mt-5">
                {showAllComment()}
            </div>
        </div>
    )
}

export default Comment
