import React from 'react'

const Rightbar = () => {
    return (
        <div className='w-3/12'>
            <div className='pt-5 pr-5'>
                <div className='flex items-center'>
                    <img src="/assets/star.png" alt="" className='mr-1 h-8 w-8' />
                    <span className='font-light text-base'>
                        <b>フォロワー限定</b>イベント開催中
                    </span>
                </div>
                <img src="assets/event.jpeg" alt="" className='w-full rounded-xl my-6 mx-0' />
                <h4 className='mt-5'>オンラインの友達</h4>
                <ul>
                    <li className='flex items-center mb-5 relative'>
                        <div>
                            <img src="/assets/person/1.jpeg" alt="" className='h-8 w-8 rounded-full object-cover' />
                            <span className='bg-purple-600 absolute w-3 h-3 rounded-full -top-0.5 left-0 border-2 border-white'></span>
                        </div>
                        <span className='ml-2 font-semibold'>Shin Code</span>
                    </li>
                </ul>
                <p className=' text-lg font-semibold -mb-2'>
                    プロモーション広告
                </p>
                <img
                    src="/assets/promotion/promotion1.jpeg"
                    alt=""
                    className=' w-4/5 rounded-xl my-6 mx-0'
                />
                <p className=' text-gray-700 text-sm -mt-5'>ショッピング</p>
            </div>
        </div>
    )
}

export default Rightbar