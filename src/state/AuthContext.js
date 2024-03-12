import { createContext, useEffect, useReducer } from "react"
import { AuthReducer } from "./AuthReducer"

// 最初のユーザー状態を定義
const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    // user: {
    //     _id: "65e17b0c4d1689a5ba4b933e",
    //     username: "matsubara",
    //     email: "kenmatsu331@gmail.com",
    //     password: "bef57ec7f53a6d40beb640a780a639c83bc29ac8a9816f1fc6c5c6dcd93c4721",
    //     profilePicture: "",
    //     coverPicture: "",
    //     followers: [
    //         "65e2d5eded82d9cde167bfb1"
    //     ],
    //     followings: [
    //         "65e2d5eded82d9cde167bfb1"
    //     ],
    //     isAdmin: false,
    //     createdAt: "2024-03-01T06:51:56.473Z",
    //     updatedAt: "2024-03-08T03:37:44.420Z",
    //     __v: 0,
    //     desc: "阿鼻阿鼻"
    // },
    isFecthing: false,
    error: false,
}

// 状態をグローバルに管理する
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(AuthReducer,initialState);

    useEffect(() => {
        localStorage.setItem("user",JSON.stringify(state.user));
    },[state.user]);

    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFecthing :state.isFecthing,
            error: state.error,
            dispatch,
        }}>
            {children}
        </AuthContext.Provider>
    )
};