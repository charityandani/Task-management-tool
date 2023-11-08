import LoginBtn from "./LoginBtn";

export default function Navbar(){

    return<nav className="nav">
        <a href="/" className="site-title">Task Management tool</a>
        <LoginBtn></LoginBtn>
    </nav>
}