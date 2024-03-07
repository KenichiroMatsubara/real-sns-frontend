import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../dummyData';

const Post = (props) => {
    const {post}=props;

    const [like,setLike] = useState(post.like);
    const [isLiked,setIsLiked] = useState(false);

    const handleLike = () => {
        setLike(isLiked ? like-1:like+1);
        setIsLiked(!isLiked);
    }

    return (
        <div className='w-full shadow-sidebar-items rounded-lg my-4 mx-0'>
            <div className='p-2'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <img src={Users.filter((user) => user.id === post.id)[0].profilePicture} alt="" className='w-8 h-8 rounded-full object-cover mr-2' />
                        <span className=' text-base font-medium mr-2'>{Users.filter((user) => user.id === post.id)[0].username}</span>
                        <span className='text-xs'>{post.date}</span>
                    </div>
                    <div>
                        <MoreVertIcon />
                    </div>
                </div>
                <div className='my-5 mx-0'>
                    <span>{post.desc}</span>
                    <img src={post.photo} alt="" className='mt-5 w-full max-h-125 object-cover' />
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-center ml-1'>
                        <img
                            src="/assets/heart.png"
                            alt=""
                            className='w-6 h-6 mr-1 object-contain cursor-pointer'
                            onClick={() => handleLike()}
                        />
                        <span className='text-base'>{like}人がいいねを押しました</span>
                    </div>
                    <div>
                        <span className=' cursor-pointer border-b-2 border-gray-500 text-base mr-1'>{post.comment}:返信</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post