import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <nav id="navbar">
               <Link to="/map">
                   <button>map</button>
               </Link>

               <Link to="/">
                   <button>home</button>
               </Link>

               <Link to="/api/locations">
                   <button>locations</button>
               </Link>

               <Link to="/api/events">
                   <button>events</button>
               </Link>

               <Link to="/filter">
                   <button>filter</button>
               </Link>

               
            </nav>
        </div>
    )
}

export default Nav