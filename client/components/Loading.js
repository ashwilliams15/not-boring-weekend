import React from 'react';
import logo from '../../public/short-logo.png';

export const Loading = () => {
  return (
    <div>
      <h1 id='loading'> LOADING.....</h1>
      <img src={logo} alt='logo' className='rotating'/>
    </div>
  )
}

export default Loading;
