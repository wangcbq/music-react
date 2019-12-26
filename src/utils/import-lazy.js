import React from 'react';
import { Loader } from 'semantic-ui-react';
import Loadable from 'react-loadable';

const loading = () => (<div><Loader active size='large'>loading...</Loader></div>);
export const loader = loader => Loadable({ loader, loading });

// home
export const App = loader(() => import('../components/App'));
// login
export const Login = loader(() => import('../components/login'));
export const Captcha = loader(() => import('../components/login/captcha'));
export const Password = loader(() => import('../components/login/password'));
// topic
export const Mine = loader(() => import('../components/topic/mine'));
export const Discovery = loader(() => import('../components/topic'));
export const Cloud = loader(() => import('../components/topic/cloud'));
export const Video = loader(() => import('../components/topic/video'));
export const Wrapper = loader(() => import('../components/wrapper'));
// player
export const Player = loader(() => import('../components/player'));
