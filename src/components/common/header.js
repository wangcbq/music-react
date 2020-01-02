import React, { useState } from 'react';
import { Icon, Image, Menu, Button, Sidebar } from 'semantic-ui-react';
import '../../assets/scss/header.scss';

export default function Header({ routes }) {
  const [visible, setVisible] = useState(false);
  const [zIndex, setZIndex] = useState(-1);
  return (
    <>
      <Sidebar.Pushable className='left-sidebar' style={{ zIndex }}>
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          onHide={() => setVisible(false)}
          onHidden={() => setZIndex(-1)}
          onVisible={() => setZIndex(1)}
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
              <div key={tab.name} className={window.location.hash === `#${tab.path}` ? 'tab-item active' : 'tab-item'} onClick={() => window.location.hash = `#${tab.path}`}>{tab.title}</div>
            ))
          }
        </div>
        <Icon name='search' color='grey' size='large' />
      </div>
    </>
  );
}
