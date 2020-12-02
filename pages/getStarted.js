import Layout from '../components/Layout.js'
import GetstartedComponent from '../components/auth/Getstarted/Getstarted'
import {withRouter} from 'next/router'
import React from 'react'

const GetStarted = ({router}) => {
    return (
       <React.Fragment>
           <GetstartedComponent/>
       </React.Fragment>
        
    )
}

export default withRouter(GetStarted);