import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Loader } from 'semantic-ui-react';
import Loadable from 'react-loadable';

const loading = () => (<div><Loader active size='large'>loading...</Loader></div>);
const loader = loader => Loadable({ loader, loading });

const App = loader(() => import('../components/App'));
const Login = loader(() => import('../components/login'));
const Password = loader(() => import('../components/login/password'));

const routes = [
  { path: '/', name: 'home', component: App },
  { path: '/login', name: 'login', component: Login },
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
