import Layout from '../components/Layout.js'
import SigninComponent from '../components/auth/Signin/SigninComponent'
import {withRouter} from 'next/router'
import React from 'react'

const Signin = ({router}) => {
    const redirectMessage = () => {
        if(router.query.message){
            return <div className="alert alert-danger">{router.query.message}</div>
        }else{
            return;
        }
    }
    return (
       <React.Fragment>
           
        {redirectMessage()}
        <SigninComponent/>
       </React.Fragment>
        
    )
}

export default withRouter(Signin);