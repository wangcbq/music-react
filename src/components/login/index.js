import React, { useState, useEffect } from 'react';
import { Button, Icon, Input, Message } from 'semantic-ui-react';
import Fade from '../animate/fade';
import '../../assets/scss/login.scss';
import api from '../../api';

function Login({ history }) {
  const [phone, setPhone] = useState('');
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    inputObj.current.focus();
  });
  const inputObj = React.createRef();
  const handleNextStep = async () => {
    if (/^[1]([3-9])[0-9]{9}$/.test(phone)) {
      setIsError(false);
      const result = await api.checkRegister(phone);
      if (result.code === 200) {
        if (result.exist === 1) {
          if (result.hasPassword) {
            history.push({ pathname: '/password', state: { phone } });
          }
        } else {
          await api.captchaSend(phone);
          history.push({ pathname: '/captcha', state: { phone } });
        }
      }
    } else {
      setIsError(true);
    }
  };
  return (
    <div className='user-container'>
      <div className='u-header-bottom' onClick={() => { history.go(-1) }}>
        <Icon name='chevron left' size='large' />
        <span className='u-title'>手机号登录</span>
      </div>
      <div className='u-notice'>
        <Icon name='bell outline' />
        <span>未注册的手机号将自动创建账号</span>
      </div>
      <div className='u-input-a'>
        <Input label='+86' type='number' fluid ref={inputObj}
          placeholder='请输入手机号码'
          onInput={e => {
            const val = e.target.value;
            if (val.length > 11) e.target.value = val.slice(0, 11);
          }}
          onChange={e => {
            setIsError(false);
            setPhone(e.target.value);
          }}
          onKeyDown={e => {
            const keyCode = e.keyCode || e.which;
            if (keyCode === 13) handleNextStep();
          }} />
      </div>
      {
        isError ? <Message
          className='u-message'
          error
          header='please input the correct mobile number.'
          content='请输入正确的手机号码.'
        /> : null
      }
      <div className={isError ? 'u-button-a-z' : 'u-button-a'}>
        <Button fluid color='linkedin' onClick={handleNextStep}>下 一 步</Button>
      </div>
    </div>
  );
}

export default Fade(Login);
