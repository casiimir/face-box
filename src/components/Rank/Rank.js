import React from 'react';
import './Rank.css';

const Rank = ({userName}) => {
  return (
    <div className="w-50 center">
      <h2 className="white">
        <div className="white">Hi <span className="light-red">{userName}</span>,</div> when science and magic get together, <br />crazy things happen!
      </h2>
    </div>
  )
}

export default Rank;