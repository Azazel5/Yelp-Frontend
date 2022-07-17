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

    const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(term, locationParam)

    return (
        <div>
            <Navbar term={term} location={locationParam} />
            <Subnav />
            <SearchResultsSummary term={term} location={locationParam} />
            <SearchResults businesses={businesses}/>
        </div>
    )
}