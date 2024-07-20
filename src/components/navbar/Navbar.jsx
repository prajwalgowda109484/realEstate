import { useState } from "react"
import "./navbar.scss"
import { Link } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false);

    const user = true;
    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logoo.png
                    " alt="" />
                    <span className="EN"> EscapeNest</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="Right">

                {user ? (<div className="user">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></img>
                    <span>Phani</span>
                    <Link to="/profile" className="profile">
                        <div className="notification">3</div></Link>
                    <span>Profile</span>
                </div>) : (<><a href="/">Sign In</a>
                    <a href="/" className="register"> Sign Up</a></>)}
                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={() => setOpen(!open)} />
                </div>
                {/* <div className={open ? "menu active" : "menu"}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                    <a href="/">Sign In</a>
                    <a href="/">Sign Up</a>


                </div> */}
            </div>
        </nav>
    )
}

export default Navbar