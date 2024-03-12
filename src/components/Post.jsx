import React, { useContext, useEffect, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
import { AuthContext } from '../state/AuthContext';
// import { Users } from '../dummyData';

const Post = (props) => {
    const {post}=props;
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

    const [like,setLike] = useState(post.likes.length);
    const [isLiked,setIsLiked] = useState(false);
    const [user,setUser] = useState({});

    const {user: currentUser} = useContext(AuthContext);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(`/users?userId=${post.userId}`);
            setUser(response.data);
        };
        fetchUser();
    },[post.userId]);


    const handleLike = async () => {
        try {
            // いいねのAPIをたたく
            await axios.put(`/posts/${post._id}/like`,{userId: currentUser._id});
        } catch (error) {
            console.log(error);
        }
        setLike(isLiked ? like-1:like+1);
        setIsLiked(!isLiked);
    }

    return (
        <div className='w-full shadow-sidebar-items rounded-lg my-4 mx-0'>
            <div className='p-2'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <Link to={`/profile/${user.username}`}>
                            <img src={user.profilePicture ? PUBLIC_FOLDER + user.profilePicture : PUBLIC_FOLDER + "/person/noAvatar.png"} alt="" className='w-8 h-8 rounded-full object-cover mr-2' />
                        </Link>
                        <span className=' text-base font-medium mr-2'>{user.username}</span>
                        <span className='text-xs'>{format(post.createdAt)}</span>
                        {/* {!(post.createdAt===post.updatedAt) && <span className='text-xs text-gray-600 ml-1'>編集済み</span>} */}
                    </div>
                    <div>
                        <MoreVertIcon />
                    </div>
                </div>
                <div className='my-5 mx-0'>
                    <span>{post.desc}</span>
                    <img src={PUBLIC_FOLDER + post.img} alt="" className='mt-5 w-full max-h-125 object-cover' />
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-center ml-1'>
                        <img
                            src={PUBLIC_FOLDER + "/heart.png"}
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