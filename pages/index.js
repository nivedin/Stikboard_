import Layout from '../components/Layout.js'
import Home from '../components/Home/Home.js'
import Link from 'next/link'


const Index = () => {
    return (
        <Layout>
            <Home />
            {/* <h2>Index Page</h2>
            <Link href="/signin"><a>signin</a></Link>
            <Link href="/signup"><a>signup</a></Link> */}
        </Layout>
    )
}

export default Index;