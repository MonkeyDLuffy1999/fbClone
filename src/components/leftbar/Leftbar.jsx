import React from 'react'
import "./leftbar.css";
import {Chat, RssFeed, PlayCircle, Groups, Bookmark,  CalendarMonth,  School, WorkOutline, HelpOutline} from '@mui/icons-material';
import CloseFriends from '../closeFriends/CloseFriends';
import { Users } from '../../data';

export default function Leftbar() {
  return (
    <div className='leftbar'>
    <ul className='leftbar-list'>
      <li className='leftbar-list-item'>
      <RssFeed className='leftbar-icon'/>
        <span className='leftbar-text'>Feed</span>
      </li>
      <li className='leftbar-list-item'>
      <Chat className='leftbar-icon'/>
        <span className='leftbar-text'>Chats</span>
      </li>
      <li className='leftbar-list-item'>
      <PlayCircle className='leftbar-icon'/>
        <span className='leftbar-text'>Videos</span>
      </li>
      <li className='leftbar-list-item'>
      <Groups className='leftbar-icon'/>
        <span className='leftbar-text'>Groups</span>
      </li>
      <li className='leftbar-list-item'>
      <Bookmark className='leftbar-icon'/>
        <span className='leftbar-text'>Bookmarks</span>
      </li>
      <li className='leftbar-list-item'>
      <HelpOutline className='leftbar-icon'/>
        <span className='leftbar-text'>Questions</span>
      </li>
      <li className='leftbar-list-item'>
      <School className='leftbar-icon'/>
        <span className='leftbar-text'>Courses</span>
      </li>
      <li className='leftbar-list-item'>
      <CalendarMonth className='leftbar-icon'/>
        <span className='leftbar-text'>Events</span>
      </li>
      <li className='leftbar-list-item'>
      <WorkOutline className='leftbar-icon'/>
        <span className='leftbar-text'>Jobs</span>
      </li>
    </ul>
    <button className='leftbar-button'>Show More</button>
    <hr className='leftbar-hr'/>
    {Users.map(u=>(

      <CloseFriends key={u.id} user={u}/>
    ))}
    
    </div>
  )
}
