import {useEffect} from 'react';
import './getStarted.css';
import Link from 'next/link'
import { isAuth } from '../../../actions/auth'
import Router from "next/router";



const GetstartedComponent = () => {

    useEffect(() => {
        if(isAuth()){
            isAuth().role === "admin" ? Router.push(`/admin`) : Router.push(`/user`)
        }
    },[])


    return (
        <div>
             <div className="getStartedMain">
                <div className="mainContent">
                    <div className="leftLogo">
                        <img src="images/cloudEdit.webp" alt="sbBg" className="sbBg" />
                        <div className="sbLogo">
                            <img src="images/sbLogo.png" alt="sbLogo" />
                        </div>
                    </div>
                    <div className="rightContent">
                        <div className="rightSignLogin">
                            <div className="signLoginContainer">
                                <h4>Let's stick on Stikboard</h4>
                                <p>join today</p>
                               <Link href="/signup">
                               <button   className="signUpBtn"><span>Sign up</span></button>
                               </Link>
                               <Link href="/signin">
                               <button  className="loginBtn"><span>Sign in</span></button>
                               </Link>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetstartedComponent;