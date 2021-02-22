import React, { useEffect, useState } from 'react';
import { withRouter } from 'next/router'
// import { useState, useEffect } from 'react'
import { getAllUser } from '../../actions/user';
import { getCookie, isAuth } from '../../actions/auth';
import { API } from '../../config';
import FollowProfileBtn from '../../components/users/FollowProfile'
// import DefaultImg from '../../public/images/blank-profile-picture.webp'
import { Img } from 'react-image'
import UserListCard from '../../components/users/userListCard'


const allUser = ({ users }) => {


    
    const [userId, setUserId] = useState("")
    const [allUsers, setAllUsers] = useState([])


    const isAuthorization = (UserId) => {
        setUserId(UserId)
    }
    const allUsersSet = (Users) => {
        setAllUsers(Users)
    }

    useEffect(() => {

        isAuthorization(isAuth()._id)
        allUsersSet(users)

    }, [])

    //console.log("userid", userId)
    const userListCards = () => (

        allUsers.filter((user) => { return user._id !== userId }).map((user, i) => {
            return (
                <React.Fragment>
                    <UserListCard user={user} key={i} />
                </React.Fragment>
                // <div class="card mb-3" key={i} style={{ maxWidth: '500px' }}>
                //     <div class="row g-0">
                //         <div class="col-md-2">
                //             <Img
                //                 src={[`${API}/user/photo/${user.username}`, "/images/blank-profile-picture.webp"]}
                //                 unloader={myComponent}
                //                 alt="user profile"
                //                 style={{ height: '100px', width: '100px' }}
                //             />
                //         </div>
                //         <div class="col-md-5">
                //             <div class="card-body">
                //                 <h5 class="card-title"><a href={`/profile/${user.username}`}>{user.username}</a></h5>
                //                 <p class="card-text text-muted">{user.name}</p>
                //             </div>
                //         </div>
                //         <div class="col-md-5">
                //             <div class="card-body">
                //                 <FollowProfileBtn following={following} onButtonClick={clickFollowButton} />
                //             </div>
                //         </div>
                //     </div>
                // </div>
            )
        })
    )



    return (
        <React.Fragment>
            <div className="container">
                {userListCards()}
            </div>
        </React.Fragment>
    )
}


allUser.getInitialProps = () => {
    return getAllUser().then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                users: data.users
            };
        }
    });
};

export default withRouter(allUser);