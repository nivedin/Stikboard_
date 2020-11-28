import Layout from '../../../components/Layout'
import Admin from '../../../components/auth/Admin'
import BlogRead from '../../../components/crud/BlogRead'
import Link from 'next/link'


const Blog = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <h1 className="pt-5 pb-5">Manage Blog</h1>
                    <div className="row">
                        <div className="col-12">
                            <BlogRead/>
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    )
}

export default Blog;