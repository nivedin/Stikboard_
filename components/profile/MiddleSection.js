import UserDetails from './UserDetails'
import UserPosts from './UserPosts'
import React from 'react'
import './css/profile.css'


const MiddleSection = () => {
    return (
        <React.Fragment>
            <div className="middleSectionContainer">
                <UserDetails />
                <UserPosts />
            </div>
        </React.Fragment>
    )
}

export default MiddleSection;