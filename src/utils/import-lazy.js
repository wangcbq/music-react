import React from 'react';
import { Loader } from 'semantic-ui-react';
import Loadable from 'react-loadable';

const loading = () => (<div><Loader active size='large'>loading...</Loader></div>);
const noloading = () => null;
export const loader = (loader, flag) => Loadable({ loader, loading: flag ? loading : noloading });

/* pages */
// home
export const App = loader(() => import('../pages/App'), true);
// login
export const Login = loader(() => import('../pages/login'), true);
export const Captcha = loader(() => import('../pages/login/captcha'), true);
export const Password = loader(() => import('../pages/login/password'), true);
// topic
export const Mine = loader(() => import('../pages/topic/mine'));
export const Discovery = loader(() => import('../pages/topic'));
export const Cloud = loader(() => import('../pages/topic/cloud'));
export const Video = loader(() => import('../pages/topic/video'));
export const Wrapper = loader(() => import('../pages/wrapper'), true);
// detail
export const SongSheet = loader(() => import('../pages/detail/song-sheet'), true);
// player
export const Player = loader(() => import('../pages/player'));

/* components */
// banner
export const Banner = loader(() => import('../components/common/banner'));
export const Header = loader(() => import('../components/common/header'));
export const Mini = loader(() => import('../components/common/mini'));
export const SheetList = loader(() => import('../components/common/sheet-list'));
