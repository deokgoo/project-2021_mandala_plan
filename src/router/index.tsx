import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import App from '../pages/app';
import App2 from '../pages/app2';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={App}/>
        <Route path="/test" component={App2}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;