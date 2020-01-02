import React, { useEffect } from 'react';
import Swiper from 'swiper/js/swiper.js';
import 'swiper/css/swiper.min.css';

function Banner({ loop, children }) {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      loop: loop,
      spaceBetween: 20,
      autoplay: {
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
      effect: 'flip'
    });
    const change = () => {
      if (window.location.hash === '#/discovery') {
        swiper.autoplay.start();
      } else {
        swiper.autoplay.stop();
      }
    };
    window.addEventListener('hashchange', change);
    return () => {
      window.removeEventListener('hashchange', change);
      swiper && swiper.destroy();
    };
  }, [loop]);
  return (
    <div className='swiper-container'>
      <div className='swiper-wrapper'>
        {children}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
}

export default Banner;
