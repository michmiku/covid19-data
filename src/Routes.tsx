import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Covid19 from './components/covid-data/Covid19'

const Routes = () => {
    return (
        <Router>
            <Route path="/" component={Covid19} />
        </Router>
    );
}
export default Routes;