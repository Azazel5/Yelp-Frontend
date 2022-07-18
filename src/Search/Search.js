import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Subnav from '../Navbar/Subnav/Subnav'
import SearchResults from './SearchResults/SearchResults'
import SearchResultsSummary from './SearchResultsSummary/SearchResultsSummary'
import { useBusinessSearch } from '../hooks/yelp-api/useBusinessSearch'

export default function Search() {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const term = params.get('find_desc')
    const locationParam = params.get('find_loc')

    const [businesses, amountResults, searchParams, performSearch] = useBusinessSearch(term, locationParam)

    function search(term, location) {
        performSearch({ term, location })
    }

    return (
        <div>
            <Navbar term={term} location={locationParam} search={search} />
            <Subnav />
            <SearchResultsSummary term={searchParams.term} location={searchParams.location} amountResults={amountResults} shownResults={businesses ? businesses.length : 0} />
            <SearchResults businesses={businesses} />
        </div>
    )
}