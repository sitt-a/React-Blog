import React from 'react'
import "./sidebar.css"
export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebaritem">
            
         <span className="sidebartitle">About me</span>
         <img className='headerimg' src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=400" alt="headerimg" />
         <p>Lorem ipsum dolor, sit 
            amet consectetur adipisicing elit. 
            Aspernatur nam officiis eum.</p>
        </div>
        <div className="sidebaritem">
       <span className="sidebartitle">categories</span>
        <ul className="sidebarlist">
        <li className="sidebarlistitem">life</li>
        <li className="sidebarlistitem">Music</li>
        <li className="sidebarlistitem">Style</li>
        <li className="sidebarlistitem">Tech</li>
        <li className="sidebarlistitem">Cinema</li>
            
            <li className="sidebarlistitem">Sport</li>

        </ul>
        </div>
        <div className="sidebaritem">
         <span className="sidebartitle">Follow Me</span>
          <div className="sidebarsocial">
          <i className="sidebaricon fa-brands fa-facebook"></i>
        <i className="sidebaricon fa-brands fa-square-twitter"></i>
        <i className="sidebaricon fa-brands fa-square-pinterest"></i>
        <i className="sidebaricon fa-brands fa-square-instagram"></i>
   
          </div>
        </div>
    </div>
  )
}
