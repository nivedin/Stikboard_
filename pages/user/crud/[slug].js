import Layout from '../../../components/Layout'
import Private from '../../../components/auth/Private'
import BlogUpdate from '../../../components/crud/BlogUpdate'
import Link from 'next/link'


const Blog = () => {
    return (
        <Layout>
            <Private>
                <div className="container-fluid">
                    <h1 className="pt-5 pb-5">Update Blog</h1>
                    <div className="row">
                        <div className="col-12">
                            <BlogUpdate />
                        </div>
                    </div>
                </div>
            </Private>
        </Layout>
    )
}

export default Blog;