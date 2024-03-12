import React from 'react'
import { Topbar } from '../components/Topbar'
import Sidebar from '../components/Sidebar'
import TimeLine from '../components/TimeLine'
import Rightbar from '../components/Rightbar'

export const Home = () => {
    return (
        <>
            <Topbar />
            <div className='flex w-full bg-gray-50'>
                <Sidebar />
                <TimeLine />
                <Rightbar />
            </div>
        </>
    )
}