import React from 'react';
import Share from './Share';
import Post from './Post';
import { Posts } from '../dummyData';

const TimeLine = () => {
    return (
        <div className='w-50vw'>
            <div className='p-5'>
                <Share />
                {Posts.map((post) => {
                    return <Post post={post} key={post.id} />
                })}
            </div>
        </div>
    )
}

export default TimeLine