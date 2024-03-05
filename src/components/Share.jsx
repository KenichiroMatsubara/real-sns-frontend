import React from 'react';
import ImageIcon from '@mui/icons-material/Image';
import GifIcon from '@mui/icons-material/Gif';
import FaceIcon from '@mui/icons-material/Face';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const Share = () => {
    return (
        <div className='w-full h-44 shadow-sidebar-items rounded-xl'>
            <div className='p-2'>
                <div className='flex items-center'>
                    <img src="/assets/person/1.jpeg" alt="" className='w-12 h-12 object-cover mr-3' />
                    <input
                        type='text'
                        className='w-full outline-none'
                        placeholder='今何してるの？'
                    />
                </div>
                <hr className=' m-5' />
                <div className='flex items-center relative'>
                    <div className='flex items-center ml-5 '>
                        <div className='flex items-center mr-3 cursor-pointer'>
                            <ImageIcon className='mr-1' htmlColor='blue' />
                            <span className=' text-sm font-medium'>写真</span>
                        </div>
                        <div className='flex items-center mr-3 cursor-pointer'>
                            <GifIcon className='mr-1' htmlColor='hotpink' />
                            <span>GIF</span>
                        </div>
                        <div className='flex items-center mr-3 cursor-pointer'>
                            <FaceIcon className='mr-1' htmlColor='green' />
                            <span>気持ち</span>
                        </div>
                        <div className='flex items-center mr-3 cursor-pointer'>
                            <AnalyticsIcon className='mr-1' htmlColor='red' />
                            <span>投票</span>
                        </div>
                    </div>
                    <button className='px-4 py-1 bg-topbar-blue text-white rounded-lg cursor-pointer absolute right-5'>投稿</button>
                </div>
            </div>
        </div>
    )
}

export default Share