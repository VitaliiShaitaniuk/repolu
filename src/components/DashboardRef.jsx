import React from 'react';
import { useAuth } from '../contexts/AuthContext';

import {Link} from "react-router-dom";


function DashboardRef() {

    const { currentUser } = useAuth()

    return (
        
            
            <div className="dashboard_button" >
                <Link to="/Dashboard">
                    <p class="DashboardRef">{currentUser.email}</p>
                </Link>
            </div>
            
        
    ) 
    
}


export default DashboardRef;