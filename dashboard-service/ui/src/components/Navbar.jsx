import React from 'react'
import '../static/css/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <><nav className="navbar">
          <ul>
            <a className="active" href="/"><FontAwesomeIcon className='icon' icon={faHome} /> Home</a>
            
           
                <li><a className="nav-link" href="/dashboard">Orders</a></li>
                <li><a className="nav-link " href="/profile">Profile</a></li>
            </ul>
        </nav></>
    )
}
export default Navbar;