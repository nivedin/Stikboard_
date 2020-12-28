import Layout from '../Layout'
import SideBar from './Sidebar'
import SearchBar from './SearchBar'

import './css/profile.css'
const ProfileLayout = ({ children }) => {
    return (
        <Layout>
            <div className="profileContent" >
                <SideBar />
                <div className="middleSectionContainer">
                    {children}
                </div>
                <SearchBar />
                {/* <p>Footer</p> */}
            </div>
        </Layout>
    )
}

export default ProfileLayout;