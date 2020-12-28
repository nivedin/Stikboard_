import moment from 'moment'
import { Img } from 'react-image'
import { API } from '../../config';
import Link from 'next/link'


function CommentDisplay({ comment }) {

    const myComponent = () => (
        <Img
            src='/images/blank-profile-picture.webp'
        />
    )

    //console.log("prop comment", comment);
    return (
        <div className="commentDisplay">
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
            <div className="commentTextContainer">
                {comment.text}
            </div>
        </div>
    )
}

export default CommentDisplay
