import React from 'react'

const Login = () => {
    return (
        <div className='w-screen h-screen bg-login-blue flex items-center justify-center'>
            <div className='w-4/6 h-4/6 flex'>
                <div className='flex flex-col justify-center grow shrink basis-0'>
                    <h3 className=' text-5xl font-extrabold text-login-purple mb-2'>Real SNS</h3>
                    <span className='text-2xl'>MERNスタックSNSアプリ</span>
                </div>
                <div className='flex flex-col justify-center grow shrink basis-0'>
                    <div className='h-80 p-5 bg-white rounded-xl flex flex-col justify-between shadow-sidebar-items'>
                        <p className=' text-center font-semibold text-xl mb-1'>ログインはこちらから</p>
                        <input type="text" className='h-12 rounded-xl border-1 border-gray-500 text-lg pl-5 mb-1' placeholder='Eメール' />
                        <input type='text' className='h-12 rounded-xl border-1 border-gray-500 text-lg pl-5 mb-2' placeholder='パスワード' />
                        <button className='h-12 rounded-xl bg-login-purple text-white font-medium cursor-pointer mb-1'>ログイン</button>
                        <span className=' text-center text-sm text-login-purple mb-1'>パスワードを忘れた方へ</span>
                        <button className='h-12 w-4/6 self-center rounded-xl bg-login-green text-white font-medium cursor-pointer'>新しいアカウントの作成</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login