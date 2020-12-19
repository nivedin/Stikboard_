import React, { useEffect, useState } from 'react';
import { getCookie, isAuth } from '../../actions/auth';
import { API } from '../../config';
import { Img } from 'react-image'
import FollowProfileBtn from '../users/FollowProfile'

const UserListCard = ({user}) => {
    //console.log("all user",user);

   
    
    const [values, setValues] = useState({
        userId:user._id,
        name:user.name,
        username:user.username,
        following: user.following,
        followers: user.followers
    })

    const { userId,name,username,followers, following } = values;

    const init = (user) => {
        // console.log("user", user);
        // console.log("loggeduser", isAuth());
        const match = user.followers.find(follower => {
           
            return follower._id === isAuth()._id
        })
        if (match) {
            changeFollowing(true)
        } else {
            changeFollowing(false)
        }
    }

    useEffect(() => {
        init(user)
    }, [])

    const [followings, changeFollowing] = useState(false)

    const token = getCookie('token');

    //{console.log(`followFollState for ${username} `,followings);}
    
    const clickFollowButton = (callApi) => {
        //console.log(isAuth()._id, token, user._id);

        callApi(isAuth()._id, token, userId).then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                //console.log("chnge user", data);
                setValues({
                    ...values,
                    following: data.following,
                    followers: data.followers
                })
                changeFollowing(!followings)
            }
        })

    }

   

    const myComponent = () => (
        <Img
            src='/images/blank-profile-picture.webp'
        />
    )

    //console.log(user);
        return (
            <div className="card mb-3" style={{ maxWidth: '500px' }}>
                <div className="row g-0">
                    <div className="col-md-2">
                        <Img
                            src={[`${API}/user/photo/${username}`, "/images/blank-profile-picture.webp"]}
                            unloader={myComponent}
                            alt="user profile"
                            style={{ height: '100px', width: '100px' }}
                        />
                    </div>
                    <div className="col-md-5">
                        <div className="card-body">
                            <h5 className="card-title"><a href={`/profile/${username}`}>{username}</a></h5>
                            <p className="card-text text-muted">{name}</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card-body">
                            <FollowProfileBtn following={followings} onButtonClick={clickFollowButton} />
                            <p className="mr-2">following : {following ? following.length : '0'}</p>
                                                <p>followers : {followers ? followers.length : '0'}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

export default UserListCard;