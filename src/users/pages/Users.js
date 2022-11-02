import React from 'react'
import UsersList from '../components/UsersList'
const Users = () => {
  const USERS = [{
    id:'01',
    name:'Shubham Gupta',
    image:'https://hrportal.hpmindia.com/HO-Staff-Data/images/90300481.jpg',
    places:10
  }]
  return (
    <UsersList item={USERS} />
  )
}

export default Users
