import Link from 'next/link';
import React from 'react'
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { loginWithGoogle, authenticate, isAuth } from '../../actions/auth';
import { GOOGLE_CLIENT_ID } from '../../config';
import GoogleLogin from 'react-google-login'


const LoginGoogle = () => {

    const responseGoogle = response => {
        console.log(response);
        const tokenId = response.tokenId
        const user = { tokenId }

        loginWithGoogle(user).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                authenticate(data, () => {
                    if (isAuth() && isAuth().role === "admin") {
                        Router.push(`/admin`);
                    } else {
                        Router.push(`/user`);
                    }

                })
            }
        })
    }
    return (
        <div className="login-with-google py-3">
            <GoogleLogin
                theme="dark"
                clientId={`${GOOGLE_CLIENT_ID}`}
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />
        </div>
    )

}

export default LoginGoogle;