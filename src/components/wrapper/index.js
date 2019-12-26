import React, { useState } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Icon, Image, Menu, Button, Sidebar } from 'semantic-ui-react';
import '../../assets/scss/wrapper.scss';
import { Mine, Discovery, Cloud, Video } from '../../utils/import-lazy';
// 子路由
const routes = [
  { path: '/mine', name: 'mine', title: '我 的', component: Mine },
  { path: '/discovery', name: 'discovery', title: '发 现', component: Discovery },
  { path: '/cloud', name: 'cloud', title: '云 村', component: Cloud },
  { path: '/video', name: 'video', title: '视 频', component: Video }
];

function Wrapper({ match }) {
  const [visible, setVisible] = useState(false);
  const [bVisible, setBVisible] = useState(false);
  const [zIndex, setZIndex] = useState(9);
  const [bZIndex, setBZIndex] = useState(9);
  return (
    <>
      <Sidebar.Pushable className='left-sidebar' style={{ zIndex }}>
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          onHide={() => setVisible(false)}
          onHidden={() => setZIndex(9)}
          onVisible={() => setZIndex(11)}
          vertical
          visible={visible}
          width='thin'
        >
          <Menu.Item as='div' className='user-info'>
            <div className='user-avatar'>
              <Image avatar src='https://react.semantic-ui.com/logo.png' size='large' />
            </div>
            <div className='box'>
              <div className='user-detail'>
                <div className='user-name'>小小小新番</div>
                <div className='user-level'>lv.4</div>
              </div>
              <Button color='linkedin' size='mini' compact><Icon name='paw' />签 到</Button>
            </div>
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher dimmed={visible}></Sidebar.Pusher>
      </Sidebar.Pushable>
      <div className='head'>
        <Icon name='bars' color='grey' size='large' onClick={() => setVisible(true)} />
        <div className='tab-list'>
          {
            routes.map(tab => (
              <NavLink key={tab.name} to={`${match.url + tab.path}`} className="tab-item" exact>{tab.title}</NavLink>
            ))
          }
        </div>
        <Icon name='search' color='grey' size='large' />
      </div>
      <div className='main-content'>
        {
          routes.map(tab => (
            <Route key={tab.name} path={`${match.url + tab.path}`} component={tab.component} />
          ))
        }
      </div>
      <Sidebar.Pushable className='bottom-sidebar' style={{ zIndex: bZIndex }}>
        <Sidebar
          animation='overlay'
          onHide={() => setBVisible(false)}
          onHidden={() => setBZIndex(9)}
          onVisible={() => setBZIndex(11)}
          visible={bVisible}
          width='thin'
          direction='bottom'
        >
          <div className='list-box'>
            <div className='list-title'>
              <div>
                <Icon name='recycle' color='grey' />
                <span>列表循环 (1)</span>
              </div>
              <div className='right-side'>
                <div className='line'>
                  <Icon name='plus square outline' color='grey' />
                  <span>收藏全部</span>
                </div>
                <Icon name='trash alternate outline' color='grey' />
              </div>
            </div>
            <div className='list-content'>
              <div className='list-item'>
                <div className='sing'>
                  <span>这是歌曲名</span>
                  <span className='singer'> - 我唱的</span>
                </div>
                <Icon name='close' color='grey' />
              </div>
            </div>
          </div>
        </Sidebar>
        <Sidebar.Pusher dimmed={bVisible}></Sidebar.Pusher>
      </Sidebar.Pushable>
      <div className='mini-player'>
        <Image avatar src='https://react.semantic-ui.com/logo.png' size='mini' />
        <div className='pane'>
          <div className='song-name'>this is a song www</div>
          <div className='content'>my ns ssi where ask your name and his sa skd.</div>
        </div>
        <Icon name='pause circle outline' color='red' size='big' />
        <Icon name='list' color='grey' size='large' onClick={() => setBVisible(true)} />
      </div>
    </>
  );
}

export default Wrapper;
