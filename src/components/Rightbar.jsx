import React from 'react'
import Online from './Online'
import { Users } from '../dummyData'


const Rightbar = (props) => {
    const {user} = props;
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    const REACT_APP_BASE_API_URL = process.env.REACT_APP_BASE_API_URL;
    const HomeRightbar = () => {
        return (
            <div className=' w-30vw'>
                <div className='pt-5 pr-5'>
                    <div className='flex items-center'>
                        <img src={PUBLIC_FOLDER + "/star.png"} alt="" className='mr-1 h-8 w-8' />
                        <span className='font-light text-base'>
                            <b>フォロワー限定</b>イベント開催中!
                        </span>
                    </div>
                    <img src={PUBLIC_FOLDER + "/event.jpeg"} alt="" className='w-full rounded-xl my-6 mx-0' />
                    <h4 className='mt-5'>オンラインの友達</h4>
                    <ul>
                        {Users.map((user) => {
                            return <Online user={user} key={user.userId} />;
                        })}
                    </ul>
                    <p className=' text-lg font-semibold -mb-2'>
                        プロモーション広告
                    </p>
                    <img
                        src={PUBLIC_FOLDER + "/promotion/promotion1.jpeg"}
                        alt=""
                        className=' w-4/5 rounded-xl my-6 mx-0'
                    />
                    <p className=' text-gray-700 text-sm -mt-5'>ショッピング</p>
                </div>
            </div>
        )
    }

    const ProfileRightbar = () => {
        return (<div className='w-30vw'>
            <div className='pt-5 pr-5'>
                <h4 className='text-lg font-semibold mb-2'>ユーザー情報</h4>
                <div className='mb-8'>
                    <div className=' font-medium mr-1 text-gray-600 mb-2'>
                        <span>出身:</span>
                        <span>福岡</span>
                    </div>
                    <h4>あなたの友達</h4>
                    <div className='flex flex-wrap justify-between'>
                        <div className='flex flex-col items-center justify-center mb-5 cursor-pointer'>
                            <img src={PUBLIC_FOLDER + "/person/1.jpeg"} alt="" className=' w-16 h-16 object-cover rounded-xl' />
                            <span>Shin Code</span>
                        </div>
                        <div className='flex flex-col items-center justify-center mb-5 cursor-pointer'>
                            <img src={PUBLIC_FOLDER + "/person/1.jpeg"} alt="" className=' w-16 h-16 object-cover rounded-xl' />
                            <span>Shin Code</span>
                        </div>
                        <div className='flex flex-col items-center justify-center mb-5 cursor-pointer'>
                            <img src={PUBLIC_FOLDER + "/person/1.jpeg"} alt="" className=' w-16 h-16 object-cover rounded-xl' />
                            <span>Shin Code</span>
                        </div>
                        <div className='flex flex-col items-center justify-center mb-5 cursor-pointer'>
                            <img src={PUBLIC_FOLDER + "/person/1.jpeg"} alt="" className=' w-16 h-16 object-cover rounded-xl' />
                            <span>Shin Code</span>
                        </div>
                        <div className='flex flex-col items-center justify-center mb-5 cursor-pointer'>
                            <img src={PUBLIC_FOLDER + "/person/1.jpeg"} alt="" className=' w-16 h-16 object-cover rounded-xl' />
                            <span>Shin Code</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }

    return (
        <>
            {user ? <ProfileRightbar /> : <HomeRightbar />}
        </>
    )
}

export default Rightbar