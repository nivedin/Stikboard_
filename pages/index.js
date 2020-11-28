import Layout from '../components/Layout.js'
import Link from 'next/link'


const Index = () => {
    return (
        <Layout>
            <h2>Index Page</h2>
            <Link href="/signin"><a>signin</a></Link>
            <Link href="/signup"><a>signup</a></Link>

        </Layout>
    )
}

export default Index;