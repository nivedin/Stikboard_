import { useState } from 'react'
import Link from 'next/link'
import { emailContactForm } from '../../actions/form'
import React from 'react'


const ContactForm = ({ authorEmail }) => {

    const [values, setValues] = useState({
        message: '',
        name: '',
        email: '',
        sent: false,
        buttonText: 'Send Message',
        success: false,
        error: false
    });

    const { message, email, name, sent, buttonText, success, error } = values

    const clickSubmit = (e) => {
        e.preventDefault();
        setValues({ ...values, buttonText: 'Sending...' })
        emailContactForm({ authorEmail, name, email, message }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                setValues({ ...values, sent: true, name: '', email: '', message: '', buttonText: 'Sent', success: true })
            }
        })
    }

    const handleChange = name => e => {
        setValues({ ...values, [name]: e.target.value, error: false, success: false, buttonText: 'Send Message' })

    }

    const showErrorMessage = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }} >{error}</div>
    )
    const showSuccessMessage = () => (
        <div className="alert alert-success" style={{ display: success ? '' : 'none' }}>Thank you for contacting us</div>
    )


    const contactForm = () => {
        return (
            <form onSubmit={clickSubmit}>

                <div className="form-group">
                    <label className="lead">Name</label>
                    <input type="text" onChange={handleChange('name')} className="form-control" value={name} required />
                </div>
                <div className="form-group">
                    <label className="lead">Email</label>
                    <input type="text" onChange={handleChange('email')} className="form-control" value={email} required />
                </div>
                <div className="form-group">
                    <label className="lead">Message</label>
                    <textarea rows="10" onChange={handleChange('message')} className="form-control" value={message} required></textarea>
                </div>
                <div>
                    <button className="btn btn-primary">{buttonText}</button>
                </div>
            </form>
        )
    }
    return (
        <React.Fragment>
            {showErrorMessage()}
            {showSuccessMessage()}
            <div className="container my-4">
                {contactForm()}
            </div>
        </React.Fragment>
    )
}

export default ContactForm;