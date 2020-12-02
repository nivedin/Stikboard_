// import './signUp.css'
import Router from "next/router";
import { useState,useEffect } from "react";
import { signup ,isAuth,preSignup} from '../../../actions/auth'
import { ToastContainer, toast } from 'react-toastify';
import LoginGoogle from '../LoginGoogle'

import './signUp.css';


const SignupComponent = () => {
    const [values, setValues] = useState({
        name: 'Nivedin',
        email: 'nivedinp@gmail.com',
        password: 'qwe123',
        confirmPassword: 'qwe123',
        error: '',
        loading: false,
        message: '',
        showForm: true
    })

    const { name, email, password, confirmPassword, error, loading, message, showForm } = values

    useEffect(() => {
        isAuth() && Router.push(`/`)
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.table({ name, email, password, confirmPassword, error, loading, message, showForm });
        setValues({ ...values, loading: true, error: false })
        const user = { name, email, password }

        preSignup(user).then(data => {
            if( password !== confirmPassword){
                setValues({ ...values, error: 'Password does not match', loading: false });
            }
            else if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword:'',
                    error: '',
                    loading: false,
                    message: data.message,
                    showForm: false
                });
            }
        })
    }

    const handleChange = name => (e) => {
        setValues({ ...values, error: false,message: '', [name]: e.target.value })
    }

    message ? toast.info(`${message}`) : ''
    error ? toast.error(`${error}`)  : ''

    // const showLoading = () => (
    //     loading ? <div className="alert alert-info">Loading...</div> : ''
    // )

    // const showError = () => (
    //     error ? <div className="alert alert-danger">{error}</div> : ''
    // )

    // const showMessage = () => (
    //     message ? <div className="alert alert-info">{message}</div> : ''
    // )

    const signupForm = () => {
        return (
            <div className="registerMain">
                <div className="mainContainer">
                    <div className="leftIllustration">
                        <div className="mainIllustration">
                            <img src="images/signUpIlli2.png" alt="signUpIllu" />
                        </div>
                    </div>
                    <div className="rightContainer">
                        <div className="signUpContent">
                            <div className="heading">
                                {/* <img src="images/cloud_og.png" alt="logo" /> */}
                                <h1>Signup</h1>
                            </div>
                            <div className="formContainer">
                                <form onSubmit={handleSubmit}>
                                    <div className="nameContainer">
                                        <input type="text" label="Username" onChange={handleChange('name')} value={name} required="required" pattern=".*\S.*" />
                                        <label htmlFor="name">Name</label>

                                    </div>
                                    <div className="emailContainer">
                                        <input type="email" onChange={handleChange('email')} value={email} required />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="passwordContainer">
                                        <input type="password" onChange={handleChange('password')} value={password} required />
                                        <label htmlFor="password1">Password</label>
                                    </div>
                                    <div className="confirmPassContainer">
                                        <input type="password" onChange={handleChange('confirmPassword')} value={confirmPassword} required />
                                        <label htmlFor="password2">Confirm Password</label>
                                    </div>
                                    <button type="submit" className="submitBtn"><span>Submit</span> </button><br></br>
                                    <LoginGoogle/>
                                </form>
                                <p>Already have an account?<a href="/signin"> Signin</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
          <ToastContainer
            position="top-right"
            autoClose={2200}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
            {/* {showError()}
            {showLoading()}
            {showMessage()} */}
            {signupForm()}
        </div>
    )
}

export default SignupComponent;