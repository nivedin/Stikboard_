import Layout from '../../../components/Layout'
import Private from '../../../components/auth/Private'
import BlogRead from '../../../components/crud/BlogRead'
import Link from 'next/link'
import {isAuth} from '../../../actions/auth'


const Blog = () => {
    const username = isAuth() && isAuth().username;

    return (
        <Layout>
            <Private>
                <div className="container-fluid">
                    <h1 className="pt-5 pb-5">Manage Blog</h1>
                    <div className="row">
                        <div className="col-12">
                            <BlogRead username={username}/>
                        </div>
                    </div>
                </div>
            </Private>
        </Layout>
    )
}

export default Blog;