import axios from 'axios';
import React, { useEffect, useRef, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import sha256 from 'crypto-js/sha256';
import { useCookies } from 'react-cookie';
import { loginCall } from '../actionCall';
import { AuthContext } from '../state/AuthContext';

const Register = () => {
    const REACT_APP_BASE_API_URL = process.env.REACT_APP_BASE_API_URL;
    const [notEqPassword,setNotEqPassword] = useState(false);
    const {user, isFecthing, error, dispatch} = useContext(AuthContext);
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConfirmation = useRef();

    const navigate = useNavigate();

    // 自動ログイン
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        // 確認用パスワードとパスワードがあっているか
        if(password.current.value !== passwordConfirmation.current.value){
            setNotEqPassword(true);
            console.log(password.current.value);
            console.log(passwordConfirmation.current.value);
        }
        else {
            try {
                // 新規登録API
                const user = {
                    username: username.current.value,
                    email: email.current.value,
                    password: sha256(password.current.value).toString(),
                }
                await axios.post(REACT_APP_BASE_API_URL + "/auth/register", user);
                navigate("/login");
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className='w-screen h-screen bg-login-blue flex items-center justify-center'>
            <div className='w-4/6 h-4/6 flex'>
                <div className='flex flex-col justify-center grow shrink basis-0'>
                    <h3 className=' text-5xl font-extrabold text-login-purple mb-2'>Real SNS</h3>
                    <span className='text-2xl'>MERNスタックSNSアプリ</span>
                </div>
                <div className='flex flex-col justify-center grow shrink basis-0'>
                    <form className=' h-96 p-5 bg-white rounded-xl flex flex-col justify-between shadow-sidebar-items' onSubmit={(e) => handleSubmit(e)}>
                        <p className=' text-center font-semibold text-xl mb-1'>新規登録はこちらから</p>
                        <input type="text" className='h-12 rounded-xl border-1 border-gray-500 text-lg pl-5 mb-1' placeholder='ユーザー名' required ref={username} />
                        <input type="email" className='h-12 rounded-xl border-1 border-gray-500 text-lg pl-5 mb-1' placeholder='Eメール' required ref={email} />
                        <input type="password" className='h-12 rounded-xl border-1 border-gray-500 text-lg pl-5 mb-1' placeholder='パスワード' required minLength={"6"} ref={password} />
                        <input type='password' className='h-12 rounded-xl border-1 border-gray-500 text-lg pl-5 mb-2' placeholder='確認用パスワード' required minLength={"6"} ref={passwordConfirmation} />
                        {notEqPassword && <span className='text-red-600 text-sm pb-1 text-center'>パスワードと確認用パスワードが異なります</span>}
                        <button className='h-12 rounded-xl bg-login-purple text-white font-medium cursor-pointer mb-1'>サインアップ</button>
                        <Link to={"/login"} className='text-center'>
                            <button className='h-12 w-4/6 self-center rounded-xl bg-login-green text-white font-medium cursor-pointer' type='submit'>ログイン</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register