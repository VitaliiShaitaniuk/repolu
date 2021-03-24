/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


import {Link} from "react-router-dom";


function LoginRef() {
    return (
        
            
            <div className="login_button" >
                <Link to="/SignUp">
                    <p class="loginRef">ВОЙТИ</p>
                </Link>
            </div>
            
        
    ) 
    
}


export default LoginRef;