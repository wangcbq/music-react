import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { App, Login, Captcha, Password, Wrapper, Player } from '../utils/import-lazy';

const routes = [
  { path: '/', name: 'home', component: App },
  { path: '/login', name: 'login', component: Login },
  { path: '/captcha', name: 'captcha', component: Captcha },
  { path: '/password', name: 'password', component: Password },
  { path: '/wrapper', name: 'wrapper', component: Wrapper },
  { path: '/player', name: 'player', component: Player },
];

const router = () => (
  <Router>
    <Route render={({ location }) => (
      <div className='app'>
        <Switch location={location}>
          {routes.map(({ path, name, component }) => (
            <Route exact={name === 'home'} path={path} key={name} component={component} />
          ))}
        </Switch>
      </div>
    )} />
  </Router>
);

export default router;
