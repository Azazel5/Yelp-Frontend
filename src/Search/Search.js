import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Subnav from '../Navbar/Subnav/Subnav'
import SearchResults from './SearchResults/SearchResults'
import SearchResultsSummary from './SearchResultsSummary/SearchResultsSummary'
import { useBusinessSearch } from '../hooks/yelp-api/useBusinessSearch'
import { useNavigate } from 'react-router-dom';

export default function Search() {
    const location = useLocation()
    const navigate = useNavigate()
    const params = new URLSearchParams(location.search)
    const term = params.get('find_desc')
    const locationParam = params.get('find_loc')

    const [businesses, amountResults, searchParams, performSearch] = useBusinessSearch(term, locationParam)

    if (!term || !locationParam) {
        navigate('/')
    }

    function search(term, location) {
        const urlEncodedTerm = encodeURI(term)
        const urlEncodedLocation = encodeURI(location)
        navigate(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`)
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