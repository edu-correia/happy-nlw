import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import OrphanagesMapPage from './pages/OrphanagesMap';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage}/>
                <Route path="/orphanages" component={OrphanagesMapPage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;