import React from 'react'
import Style from "../Styles/Styles.module.css"
import { Link, useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <nav className={Style.navbar}>
                <Link  className={Style.navbar}   to={"/register"}> <button   className={Style.navbar}>   Sign Up <i class="fa-solid fa-user-plus"></i></button></Link>
            </nav>

            
        </div>
    )
}
export default Home
