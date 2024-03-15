import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "./state/AuthContext";
import { useContext, useEffect } from "react";


function App() {
    const {user, isFecthing, error, dispatch} = useContext(AuthContext);

    return (
        <Router>
            <Routes>
                <Route path="/" element={user ? <Home /> : <Register />} />
                <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
                <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
                <Route path="/profile/:username" element={<Profile />} />
            </Routes>
        </Router>
    );
}

export default App;
