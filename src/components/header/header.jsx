import React from 'react';
import './header.css';

export default function Header() {
  return (
    <div className="header">
  <div className="headertitles">
    <span className='headertitlessm'>React  and node</span>
    <span className='headertitleslg'>BLog</span>
  </div>
  <img className='headerimg' src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=400" alt="headerimg" />
    </div>
  );
}
