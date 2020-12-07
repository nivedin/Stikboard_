import { useState } from 'react'
import Layout from '../../../../components/Layout'
import { withRouter } from 'next/router'
import { resetPassword } from '../../../../actions/auth'

const ResetPassword = ({ router }) => {

    const [values, setValues] = useState({
        name: '',
        newPassword: '',
        error: '',
        message: '',
        showForm: true
    })

    const { name, showForm, newPassword, error, message } = values

    const handleSubmit = e => {
        e.preventDefault()
        resetPassword({
            newPassword,
            resetPasswordLink: router.query.id
        }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            }
            else {
                setValues({ ...values, message: data.message, newPassword: '', showForm: false, error: false })
            }
        })
    }

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }} >{error}</div>
    )
    const showMessage = () => (
        <div className="alert alert-success" style={{ display: message ? '' : 'none' }}>{message}</div>
    )


    const passwordResetForm = () => (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group pt-5">
                    <input type="password" required onChange={e => setValues({ ...values, newPassword: e.target.value })} className="form-control" value={newPassword} placeholder="Enter your new password" />
                    <div className="mt-4">
                        <button className="btn btn-primary">Change Password</button>
                    </div>
                </div>
            </form>
        </div>
    );

    return (
        <Layout>
            <div className="container" style={{paddingTop:'140px'}}>
                <h2>Reset Password</h2>
                <hr />

                {showError()}
                {showMessage()}
                {showForm && passwordResetForm()}
            </div>
        </Layout>
    )

}


export default withRouter(ResetPassword);

