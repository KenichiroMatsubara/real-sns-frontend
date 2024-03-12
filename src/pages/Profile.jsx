import React, { useEffect, useState } from 'react'
import { Topbar } from '../components/Topbar'
import Sidebar from '../components/Sidebar'
import TimeLine from '../components/TimeLine'
import Rightbar from '../components/Rightbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

    const [user,setUser] = useState({});
    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(`/users?username=${username}`);
            setUser(response.data);
        };
        fetchUser();
    },[username]);

    return (
        <>
            <Topbar />
            <div className='flex w-full bg-gray-50'>
                <Sidebar />
                <div>
                    <div className='w-full'>
                        <div className=''>
                            <div className='h-80 relative'>
                                <img
                                    src={PUBLIC_FOLDER+"/post/3.jpeg"}
                                    alt=""
                                    className='w-full h-64 object-cover'
                                />
                                <img
                                    src={user.profilePicture ? PUBLIC_FOLDER + user.profilePicture : PUBLIC_FOLDER + "/person/noAvatar.png"}
                                    alt=""
                                    className='absolute top-36 left-0 right-0 w-36 h-36 rounded-full m-auto'
                                />
                            </div>
                            <div className='flex flex-col items-center'>
                                <h4 className='text-2xl'>{user.username}</h4>
                                <span className=''>{user.desc}</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <TimeLine username={username} />
                        <Rightbar user={user} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile