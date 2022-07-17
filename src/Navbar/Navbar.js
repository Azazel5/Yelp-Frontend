import React from 'react'
import styles from './Navbar.module.css'
import logo from '../assets/logo.png'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div className={styles['nav-bar']}>
            <Link to="/"><img src={logo} className={styles.logo} alt='belb logo' /></Link>
            <SearchBar small {...props} />
            <button className={`button ${styles['nav-button']}`}>Sign In</button>
            <button className={`button ${styles['nav-button']}`}>Register</button>
        </div>
    )
}