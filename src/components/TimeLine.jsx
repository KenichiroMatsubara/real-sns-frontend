import React, { useContext, useEffect, useState } from 'react';
import Share from './Share';
import Post from './Post';
// import { Posts } from '../dummyData';
import axios from "axios";
import { AuthContext } from '../state/AuthContext';

const TimeLine = (props) => {
    const {username} = props;
    const [posts,setPosts] = useState([]);

    const {user} = useContext(AuthContext);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = username ?
            await axios.get(`/posts/profile/${username}`)// プロフィールの場合
            : await axios.get(`/posts/timeline/${user._id}`); // ホームの場合
            setPosts(response.data.sort((post1,post2) => {
                return new Date(post2.createdAt) - new Date(post1.createdAt)
            }));
        };
        fetchPosts();
    },[username,user._id]);

    return (
        <div className='w-50vw'>
            <div className='p-5'>
                <Share />
                {posts.map((post) => {
                    return <Post post={post} key={post._id} />
                })}
            </div>
        </div>
    )
}

export default TimeLine