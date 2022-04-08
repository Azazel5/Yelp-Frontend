import React from 'react'
import TopNav from './TopNav/TopNav'
import SearchBar from '../SearchBar/SearchBar'
import SearchSuggestions from './SearchSuggestions/SearchSuggestions'
import Logo from '../assets/logo.png'
import styles from './LandingPage.module.css'

export default function LandingPage() {
    return (
        <div>
            <TopNav />
            <img src={Logo} alt="logo" className={styles.logo} />
            <SearchBar />
            <SearchSuggestions />
        </div>
    )
}