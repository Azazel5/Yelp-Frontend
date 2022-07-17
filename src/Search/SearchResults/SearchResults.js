import React from 'react'
import styles from './SearchResults.module.css'
import SearchResult from './SearchResult/SearchResult'

export default function SearchResults(props) {
    const {businesses} = props

    if (!businesses || !businesses.length) {
        return (<div></div>)
    }

    const searchResults = businesses.map(business => (
        <SearchResult key={business.id} business={business} />
    ))

    return (
        <div className={styles['search-results']}>
            {searchResults}
        </div>
    )
}