import React from 'react';
import './topbar.css';

export default function Topbar() {
  return (
    <div className="top">
      <div className="top-icons">
        <i className="topicon fa-brands fa-facebook"></i>
        <i className="topicon fa-brands fa-square-twitter"></i>
        <i className="topicon fa-brands fa-square-pinterest"></i>
        <i className="topicon fa-brands fa-square-instagram"></i>
      </div>
      <div className="top-links">
        <ul className="toplist">
          <li className="toplistitem">Home</li>
          <li className="toplistitem">About</li>
          <li className="toplistitem">Contact</li>
          <li className="toplistitem">Write</li>
          <li className="toplistitem">Log Out</li>
        </ul>
      </div>
      <div className="top-search">
        <i className="topsearchicon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
