import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Fade from './animate/fade';

function App({ history }) {
  return (
    <div className='main'>
      <div className='logo'>
        <svg className='svg' t="1576460928495" viewBox="0 0 1024 1024" width="200" height="200">
          <path d='M469.333333 746.666667H42.666667a21.333333 21.333333 0 0 1-21.333334-21.333334V298.666667a21.333333 21.333333 0 0 1 21.333334-21.333334h426.666666a21.333333 21.333333 0 0 1 21.333334 21.333334v426.666666a21.333333 21.333333 0 0 1-21.333334 21.333334zM981.333333 746.666667H554.666667a21.333333 21.333333 0 0 1-21.333334-21.333334V298.666667a21.333333 21.333333 0 0 1 21.333334-21.333334h426.666666a21.333333 21.333333 0 0 1 21.333334 21.333334v426.666666a21.333333 21.333333 0 0 1-21.333334 21.333334z' fill='#5757B2'></path>
          <path d='M853.333333 874.666667H170.666667a21.333333 21.333333 0 0 1-21.333334-21.333334V170.666667a21.333333 21.333333 0 0 1 21.333334-21.333334h682.666666a21.333333 21.333333 0 0 1 21.333334 21.333334v682.666666a21.333333 21.333333 0 0 1-21.333334 21.333334z' fill='#8680D8'></path>
          <path d='M362.666667 746.666667c-35.306667 0-64-28.714667-64-64s28.693333-64 64-64 64 28.714667 64 64-28.693333 64-64 64zM618.666667 704c-35.306667 0-64-28.714667-64-64s28.693333-64 64-64 64 28.714667 64 64-28.693333 64-64 64z' fill='#FFFFFF'></path>
          <path d='M675.114667 282.389333a21.333333 21.333333 0 0 0-17.28-4.757333l-256 42.666667A21.333333 21.333333 0 0 0 384 341.333333v341.333334a21.333333 21.333333 0 1 0 42.666667 0V466.069333l213.333333-35.562666V640a21.333333 21.333333 0 1 0 42.666667 0V298.666667a21.333333 21.333333 0 0 0-7.552-16.277334zM426.666667 422.826667v-63.424l213.333333-35.541334v63.402667L426.666667 422.826667z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <div className='buttons'>
        <Button.Group size='large'>
          <Link to='/login'>
            <Button negative>手机号登录</Button>
          </Link>
          <Button.Or />
          <Button positive onClick={() => history.replace('/wrapper/discovery')}>开始体验</Button>
        </Button.Group>
      </div>
    </div>
  );
}

export default Fade(App);
