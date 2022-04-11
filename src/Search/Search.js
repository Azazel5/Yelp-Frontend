import React from 'react'
import Navbar from '../Navbar/Navbar'
import Subnav from '../Navbar/Subnav/Subnav'
import SearchResultsSummary from './SearchResultsSummary/SearchResultsSummary'

export default function Search() {
    return (
        <div>
            <Navbar />
            <Subnav />
            <SearchResultsSummary />
        </div>
    )
}