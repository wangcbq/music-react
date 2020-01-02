import React, { useState } from 'react';
import { Icon, Image, Sidebar } from 'semantic-ui-react';
import '../../assets/scss/mini.scss';

function Mini() {
  const [visible, setVisible] = useState(false);
  const [zIndex, setZIndex] = useState(-1);
  return (
    <>
      <Sidebar.Pushable className='bottom-sidebar' style={{ zIndex }}>
        <Sidebar
          animation='overlay'
          onHide={() => setVisible(false)}
          onHidden={() => setZIndex(-1)}
          onVisible={() => setZIndex(1)}
          visible={visible}
          width='thin'
          direction='bottom'
        >
          <div className='list-box'>
            <div className='list-title'>
              <div>
                <Icon name='retweet' color='grey' />
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
              <div className='list-item'>
                <div className='sing'>
                  <span>这是歌曲名</span>
                  <span className='singer'> - 我唱的</span>
                </div>
                <Icon name='close' color='grey' />
              </div>
              <div className='list-item'>
                <div className='sing'>
                  <span>这是歌曲名</span>
                  <span className='singer'> - 我唱的</span>
                </div>
                <Icon name='close' color='grey' />
              </div>
              <div className='list-item'>
                <div className='sing'>
                  <span>这是歌曲名</span>
                  <span className='singer'> - 我唱的</span>
                </div>
                <Icon name='close' color='grey' />
              </div>
              <div className='list-item'>
                <div className='sing'>
                  <span>这是歌曲名</span>
                  <span className='singer'> - 我唱的</span>
                </div>
                <Icon name='close' color='grey' />
              </div>
              <div className='list-item'>
                <div className='sing'>
                  <span>这是歌曲名</span>
                  <span className='singer'> - 我唱的</span>
                </div>
                <Icon name='close' color='grey' />
              </div>
              <div className='list-item'>
                <div className='sing'>
                  <span>这是歌曲名</span>
                  <span className='singer'> - 我唱的</span>
                </div>
                <Icon name='close' color='grey' />
              </div>
              <div className='list-item'>
                <div className='sing'>
                  <span>这是歌曲名</span>
                  <span className='singer'> - 我唱的</span>
                </div>
                <Icon name='close' color='grey' />
              </div>
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
        <Sidebar.Pusher dimmed={visible}></Sidebar.Pusher>
      </Sidebar.Pushable>
      <div className='mini-player'>
        <Image avatar src='https://react.semantic-ui.com/logo.png' size='mini' />
        <div className='pane'>
          <div className='song-name'>this is a song www</div>
          <div className='content'>my ns ssi where ask your name and his sa skd.</div>
        </div>
        <Icon name='pause circle outline' color='red' size='big' />
        <Icon name='list' color='grey' size='large' onClick={() => setVisible(true)} />
      </div>
    </>
  );
}

export default Mini;
