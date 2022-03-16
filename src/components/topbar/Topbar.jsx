import React from 'react'
import "./topbar.css"
import {Person, Search, Message, Notifications} from '@mui/icons-material';
import Profile from '../../assets/profile.jpg';


export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
    <span> Ayamaya </span>
      </div>
      <div className='topbarCenter'>
      <div className='search-bar'>
      <Search className='search-logo'/>
      <input className='searchbar-input' placeholder='Search for friend, post or video'></input>
      </div>
      </div>
      <div className='topbarRight'>
        <div>
          <span className='topbarLinks'>Homepage</span>
          <span className='topbarLinks'>Timeline</span>
        </div>
        <div className='topbar-menu'>
          <div className='topbar-menu-tools'>
          <Person  className='topbar-menu-icons'/>
          <span className='topbar-menu-numbers'>1</span>
          </div>
          <div className='topbar-menu-tools'>
          <Message className='topbar-menu-icons'/>
          <span className='topbar-menu-numbers'>2</span>
          </div>
          <div className='topbar-menu-tools'>
          <Notifications  className='topbar-menu-icons'/>
          <span className='topbar-menu-numbers'>3</span>
          </div>
         
        </div>
        <div >
          <img className='profilepic' src={Profile} alt='img' />
        </div>
      </div>
      
    </div>
  )
}
