import React, { useState, useEffect } from 'react'
import { follow, unfollow } from '../../actions/user'

const FollowProfile = ({ following, onButtonClick }) => {

    const followClick = () => {
        onButtonClick(follow)
    }
    const unfollowClick = () => {
        onButtonClick(unfollow)
    }

    return (
        <React.Fragment>
            <div className="d-inline-block">

                {
                    !following ? (
                        <button onClick={followClick} className="btn btn-sm btn-success ">
                            Follow
                        </button>

                    ) : (
                            <button onClick={unfollowClick} className="btn btn-sm btn-outline-warning ">
                                Unfollow
                            </button>
                        )


                }
                {/* {console.log(following)} */}

            </div>
        </React.Fragment>
    )
}

export default FollowProfile
