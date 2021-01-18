import moment from 'moment'
import { Img } from 'react-image'
import { API } from '../../config';
import Link from 'next/link'
import { isAuth } from '../../actions/auth';


function CommentDisplay({ comment, deleteComment }) {

    const myComponent = () => (
        <Img
            src='/images/blank-profile-picture.webp'
        />
    )

    const deleteCurrentComment = () => {
        deleteComment(comment)
    }

    //console.log("prop comment", comment);
    return (
        <div className="commentDisplay">

            <div className="userDetailDelete">
                <Link href={`/profile/${comment.postedBy.username}`}>
                    <div className="photoNameUserDate">
                        <div className="photoContainer">
                            <Img
                                src={[`${API}/user/photo/${comment.postedBy.username}`, "/images/blank-profile-picture.webp"]}
                                unloader={myComponent}
                                className="img img-fluid "
                                style={{ height: '3.4rem', width: '3.4rem', borderRadius: '50%' }}
                                alt="user profile"
                            />
                        </div>
                        <div className="nameUserDateContainer">
                            <span>{comment.postedBy.name}</span>
                            <span>{comment.postedBy.username}</span>
                            <span>{moment(comment.createdOn).fromNow()}</span>
                        </div>
                    </div>
                </Link>
                {isAuth().username === comment.postedBy.username ? (<div className="removeBtn">
                    <button onClick={deleteCurrentComment}><span>
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" className="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg>
                    </span></button>
                </div>) : ("")}
            </div>


            <div className="commentTextContainer">
                {comment.text}
            </div>
        </div>
    )
}

export default CommentDisplay
