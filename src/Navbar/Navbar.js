import React from 'react'
import styles from './Navbar.module.css'
import logo from '../assets/logo.png'
import SearchBar from '../SearchBar/SearchBar'

export default function Navbar() {
    return (
        <div className={styles['nav-bar']}>
            <img src={logo} className={styles.logo} alt='belb logo' />
            <SearchBar small />
            <button className={`button ${styles['nav-button']}`}>Sign In</button>
            <button className={`button ${styles['nav-button']}`}>Register</button>
        </div>
    )
}