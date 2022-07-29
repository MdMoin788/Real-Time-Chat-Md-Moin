import React, { useState } from 'react'
import Style from "../Styles/Styles.module.css"

// import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

let user;


const sendUser = () => {
    user = document.getElementById('joinInput').value;
    document.getElementById('joinInput').value = "";
}


const Join = () => {

    const [name, setname] = useState("");

    return (
        <div className={Style.Join}>
            <div className={Style.Join}>
                {/* <img src={"logo"} alt="logo" /> */}
                <h1>WE CHAT</h1>
                <input onChange={(e) => setname(e.target.value)} placeholder="Enter Your Name" type="text" className={Style.joinInput} id="joinInput" />
                <br />
                <br />
                <Link onClick={(event) => !name ? event.preventDefault() : null} to="/chat">  <button  onClick={sendUser} className={Style.joinInput}>Login In</button></Link>
            </div>
        </div>
    )
}

export default Join
export { user }
