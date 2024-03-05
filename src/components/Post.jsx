import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = () => {
    return (
        <div className='w-full shadow-sidebar-items rounded-lg my-4 mx-0'>
            <div className='p-2'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <img src="/assets/person/1.jpeg" alt="" className='w-4 h-4 rounded-full object-cover mr-2' />
                        <span className=' text-base font-medium mr-2'>shincode</span>
                        <span className='text-xs'>5分前</span>
                    </div>
                    <div>
                        <MoreVertIcon />
                    </div>
                </div>
                <div className='my-5 mx-0'>
                    <span>SNSを自作中</span>
                    <img src="/assets/post/1.jpeg" alt="" className='mt-5 w-full max-h-125 object-cover' />
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-center ml-1'>
                        <img src="/assets/heart.png" alt="" className='w-6 h-6 mr-1 object-contain cursor-pointer' />
                        <span className='text-base'>5人がいいねを押しました</span>
                    </div>
                    <div>
                        <span className=' cursor-pointer border-b-2 border-gray-500 text-base mr-1'>4:返信</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post