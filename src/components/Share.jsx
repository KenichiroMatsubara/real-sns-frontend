import React, { useContext, useRef, useState } from 'react';
import ImageIcon from '@mui/icons-material/Image';
import GifIcon from '@mui/icons-material/Gif';
import FaceIcon from '@mui/icons-material/Face';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { AuthContext } from '../state/AuthContext';
import axios from 'axios';

const Share = () => {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    const REACT_APP_BASE_API_URL = process.env.REACT_APP_BASE_API_URL;
    const {user} = useContext(AuthContext);
    const [file,setFile] = useState(null);

    const desc = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
            likes: [],
        };
        if(file){
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name",fileName);
            data.append("file",file);
            newPost.img = fileName;
            try {
                // 画像APIを叩く
                await axios.post(REACT_APP_BASE_API_URL + "/upload",data)
            } catch (error) {
                console.log(error);
            }
        }
        try {
            await axios.post(REACT_APP_BASE_API_URL + "/posts",newPost);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='w-full h-44 shadow-sidebar-items rounded-xl'>
            <div className='p-2'>
                <div className='flex items-center' >
                    <img src={user.profilePicture ? PUBLIC_FOLDER+user.profilePicture : PUBLIC_FOLDER + "/person/noAvatar.png"} alt="" className='w-12 h-12 object-cover mr-3' />
                    <input
                        type='text'
                        className='w-full outline-none'
                        placeholder='今何してるの？'
                        ref={desc}
                    />
                </div>
                <hr className=' m-5' />
                <form className='flex items-center relative' onSubmit={(e) => handleSubmit(e)}>
                    <div className='flex items-center ml-5 '>
                        <label className='flex items-center mr-3 cursor-pointer' htmlFor='file'>
                            <ImageIcon className='mr-1' htmlColor='blue' />
                            <span className=' text-sm font-medium'>写真</span>
                            <input
                                type="file" id='file'
                                accept='.png,.jpeg,.jpg'
                                className='hidden'
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </label>
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
                    <button
                        className='px-4 py-1 bg-topbar-blue text-white rounded-lg cursor-pointer absolute right-5'
                        type='submit'
                    >投稿</button>
                </form>
            </div>
        </div>
    )
}

export default Share