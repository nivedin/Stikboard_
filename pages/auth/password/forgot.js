import { useState } from 'react'
import Layout from '../../../components/Layout'
import { forgotPassword } from '../../../actions/auth'



const ForgotPassword = () => {
    const [values, setValues] = useState({
        email: '',
        message: '',
        error: '',
        showForm: true
    })

    const { email, message, error, showForm } = values

    const handleChange = name => e => {
        setValues({ ...values, message: '', error: '', [name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setValues({ ...values, message: '', error: '' })
        forgotPassword({ email }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            }
            else {
                setValues({ ...values, message: data.message, email: '', showForm: false })
            }
        })
    }

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }} >{error}</div>
    )
    const showMessage = () => (
        <div className="alert alert-success" style={{ display: message ? '' : 'none' }}>{message}</div>
    )

    const passwordForgotForm = () => (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group pt-5">
                    <input type="email" required onChange={handleChange('email')} className="form-control" value={email} placeholder="Enter your email" />
                    <div className="mt-4">
                        <button className="btn btn-primary">Send reset link</button>
                    </div>
                </div>
            </form>
        </div>
    );

    return (
        <Layout>
            <div className="container">
                <h2>Forgot Password</h2>
                <hr />

                {showError()}
                {showMessage()}
                {showForm && passwordForgotForm()}
            </div>
        </Layout>
    )

}

export default ForgotPassword;