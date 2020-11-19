import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <p className="f5">
        {'( This Magic App will reveal faces in your photo. Git it a try! )'}
      </p>
      <div className='center'>
        <div className="form center pa4 br3 shadow-5">
          <input onChange={onInputChange} className="f4 pa2 w-70 center" type="text" placeholder="Enter here the url..."/>
          <button onClick={onSubmit} className="w-30 grow f4 link ph3 pv2 dib white bg-light-red pointer">Reveal</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;