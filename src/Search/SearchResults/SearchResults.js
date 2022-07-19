import React from 'react'
import styles from './SearchResults.module.css'
import SearchResult from './SearchResult/SearchResult'
import Spinner from '../../Spinner/Spinner'

export default function SearchResults(props) {
    const { businesses } = props
    let searchResults = <Spinner />

    if (businesses && businesses.length) {
        searchResults = businesses.map(business => (
            <SearchResult key={business.id} business={business} />
        ))
    }

    return (
        <div className={styles['search-results']}>
            {searchResults}
        </div>
    )
}