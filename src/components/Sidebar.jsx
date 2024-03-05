import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';


const Sidebar = () => {
    return (
        <div className='flex m-0 p-0 w-2/12 border-gray-700'>
            <div className='p-2 w-full'>
                <ul>
                    <li className='flex p-1 mb-2 items-center rounded-xl shadow-sidebar-items bg-white cursor-pointer hover:shadow-none hover:translate-y-1 duration-300'>
                        <HomeIcon className='' />
                        <span className='pl-2'>ホーム</span>
                    </li>
                    <li className='flex p-1 mb-2 items-center rounded-xl shadow-sidebar-items bg-white cursor-pointer hover:shadow-none hover:translate-y-1 duration-300'>
                        <SearchIcon className='' />
                        <span className='pl-2'>検索</span>
                    </li>
                    <li className='flex p-1 mb-2 items-center rounded-xl shadow-sidebar-items bg-white cursor-pointer hover:shadow-none hover:translate-y-1 duration-300'>
                        <NotificationsIcon className='' />
                        <span className='pl-2'>通知</span>
                    </li>
                    <li className='flex p-1 mb-2 items-center rounded-xl shadow-sidebar-items bg-white cursor-pointer hover:shadow-none hover:translate-y-1 duration-300'>
                        <ChatIcon className='' />
                        <span className='pl-2'>メッセージ</span>
                    </li>
                    <li className='flex p-1 mb-2 items-center rounded-xl shadow-sidebar-items bg-white cursor-pointer hover:shadow-none hover:translate-y-1 duration-300'>
                        <BookmarkIcon className='' />
                        <span className='pl-2'>ブックマーク</span>
                    </li>
                    <li className='flex p-1 mb-2 items-center rounded-xl shadow-sidebar-items bg-white cursor-pointer hover:shadow-none hover:translate-y-1 duration-300'>
                        <PersonIcon className='' />
                        <span className='pl-2'>プロフィール</span>
                    </li>
                    <li className='flex p-1 mb-2 items-center rounded-xl shadow-sidebar-items bg-white cursor-pointer hover:shadow-none hover:translate-y-1 duration-300'>
                        <SettingsIcon className='' />
                        <span className='pl-2'>設定</span>
                    </li>
                </ul>
                <hr className='my-2' />
                <ul>
                    <li className='flex items-center mt-2'>
                        <img src="/assets/person/2.jpeg" alt="" className='h-8 w-8 rounded-full object-cover' />
                        <span className='ml-2'>ShinCode</span>
                    </li>
                    <li className='flex items-center mt-2'>
                        <img src="/assets/person/3.jpeg" alt="" className='h-8 w-8 rounded-full object-cover' />
                        <span className='ml-2'>ShinCode</span>
                    </li>
                    <li className='flex items-center mt-2'>
                        <img src="/assets/person/4.jpeg" alt="" className='h-8 w-8 rounded-full object-cover' />
                        <span className='ml-2'>ShinCode</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar