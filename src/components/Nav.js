import { Link } from "react-router-dom"

function Nav(){
    return(
        <nav className="navbar">
            <Link to="/" className="logo">Venom meetings</Link>
            <div className="links">
                <Link to='/upcoming-meeting'>Upcoming meetings</Link>
                <Link to='/past-meeting'>Past meetings</Link>
                <Link to='/add-meeting'>Add meetings</Link>
            </div>
        </nav>
    )
}

export default Nav