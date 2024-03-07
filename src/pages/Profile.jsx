import React from 'react'
import { Topbar } from '../components/Topbar'
import Sidebar from '../components/Sidebar'
import TimeLine from '../components/TimeLine'
import Rightbar from '../components/Rightbar'
import { useWindowSize } from '../hooks/useWindowSize'

const Profile = () => {
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
                                    src="/assets/post/3.jpeg"
                                    alt=""
                                    className='w-full h-64 object-cover'
                                />
                                <img
                                    src="/assets/person/1.jpeg"
                                    alt=""
                                    className='absolute top-36 left-0 right-0 w-36 h-36 rounded-full m-auto bg-gray-100 p-0.5'
                                />
                            </div>
                            <div className='flex flex-col items-center'>
                                <h4 className='text-2xl'>Shin Code</h4>
                                <span className=''>阿鼻叫喚</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <TimeLine />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
            W:{useWindowSize().windowWidth} H:{useWindowSize().windowHeight}
        </>
    )
}

export default Profile