import { useState, useEffect } from 'react'
import { commentBlog, uncommentBlog } from '../../actions/blog'
import { getCookie, isAuth } from '../../actions/auth'
import CommentDisplay from './CommentDisplay'

function Comment({ slug, comments, updateComments }) {

    const [commentText, setCommentText] = useState("")
    //const [blogComments, setComments] = useState(comments)
    const [isError, setError] = useState(false)


    const handleChange = (e) => {
        // console.log(e.target.value);
        setError(false)
        setCommentText(e.target.value)
    }
    const handleClick = (e) => {
        e.preventDefault()
        const userId = isAuth()._id;
        const token = getCookie('token');
        // const slug = slug
        const comment = { text: commentText }
        //console.log("request", userId, token, slug, comment)
        if (commentText === "") {
            setError(true)
        } else {
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

    }

    // console.log(commentText);
    // console.log("auth", isAuth());
    //console.log("comments", blogComments);
    //console.log("comments", comments);

    const deleteComment = (currentComment) => {
        const userId = isAuth()._id;
        const token = getCookie('token');
        uncommentBlog(userId,token,slug,currentComment).then(data => {
            if(data.error){
                console.log(data.error)
            }else{
                updateComments(data.comments)
            }
        })

    }

    const deleteCommentConfirm = (currentComment) => {
        let answer = window.confirm("Delete your comment ? ");
        if(answer){
            deleteComment(currentComment)
        }
    }



    const showCommentInput = () => {
        return (
            <div >
                <form className="commentBar">
                    <input type="text" onChange={handleChange} value={commentText} className={isError ? "form-control is-invalid" : "form-control"} id="validationServer03" aria-describedby="validationServer03Feedback" required />
                    <button onClick={handleClick}><span>Comment</span></button>

                </form>
                <div id="validationServer03Feedback" class="invalid-feedback">
                    Please provide a valid city.
    </div>
            </div>
        )
    }

    const showAllComment = () => {
        return (
            comments.sort((a, b) => b.createdOn > a.createdOn ? 1 : -1).map((comment, i) => {
                return (
                    <CommentDisplay comment={comment} key={i} deleteComment={deleteCommentConfirm} />
                )
            })
        )
    }






    return (
        <div>
            {/* {console.log("prop", slug)} */}
            {showCommentInput()}
            <div className="mt-5">
            <div className="commentNumber">{comments.length} Comments</div>
                {showAllComment()}
            </div>
        </div>
    )
}

export default Comment
