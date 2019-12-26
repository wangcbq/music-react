import React, { useState, useEffect } from 'react';
import { Button, Icon, Message } from 'semantic-ui-react';
import Fade from '../animate/fade';
import '../../assets/scss/login.scss';
import api from '../../api';

function Captcha({ history }) {
  const [captcha, setCaptcha] = useState('');
  const [isError, setIsError] = useState(false);
  let [countDown, setCountDown] = useState(60);
  useEffect(() => {
    inputFocus();
    return () => {
      if (timer) clearInterval(timer);
    };
  });
  const inputObj = React.createRef();
  let timer = null;
  // 倒计时60s
  const countDownStart = () => {
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
      if (countDown > 0) {
        setCountDown(countDown - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };
  countDownStart();
  const phone = history.location.state && history.location.state.phone;
  const phoneNum = phone ? (() => phone.slice(0, 3) + '*'.repeat(4) + phone.slice(-4))() : '';
  const inputFocus = () => inputObj.current.focus();
  // 检验验证码
  const captchaVerify = async () => {
    if (phone && captcha) {
      try {
        const result = await api.captchaVerify({ phone, captcha });
        if (result.code === 200) {
          console.log('成功');
        } else {
          setIsError(true);
        }
      } catch (e) {
        setIsError(true);
      }
    }
  };
  return (
    <div className='user-container'>
      <div className='u-header' onClick={() => { history.go(-1) }}>
        <Icon name='chevron left' size='large' />
        <span className='u-title'>手机号验证</span>
      </div>
      <div className='u-notice'>
        <Button className='u-button-b' disabled={countDown > 0}
          floated='right' basic size='small' onClick={() => {
            setCountDown(60);
            countDownStart();
          }}>
          {countDown > 0 ? countDown + 's' : '重新获取'}
        </Button>
        <h4>验证码已发送至</h4>
        <span className='u-phone'>+86 {phoneNum}</span>
      </div>
      <div className='u-input-a u-input-c'>
        <input className='fake-input' type='number' ref={inputObj} value={captcha}
          onInput={e => {
            const val = e.target.value;
            if (val.length > 4) e.target.value = val.slice(0, 4);
            if (val.length === 4) captchaVerify();
          }}
          onChange={e => {
            setIsError(false);
            setCaptcha(e.target.value + '');
          }} />
        <div onClick={inputFocus} className='u-number'>{captcha[0] || ''}<i className={captcha.length > 0 ? 'u-line active' : 'u-line'}></i></div>
        <div onClick={inputFocus} className='u-number'>{captcha[1] || ''}<i className={captcha.length > 1 ? 'u-line active' : 'u-line'}></i></div>
        <div onClick={inputFocus} className='u-number'>{captcha[2] || ''}<i className={captcha.length > 2 ? 'u-line active' : 'u-line'}></i></div>
        <div onClick={inputFocus} className='u-number'>{captcha[3] || ''}<i className={captcha.length > 3 ? 'u-line active' : 'u-line'}></i></div>
      </div>
      {
        isError ? <Message
          className='u-message'
          error
          header='verification code error.'
          content='验证码错误.'
        /> : null
      }
    </div>
  );
}

export default Fade(Captcha);
