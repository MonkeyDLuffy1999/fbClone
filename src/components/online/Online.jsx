import React from 'react'
import "./online.css"

export default function Online({user}) {
  return (
    <div> <li className='listItem'>
    <span className='circle'></span>
      <img src={user.profilePicture} className='profilepic' alt='img'></img>
      <span className='listName'>{user.username}</span>
    </li></div>
  )
}
