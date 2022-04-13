import React from 'react'
import TopNav from './TopNav/TopNav'
import SearchBar from '../SearchBar/SearchBar'
import SearchSuggestions from './SearchSuggestions/SearchSuggestions'
import Logo from '../assets/logo.png'
import styles from './LandingPage.module.css'
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
    const navigate = useNavigate()

    function search(term, location) {
        const urlEncodedTerm = encodeURI(term)
        const urlEncodedLocation = encodeURI(location)
        navigate(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`)
    }

    return (
        <div className={styles.landing}>
            <div className={styles['search-area']}>
                <TopNav />
                <img src={Logo} alt="logo" className={styles.logo} />
                <SearchBar search={search}/>
                <SearchSuggestions />
            </div>
        </div>
    )
}