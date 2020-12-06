import Layout from '../../components/Layout'
import Admin from '../../components/auth/Admin'
import Link from 'next/link'


const AdminIndex = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid" style={{paddingTop:'140px'}}>
                    <h1 className="pt-5 pb-5">Admin Dashboard</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <Link href="/admin/crud/category-tag">
                                        <a>Create Category</a>
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link href="/admin/crud/category-tag">
                                        <a>Create Tag</a>
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <a href="/admin/crud/blog">Create Blog</a>
                                </li>
                                <li className="list-group-item">
                                    <Link href="/admin/crud/blogs">
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
                    </div>
                </div>
            </Admin>
        </Layout>
    )
}

export default AdminIndex;