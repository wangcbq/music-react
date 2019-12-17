import React, { useState, useEffect } from 'react';
import { Button, Icon, Input, Message } from 'semantic-ui-react';
import api from '../../api';

const styleObj = {
  container: {
    position: 'absolute',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%'
  },
  header: { padding: '4% 3% 8%' },
  title: { fontSize: '1.1em', verticalAlign: 'middle' },
  notice: { paddingLeft: '1.5em' },
  input: { padding: '3em 1.5em 0' },
  message: { margin: '1.5em' },
  button: { margin: '3em 1.5em' },
  buttonZ: { margin: '0 1.5em' }
};

function Login(props) {
  const [phone, setPhone] = useState('');
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    inputObj.current.focus();
  });
  const inputObj = React.createRef();
  const { history } = props;
  const handleNextStep = async () => {
    if (/^[1]([3-9])[0-9]{9}$/.test(phone)) {
      setIsError(false);
      const result = await api.checkRegister(phone);
      if (result.code === 200) {
        if (result.exist === 1) {
          if (result.hasPassword) {
            history.push({ pathname: '/password', state: { phone } });
          }
        }
      }
    } else {
      setIsError(true);
    }
  };
  return (
    <div style={styleObj.container}>
      <div style={styleObj.header} onClick={() => { history.go(-1) }}>
        <Icon name='chevron left' size='large' />
        <span style={styleObj.title}>手机号登录</span>
      </div>
      <div style={styleObj.notice}>
        <Icon name='bell outline' />
        <span>未注册的手机号将自动创建账号</span>
      </div>
      <div style={styleObj.input}>
        <Input maxLength='11' label='+86' fluid ref={inputObj}
          onChange={(e, data) => {
            setIsError(false);
            setPhone(data.value);
          }}
          onKeyDown={e => {
            const keyCode = e.keyCode || e.which;
            if (keyCode === 13) handleNextStep();
          }} />
      </div>
      {
        isError ? <Message
          style={styleObj.message}
          error
          header='error'
          content='请输入正确的手机号码.'
        /> : null
      }
      <div style={isError ? styleObj.buttonZ : styleObj.button}>
        <Button fluid color='linkedin' onClick={handleNextStep}>下 一 步</Button>
      </div>
    </div>
  );
}

export default Login;
