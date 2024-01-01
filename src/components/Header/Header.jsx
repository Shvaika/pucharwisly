import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './Header.module.css'

const Header = () => {
    return (
        <header>
            <nav>
                <ul className={css.headerPage}>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/movies'>Movies</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header