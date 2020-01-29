import React from 'react'
import './Header.sass'
import { Link } from 'react-router-dom'

const header = () => {
    return (
        <header className="Header">
            <p className="logo"><span className="C">C</span><span className="L">L</span></p>
            <p className="dev-text">Front End Developer...</p>
            <ul>
                <li><Link to='Portfolio'>PORTFÖLJ</Link></li>
                <li><Link to='Skills'>FÄRDIGHETER </Link></li>
                <li><Link to='/'>HEM</Link></li>
            </ul>
        </header>
    )
}

export default header