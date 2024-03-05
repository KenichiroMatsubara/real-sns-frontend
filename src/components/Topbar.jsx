import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export const Topbar = () => {
    return (
        <div className='bg-topbar-blue h-12 w-full flex items-center sticky top-0 z-50'>
            {/* topbarの左側 */}
            <div className='w-3/12'>
                <span className='ml-2 text-2xl text-white font-bold'>Real SNS</span>
            </div>
            {/* topbarの真ん中 */}
            <div className='w-6/12'>
                <div className='w-full h-7 bg-white rounded-3xl flex items-center'>
                    <SearchIcon className='ml-5 text-xl' />
                    <input
                        type='text'
                        placeholder='serchInput'
                        className=' border-none outline-none rounded-3xl w-4/5 pl-2'
                    />
                </div>
            </div>
            {/* topbarの右側 */}
            <div className='w-3/12 flex justify-around text-white '>
                <div className=' flex items-center '>
                    <div className='mr-4 cursor-pointer relative'>
                        <ChatIcon className='' />
                        <span className='absolute -top-1 -right-1 bg-tibc rounded-full w-4 h-4 flex items-center justify-center text-xs'>1</span>
                    </div>
                    <div className='cursor-pointer relative'>
                        <NotificationsIcon className='' />
                        <span className='absolute -top-1 -right-1 bg-tibc rounded-full w-4 h-4 flex items-center justify-center text-xs'>2</span>
                    </div>
                </div>
                <img src='/assets/person/1.jpeg' alt=''
                    className='h-8 w-8 rounded-full cursor-pointer object-cover'
                />
            </div>
        </div>
    )
}