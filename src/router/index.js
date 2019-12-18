import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Loader } from 'semantic-ui-react';
import Loadable from 'react-loadable';

const loading = () => (<div><Loader active size='large'>loading...</Loader></div>);
const loader = loader => Loadable({ loader, loading });

const App = loader(() => import('../components/App'));
const Login = loader(() => import('../components/user'));
const Captcha = loader(() => import('../components/user/captcha'));
const Password = loader(() => import('../components/user/password'));

const routes = [
  { path: '/', name: 'home', component: App },
  { path: '/login', name: 'login', component: Login },
  { path: '/captcha', name: 'captcha', component: Captcha },
  { path: '/password', name: 'password', component: Password },
];

const router = () => (
  <Router>
    <Route render={({ location }) => (
      <TransitionGroup className='app'>
        <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
          <Switch location={location}>
            {routes.map(({ path, name, component }) => (
              <Route exact path={path} key={name} component={component} />
            ))}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )} />
  </Router>
);

export default router;
