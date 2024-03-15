import React from 'react'

const CloseFriend = (props) => {
    const {user} = props;
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className='flex items-center mt-2'>
            <img src={PUBLIC_FOLDER+user.profilePicture} alt="" className='h-8 w-8 rounded-full object-cover' />
            <span className='ml-2'>{user.username}</span>
        </li>
    )
}

export default CloseFriend