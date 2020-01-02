import React, { useEffect } from 'react';
import { Mine, Discovery, Cloud, Video, Header, Mini } from '../../utils/import-lazy';
import Swiper from 'swiper/js/swiper.js';
import './style/index.scss';
// 子路由
const routes = [
  { path: '/mine', name: 'mine', title: '我 的', component: Mine },
  { path: '/discovery', name: 'discovery', title: '发 现', component: Discovery },
  { path: '/cloud', name: 'cloud', title: '云 村', component: Cloud },
  { path: '/video', name: 'video', title: '视 频', component: Video }
];

function Wrapper() {
  useEffect(() => {
    const swiper = new Swiper('.main-content', {
      wrapperClass: 'swiper-wrapper-box',
      slideClass: 'swiper-slide-item',
      spaceBetween: 20,
      hashNavigation: true,
    });
    const change = () => {
      const hash = window.location.hash;
      const path = hash.replace('#', '');
      const index = routes.findIndex(item => item.path === path);
      swiper && swiper.slideTo(index);
    };
    window.addEventListener('hashchange', change);
    return () => {
      window.removeEventListener('hashchange', change);
      swiper && swiper.destroy();
    };
  }, []);
  return (
    <>
      <Header routes={routes} />
      <div className='main-content'>
        <div className='swiper-wrapper-box'>
          {
            routes.map(tab => (
              <div key={tab.name} className='swiper-slide-item' data-hash={tab.path}>
                <tab.component />
              </div>
            ))
          }
        </div>
      </div>
      <Mini />
    </>
  );
}

export default Wrapper;
