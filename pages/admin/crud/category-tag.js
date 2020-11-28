import Layout from '../../../components/Layout'
import Admin from '../../../components/auth/Admin'
import Category from '../../../components/crud/Category'
import Tag from '../../../components/crud/Tag'
import Link from 'next/link'


const CategoryTag = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <h1 className="pt-5 pb-5">Manage Categories and Tags</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <Category />
                        </div>
                        <div className="col-md-6">
                            <Tag/>
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    )
}

export default CategoryTag;