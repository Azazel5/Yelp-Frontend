import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Subnav from '../Navbar/Subnav/Subnav'
import SearchResults from './SearchResults/SearchResults'
import SearchResultsSummary from './SearchResultsSummary/SearchResultsSummary'

export default function Search() {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const term = params.get('find_desc')
    const locationParam = params.get('find_loc')

    return (
        <div>
            <Navbar term={term} location={locationParam}/>
            <Subnav />
            <SearchResultsSummary term={term} location={locationParam} />
            <SearchResults />
        </div>
    )
}