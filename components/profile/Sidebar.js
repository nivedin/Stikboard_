import React from 'react'
import './css/profile.css'

const SideBar = () => {
    return (
        <React.Fragment>
            <div className="sideBar" >
                <div className="sideBarContainer">
                    <ul>
                        <li>Home</li>
                        <li>Profile</li>
                        <li>More</li>
                        <a href="/user/crud/blog">Create Blog</a>
                    </ul>
                </div>
            </div>

        </React.Fragment>

    )
}

export default SideBar;