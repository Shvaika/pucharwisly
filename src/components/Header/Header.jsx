import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './Header.module.css'

const ACTIVE_LINK='#f5dada'
const Header = () => {

   

    return (
        <header className={css.header}>
            <nav className={css.nav}>
                <input type="checkbox" id='nav-check' className={css.navCheck} />

                <div className={css.navHeader}>
                    <div className={css.titleLink } to='/'>
                        Puchar Wisły 2024
                    </div>
                </div>
                
                 <div className={css.navBtn}>
                    <label htmlFor="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                
                <ul className={css.pageNav}>
                    <li>
                        <NavLink className={css.navLink} to='/'
                        style={({ isActive }) => {
                  return isActive ? { color: ACTIVE_LINK } : {};
                }}>Strona główna</NavLink>
                    </li>
                    <li>
                        <NavLink className={css.navLink} to='/aktualnosci'
                        style={({ isActive }) => {
                  return isActive ? { color: ACTIVE_LINK } : {};
                }}>Aktualności</NavLink>
                    </li>
                    <li>
                        <NavLink className={css.navLink} to='/komunikaty'
                        style={({ isActive }) => {
                  return isActive ? { color: ACTIVE_LINK } : {};
                }}>Komunikaty</NavLink>
                    </li>
                    <li>
                        <NavLink className={css.navLink} target='_blank' to='https://www.orienteering.org.pl/pzos/detail/competition/588'>Zgłoszenia</NavLink>
                    </li>
                    <li>
                        <NavLink className={css.navLink} to='/teren'
                        style={({ isActive }) => {
                  return isActive ? { color: ACTIVE_LINK } : {};
                }}>Teren</NavLink>
                    </li>
                    <li>
                        <NavLink className={css.navLink} to='/kontakt'
                        style={({ isActive }) => {
                  return isActive ? { color: ACTIVE_LINK } : {};
                }}>Kontakt</NavLink>
                    </li>
                </ul>
            </nav>
            <span className={css.date}>27-28 Kwietnia</span>
        </header>
    )
}

export default Header