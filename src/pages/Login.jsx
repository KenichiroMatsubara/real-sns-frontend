import React, { useContext, useEffect, useRef, useState } from 'react'
import { loginCall } from '../actionCall';
import { AuthContext } from '../state/AuthContext';
import sha256 from 'crypto-js/sha256';
import { useCookies } from "react-cookie";
import { Link } from 'react-router-dom';

const Login = () => {
    const email = useRef();
    const password = useRef();
    const {user, isFecthing, error, dispatch} = useContext(AuthContext);

    // 自動ログイン
    const [onAutoLogin,setOnAutoLogin] = useState(false);
    const [cookies, setCookie,removeCookie] = useCookies(["email","hashedPassword"]);
    useEffect(() => {
        const autoLogin = () => {
            if(cookies.email ||cookies.hashedPassword){
                loginCall({
                    email: cookies.email,
                    password: cookies.hashedPassword,
                },dispatch);
            }
        }
        autoLogin();
    },[]);


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email.current.value);
        // console.log(password.current.value);
        if(onAutoLogin===true){
            setCookie("hashedPassword",sha256(password.current.value).toString());
            setCookie("email",email.current.value);
        }
        else {
            removeCookie("hashedPassword");
            removeCookie("email");
        }
        loginCall({
            email: email.current.value,
            password: sha256(password.current.value).toString(),
        },dispatch);
    }



    return (
        <div className='w-screen h-screen bg-login-blue flex items-center justify-center'>
            <div className='w-4/6 h-5/6 flex'>
                <div className='flex flex-col justify-center grow shrink basis-0'>
                    <h3 className=' text-5xl font-extrabold text-login-purple mb-2'>Real SNS</h3>
                    <span className='text-2xl'>MERNスタックSNSアプリ</span>
                </div>
                <div className='flex flex-col justify-center grow shrink basis-0' onSubmit={(e) => handleSubmit(e)}>
                    <form className=' h-96 p-5 bg-white rounded-xl flex flex-col justify-between shadow-sidebar-items'>
                        <p className=' text-center font-semibold text-xl mb-1'>ログインはこちらから</p>
                        <input
                            type="email"
                            className='h-12 rounded-xl border-1 border-gray-500 text-lg pl-5 mb-1'
                            placeholder='Eメール'
                            required
                            ref={email}
                        />
                        <input
                            type='password'
                            className='h-12 rounded-xl border-1 border-gray-500 text-lg pl-5 mb-2'
                            placeholder='パスワード'
                            required
                            ref={password}
                            minLength="6"
                        />
                        <button className='h-12 rounded-xl bg-login-purple text-white font-medium cursor-pointer mb-1'>ログイン</button>
                        <span className=' text-center text-sm text-login-purple mb-1'>パスワードを忘れた方へ</span>
                        <Link to={"/register"} className='text-center'>
                            <button className='h-12 w-4/6 self-center rounded-xl bg-login-green text-white font-medium cursor-pointer'>新しいアカウントの作成</button>
                        </Link>
                        <div className='flex items-center justify-center'>
                            <input
                                type='checkbox'
                                defaultChecked={false}
                                checked={onAutoLogin}
                                onChange={(e) => setOnAutoLogin(!onAutoLogin)}
                                className='mt-1 text-xl h-5 w-5 '
                            />
                            <span className='ml-2 text-sm text-green-600'>次回から自動ログイン</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login