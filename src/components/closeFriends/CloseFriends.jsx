import React from 'react'
import "./closeFriends.css"

export default function CloseFriends({user}) {
  return (
    <div className='leftbar-friends'>
    <img className='friends-img' src={user.profilePicture} alt='friend-img'></img>
    <span className='friends-text'>{user.username}</span>
  </div>
  )
}
