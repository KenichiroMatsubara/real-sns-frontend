import React from 'react'

const Online = (props) => {
    const {user,key}=props;
    return (
        <li className='flex items-center mb-5 relative'>
            <div>
                <img src={user.profilePicture} alt="" className='h-8 w-8 rounded-full object-cover' />
                <span className='bg-purple-600 absolute w-3 h-3 rounded-full -top-0.5 left-0 border-2 border-white'></span>
            </div>
            <span className='ml-2 font-semibold'>{user.username}</span>
        </li>
    )
}

export default Online