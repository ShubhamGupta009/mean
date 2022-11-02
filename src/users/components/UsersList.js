import React from 'react'
import UsersItem from './UsersItem';
import './UsersList.css'
const UsersList = props => {
  if(props.item.length === 0) {
    return (
        <div className='center'>
            <h3>No Users Found</h3>
        </div>
    )
  }
    return(
        <ul className='users-list'>
            {
                props.item.map(user => (
                    <UsersItem 
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    placeCount={user.places}
                    image={user.image} />
                ))
            }
        </ul>
    )
  }
export default UsersList
