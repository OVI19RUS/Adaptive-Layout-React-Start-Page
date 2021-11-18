import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="App-header">
            <Link to='/' style={{ textDecoration: 'none' }}>
                <div className="logo">logo name</div>
            </Link>
            <Link to='/oops'>
            <div className="headerButton">
                <button className='actionButton'></button>
            </div>
            </Link>
        </div>
    )
}

export default Header
