// import './signUp.css'
import Router from "next/router";
import { useState,useEffect } from "react";
import { signin,authenticate, isAuth, loginWithGoogle } from '../../../actions/auth'
import Link from 'next/link'
import LoginGoogle from '../LoginGoogle'
import { ToastContainer, toast } from 'react-toastify';
import { Spinner } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import './signIn.css';


const SigninComponent = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    })

    const { email, password, error, loading, message, showForm } = values;

    useEffect(() => {
        isAuth() && Router.push(`/`)
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.table({ name, email, password, confirmPassword, error, loading, message, showForm });
        setValues({ ...values, loading: true, error: false })
        const user = { email, password }

        signin(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                authenticate(data,() => {
                    if (isAuth() && isAuth().role === "admin") {
                        Router.push(`/admin`);
                    }else{
                        Router.push(`/user`);
                    }

                })
            }
        })
    }

    const handleChange = name => (e) => {
        setValues({ ...values, error: false, [name]: e.target.value })
    }

    message ? toast.info(`${message}`) : ''
    error ? toast.error(`${error}`)  : ''
    // loading ? toast("Loading...") : ''

    // const showLoading = () => (
    //     // loading ? <div className="alert alert-info">Loading...</div> : ''
    //     loading ? toast("Loading...") : ''
    // )

    // const showError = () => (
    //     error ? <div className="alert alert-danger">{error}</div> : ''
    //     error ? toast.error(`${error}`)  : ''
    // )

    // const showMessage = () => (
    //     message ? <div className="alert alert-info">{message}</div> : ''
    //     message ? toast.info(`${message}`) : ''
    // )

    const signinForm = () => {
        return (
            <div className="loginMain">
                <div className="mainContainer">
                    <div className="leftContainer">
                        <div className="leftMainImg">
                            <img src="images/loginIllu.png" alt="leftImg" />
                        </div>
                    </div>
                    <div className="rightContainer">
                        <div className="heading">
                            <img src="images/cloud_og.png" alt="logo" />
                            <h1>Sign In</h1>
                        </div>
                        <div className="formContainer">
                            <form onSubmit={handleSubmit}>
                                <div className="emailContainer">
                                    <input type="email" onChange={handleChange('email')} value={email} autoComplete="true" required />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="passwordContainer">
                                    <input type="password" onChange={handleChange('password')} value={password} required />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <button type="submit" className="loginBtn">
                                {loading ?  <Spinner color="primary" style={{margin:'0 auto'}} /> : 'Login'}
                                </button><br />
                                <LoginGoogle/>
                                <Link href="/auth/password/forgot" >
                                    <a className="forgetLink">Forget Password ?</a>
                                </Link>
                                <p className="signLink">New here ? <a href="/signup">Sign Up</a></p>
                            </form>
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
            {signinForm()}
        </div>
    )
}

export default SigninComponent;