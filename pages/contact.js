import Layout from '../components/Layout.js'
import Link from 'next/link'
import ContactForm from '../components/form/ContactForm'


const contact = () => {



    return (
        <Layout>
            <div className="container">
            <h2>Contact Form</h2>
                <div className="row">
                    <ContactForm />
                </div>
            </div>
        </Layout>
    )
}

export default contact;