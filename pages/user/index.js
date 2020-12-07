import Layout from '../../components/Layout'
import Private from '../../components/auth/Private'
import Link from 'next/link'
import SideBar from '../../components/profile/Sidebar'
import MiddleSection from '../../components/profile/MiddleSection'
import SearchBar from '../../components/profile/SearchBar'


const UserIndex = () => {
    return (
        <Layout>
            <Private>
            <div className="profileContent" style={{display:'flex',paddingTop:'100px'}}>
                    {/* <h1 className="pt-5 pb-5">User Dashboard</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <a href="/user/crud/blog">Create Blog</a>
                                </li>
                                <li className="list-group-item">
                                    <Link href="/user/crud/blogs">
                                        <a>Update Blog</a>
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link href="/user/update">
                                        <a>Update Profile</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8">right</div>
                    </div> */}
                    <SideBar />
                    <MiddleSection/>
                    <SearchBar/>

                </div>
            </Private>
        </Layout>
    )
}

export default UserIndex;