import React, {useState} from 'react';
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Navbar.css';
import { MenuItems } from "./MenuItems";
import Button from '../Button'
import StyledLink from '../StyledLink';

function Navbar () {

    const [clicked, setClicked] = useState(false);
    //false = bars, true = times
    const handleClick = () => {
        setClicked(!clicked);
        console.log(clicked);
    }

    return (
            <nav className="Navbar">
                <StyledLink to="/"><h1 className="navbar-logo">석천교회<i className="fab fa-react"></i></h1></StyledLink>
                <div className="menu-icon" onClick={handleClick}>
                    <FontAwesomeIcon icon={clicked ? faTimes : faBars} className={clicked ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index)=>{
                        return (
                                <li key={index}>
                                    <StyledLink to={item.url}> <p className={item.cName}>{item.title}</p></StyledLink>
                                </li>
                        )
                    })}
                </ul>
                <Button>Sign Up</Button>
            </nav>
        )
}
export default Navbar