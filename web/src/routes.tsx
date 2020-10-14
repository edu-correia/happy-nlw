import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import OrphanagesMapPage from './pages/OrphanagesMap';
import CreateOrphanagePage from './pages/CreateOrphanage';
import OrphanagePage from './pages/Orphanage';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage}/>
                <Route path="/app" component={OrphanagesMapPage}/>

                <Route path="/orphanages/create" component={CreateOrphanagePage}/>
                <Route path="/orphanages/:id" component={OrphanagePage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;