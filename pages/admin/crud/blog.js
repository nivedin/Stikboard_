import Layout from '../../../components/Layout'
import Admin from '../../../components/auth/Admin'
import BlogCreate from '../../../components/crud/BlogCreate'
import Link from 'next/link'


const Blog = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <h1 className="pt-5 pb-5">Create a Blog</h1>
                    <div className="row">
                        <div className="col-12">
                            <BlogCreate />
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    )
}

export default Blog;