import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Style from "../Styles/Styles.module.css"
function Login() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const handleLogin = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
   
    };
    const handleLoginSubmit = () => {
        axios.post("http://localhost:5000/login", user).then((res) => {
            localStorage.setItem("internToken", JSON.stringify(res.data.token.split(".")[0]))
            localStorage.setItem("userID", JSON.stringify(res.data.user._id))
            alert(`Login Successful  ${res.data.token.split(".")[0]}`)
            console.log('user id', res.data.user._id);
            navigate("/")
        }).catch((err) => {
            console.log("wrong email or password")
        });
    };
    return (
        <>
            <div className={Style.signUP}>
                <div className={Style.signUP2}>
                    <input
                        className={Style.inputBox}
                        type="text"
                        placeholder="Enter email here."
                        name="email"
                        onChange={handleLogin}
                    />
                    <br />
                    <br />
                    <input
                        className={Style.inputBox}
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleLogin}
                        autoComplete="off"
                    />
                    <br />
                    <br />
                    <div >
                        <button
                            className={Style.inputBox}
                            type="submit"
                            onClick={handleLoginSubmit}
                        >
                            Login
                        </button>
                    </div>
                    <br />
                    <div >
                        <Link to="/register" >
                            New Account Create  ? Click here
                            <button
                                type="submit"
                            >
                                Sign In
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login