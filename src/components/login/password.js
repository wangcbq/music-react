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
  input: { padding: '1.5em 1.5em 0' },
  message: { margin: '1.5em' },
  button: { margin: '3em 1.5em' },
  buttonZ: { margin: '1.5em' }
};

function Password(props) {
  const [passwd, setPasswd] = useState('');
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    inputObj.current.focus();
  });
  const { history } = props;
  const inputObj = React.createRef();
  let errorMsg = '请输入您的密码';
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
    <div style={styleObj.container}>
      <div style={styleObj.header} onClick={() => { history.go(-1) }}>
        <Icon name='chevron left' size='large' />
        <span style={styleObj.title}>手机号登录</span>
      </div>
      <div style={styleObj.input}>
        <Input type='password' fluid ref={inputObj} placeholder='请输入密码'
          onChange={(e, data) => {
            setIsError(false);
            setPasswd(data.value);
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
          content={errorMsg}
        /> : null
      }
      <div style={isError ? styleObj.buttonZ : styleObj.button}>
        <Button fluid color='linkedin' onClick={handleNextStep}>下 一 步</Button>
      </div>
    </div>
  );
}

export default Password;
