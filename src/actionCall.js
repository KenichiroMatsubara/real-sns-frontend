import axios from "axios";

export const loginCall = async (user,dispatch) => {
    const REACT_APP_BASE_API_URL = process.env.REACT_APP_BASE_API_URL;
    dispatch({type: "LOGIN_START"});
    try {
        const response = await axios.post(REACT_APP_BASE_API_URL+"/auth/login",user);
        dispatch({type: "LOGIN_SUCCESS", payload: response.data});
    } catch (error) {
        dispatch({type: "LOGIN_ERROR", payload: error})
    }
}