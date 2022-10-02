import React from 'react';
import { Link } from 'react-router-dom'

import Navbar from '../Navbar/Navbar';

function Header(props) {
    return (
		<>
    <Navbar/>
			{/* <Link to="/">
                <h1>헤더입니다.</h1>
            </Link> */}
		</>
    );
}

export default Header;