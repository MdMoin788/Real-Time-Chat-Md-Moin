import React, { useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import Style from "../Styles/Styles.module.css"

const SignUp = () => {
    const [toggle, setToggle] = useState(true)
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const handleSignUp = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        user.email != "" && user.password != "" ? setToggle(false) : <></>
    };
    const handleSignUpSubmit = () => {
        axios.post("http://localhost:5000/register", user).then((res) => {
            alert(`Register Successful ${res.data.token}`)
            console.log(res.data.token);
        });
    };
    return (
        <div className={Style.signUP}>
            <div className={Style.signUP2}>
                <input
                    type="text"
                    className={Style.inputBox}
                    placeholder="Enter email here."
                    name="email"
                    onChange={handleSignUp}
                />
                <br />
                <br />
                <input
                    type="password"
                    className={Style.inputBox}
                    placeholder="Password"
                    name="password"
                    onChange={handleSignUp}
                />
                <br />
                <br />
                <Link to="/login">
                    <button
                        className={Style.inputBox}
                        type="submit"
                        onClick={handleSignUpSubmit}
                        disabled={toggle}
                    >
                        Register
                    </button>
                </Link>
                <br />
                <br />
                <Link to="/login" className={Style.link_btn}>
                    Already a user? Click here
                    <button
                        className={Style.submits}
                        type="submit"
                    >
                        Sign In
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default SignUp
