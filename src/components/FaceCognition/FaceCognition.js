import React from 'react';
import './FaceCognition.css';

const FaceCognition = ({ inputImg, box }) => {
  return (
    <div className="face center mt4">
      <div className="absolute image-card">
        <img className="face shadow-5 grow" id="inputimage" src={ inputImg } width="300" height="auto"/>
          <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        </div>
      </div>
  )
}

export default FaceCognition;