import React from 'react';
import Tilt from 'react-tilt';
import icon from './icon.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0 center'>
      <Tilt className="card br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
        <div>
          <img className="logo pt3" src={ icon } alt="icon-image-scanner"/>
          <h1 className="face-box">FaceBox</h1>
        </div>
      </Tilt>
    </div>
  )
}

export default Logo;