import React, { useState, useEffect } from 'react';
import { Button, Icon, Input, Message } from 'semantic-ui-react';
import Fade from '../animate/fade';
import '../../assets/scss/login.scss';
import api from '../../api';

function Password({ history }) {
  const [passwd, setPasswd] = useState('');
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    inputObj.current.focus();
  });
  const inputObj = React.createRef();
  let errorMsg = {
    header: 'please input your password.',
    content: '请输入您的密码.'
  };
  const handleNextStep = async () => {
    if (!passwd) {
      setIsError(true);
    } else {
      const phone = history.location.state.phone;
      if (phone) {
        const result = await api.login({ phone, password: passwd });
        console.log(result);

      }
    }
  };
  return (
    <div className='user-container'>
      <div className='u-header-bottom' onClick={() => { history.go(-1) }}>
        <Icon name='chevron left' size='large' />
        <span className='u-title'>手机号登录</span>
      </div>
      <div className='u-input-b'>
        <Input type='password' fluid ref={inputObj} placeholder='请输入密码'
          onChange={e => {
            setIsError(false);
            setPasswd(e.target.value);
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
          header={errorMsg.header}
          content={errorMsg.content}
        /> : null
      }
      <div className={isError ? 'u-button-a-z-t' : 'u-button-a'}>
        <Button fluid color='linkedin' onClick={handleNextStep}>下 一 步</Button>
      </div>
    </div>
  );
}

export default Fade(Password);
