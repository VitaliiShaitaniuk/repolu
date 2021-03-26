/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import {Auto, Lot, SignUp} from './pages';
import { Dashboard, Login } from './components';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
import Home from './components/Home';






//BrowserRouter as Router, Switch,



class App extends Component {
  render() {

    
    return (
      
        <div className="wrapper">
        
        <Router>
        
          <AuthProvider>
          
            <Switch>
            
              <Route path="/" component={Home} exact/>
              <PrivateRoute path="/UpdateProfile" component={UpdateProfile} />
              <Route path="/Auto" component={Auto}  />
              <Route path="/Lot" component={Lot}  />
              <Route path={`/SignUp`} component={SignUp} exact/>
              <Route path="/Login" component={Login}  />
              <Route path="/forgot-password" component={ForgotPassword}/>
              <PrivateRoute path="/Dashboard" component={Dashboard}/>
              
              
              
            </Switch> 
            
          </AuthProvider>
          
        </Router>
         
          
        
      
        </div>
      
      
    )
  }
}

export default App
