import React from 'react';
import { Route, IndexRoute,Router } from 'react-router';
import App from './containers/App';
import FirstContainer from './containers/FirstContainer';



export default () => (

    <Route path="/" component={App}>
        <Route path='first' component={FirstContainer}/>
    </Route>

)
