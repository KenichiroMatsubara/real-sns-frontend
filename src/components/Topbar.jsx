import React, { useContext, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import { AuthContext } from '../state/AuthContext';
import { logoutCall } from '../actionCall';
import { useCookies } from 'react-cookie';

export const Topbar = () => {
    const {user,isFecthing, error, dispatch} = useContext(AuthContext);
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    const [onLogout,setOnLogout] = useState(false);
    const [cookies, setCookie,removeCookie] = useCookies(["email","hashedPassword"]);

    const handleTopbarImg = (e) => {
        setOnLogout(!onLogout);
    };

    const handleLogout = (e) => {
        logoutCall(dispatch);
        removeCookie("hashedPassword");
        removeCookie("email");
        localStorage.removeItem("user");
    };


    return (
        <>
            <div className='bg-topbar-blue h-12 w-full flex items-center sticky top-0 z-50'>
                {/* topbarの左側 */}
                <div className='w-3/12'>
                    <Link to="/">
                        <span className='ml-2 text-2xl text-white font-bold'>Real SNS</span>
                    </Link>
                </div>
                {/* topbarの真ん中 */}
                <div className='w-5/12'>
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
                <div className='w-4/12 flex justify-around text-white '>
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
                    <img src={user.profilePicture ? PUBLIC_FOLDER + user.profilePicture : PUBLIC_FOLDER + "/person/noAvatar.png"} alt=''
                        className='h-8 w-8 rounded-full cursor-pointer object-cover'
                        onClick={(e) => handleTopbarImg(e)}
                    />
                </div>
            </div>
            {onLogout &&
            <div className=' w-48 h-32 absolute bg-login-blue top-0 left-0 right-0 bottom-0 m-auto z-40 border border-gray-300 rounded'>
                <div className='py-4 px-5'>
                    <p className='text-center'>ログアウトしますか？</p>
                    <div className='flex items-center justify-between mt-4'>
                        <Link to={"/login"}>
                            <button
                                className='py-1 w-16 bg-logout-blue rounded-xl hover:bg-gray-200'
                                onClick={(e) => handleLogout(e)}
                            >
                                はい
                            </button>
                        </Link>
                        <button
                            className='py-1 w-16 bg-login-blue border border-gray-500 rounded-xl hover:bg-gray-300'
                            onClick={(e) => setOnLogout(false)}
                        >
                            いいえ
                        </button>
                    </div>
                </div>
            </div>}
        </>
    )
}