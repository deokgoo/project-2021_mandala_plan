import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import App2 from '../pages/app2';
import Main from '../pages/main';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Main}/>
        <Route path="/test" component={App2}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;