import React from 'react';
import Tilt from 'react-tilt';
import icon from './icon.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0 center'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 75, width: 75 }} >
        <div className="Tilt-inner pa3">
          <img style={{ paddingTop: '5px'}} src={ icon } alt="icon-image-scanner"/>
        </div>
      </Tilt>
        <h1 className="ml4">FaceBox</h1>
    </div>
  )
}

export default Logo;