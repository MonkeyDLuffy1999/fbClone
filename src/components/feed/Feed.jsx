import React from 'react'
import "./feed.css";
import {LiveTv, PhotoLibrary, InsertEmoticon} from '@mui/icons-material';

export default function Feed() {
  return (
    <div className='feed'>
    <div className='feedWrapper'>
    <div className='feedwrapper-post'>
    <div className='feedwrapper-post-status'>
    <img className='feed-profilepic' src='/assets/profile.jpg' alt='profilepic'></img>
      <input className='feed-input' placeholder="What's on your mind?"></input>
    </div>
      <hr className='feedwrapper-hr' />
    <div className='feedWrapper-other'>
      <div className='other-options'>
      <LiveTv htmlColor='tomato' className='other-options-icon'/>
          <span className='other-options-text'>Live video</span>
      </div>
      <div className='other-options'>
      <PhotoLibrary htmlColor='green' className='other-options-icon'/>
          <span className='other-options-text'>Photo/Video</span>
      </div>
      <div className='other-options'>
      <InsertEmoticon htmlColor='goldenrod' className='other-options-icon'/>
          <span className='other-options-text'>Feeling/Activity</span>
      </div>
    </div>
    </div>
   
    </div>
    </div>
  )
}
