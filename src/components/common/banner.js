import React, { useEffect } from 'react';
import Swiper from 'swiper/js/swiper.js';
import 'swiper/css/swiper.min.css';

function Banner({ children }) {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
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
    return () => {
      if (swiper) swiper.destroy();
    };
  });
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
