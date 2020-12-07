import Layout from '../../../components/Layout'
import Private from '../../../components/auth/Private'
import BlogCreate from '../../../components/crud/BlogCreate'
import Link from 'next/link'


const CreateBlog = () => {
    return (
        <Layout>
            <Private>
                <div className="container-fluid" style={{paddingTop:'140px'}}>
                    <h1 className="pt-5 pb-5">Create a Blog</h1>
                    <div className="row">
                        <div className="col-12">
                            <BlogCreate />
                        </div>
                    </div>
                </div>
            </Private>
        </Layout>
    )
}

export default CreateBlog;