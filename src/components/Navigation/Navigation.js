import React from 'react';
import './Navigation.css';

const Navigation = ({onRouteChange}) => {
  return (
    <nav>
      <p onClick={() => onRouteChange('signin')} className="sign-out grow pointer pa2">Sign Out</p>
    </nav>
  )
}
export default Navigation;