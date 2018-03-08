import React from 'react';
import { Route, IndexRoute,Router } from 'react-router';
import App from './containers/App';
import FirstContainer from './containers/FirstContainer';
import Hello from "./containers/Hello";
import MyForm from './containers/MyForm';



export default () => (

    <Route path="/" component={App}>
        <Route path='first' component={FirstContainer}/>
        <Route path='second' component={Hello}/>
        <Route path='myform' component={MyForm}/>
    </Route>

)
