import React from 'react'
import Share from './Share'
import Post from './Post'

const TimeLine = () => {
    return (
        <div className='w-7/12'>
            <div className='p-5'>
                <Share />
                <Post />
            </div>
        </div>
    )
}

export default TimeLine