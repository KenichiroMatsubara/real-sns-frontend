import React, { useContext } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseFriend from './CloseFriend';
import { Users } from '../dummyData';
import { Link } from 'react-router-dom';
import { AuthContext } from '../state/AuthContext';


const Sidebar = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='flex m-0 p-0 w-20vw border-gray-700'>
            <div className='p-2 w-full'>
                <ul>
                    <Link to="/">
                        <li className='flex p-1 mb-2 items-center rounded-xl shadow-sidebar-items bg-white cursor-pointer hover:shadow-none hover:translate-y-1 duration-300'>
                            <HomeIcon className='' />
                            <span className='pl-2'>ホーム</span>
                        </li>
                    </Link>
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
                    <Link to={`/profile/${user.username}`}>
                        <li className='flex p-1 mb-2 items-center rounded-xl shadow-sidebar-items bg-white cursor-pointer hover:shadow-none hover:translate-y-1 duration-300'>
                            <PersonIcon className='' />
                            <span className='pl-2'>プロフィール</span>
                        </li>
                    </Link>
                    <li className='flex p-1 mb-2 items-center rounded-xl shadow-sidebar-items bg-white cursor-pointer hover:shadow-none hover:translate-y-1 duration-300'>
                        <SettingsIcon className='' />
                        <span className='pl-2'>設定</span>
                    </li>
                </ul>
                <hr className='my-2' />
                <ul>
                    {Users.map((user) => {
                        return <CloseFriend user={user} key={user.id} />
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar