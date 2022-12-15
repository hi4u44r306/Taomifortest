import React from "react";
import './App.scss';
import Home from "../components/Pages/Home";
import Room from "../components/Pages/Room";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationMobile from "../components/fragment/NavigationMobile";

const App = () => {
    
    return (
        <>
            <Router>
                <NavigationMobile/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/room" component={Room}/>
                </Switch>
            </Router>
        </>
        
    );
}

export default App;