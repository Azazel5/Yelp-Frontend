import { useEffect, useState } from 'react'
import * as api from './api'

export function useBusinessSearch(term, location) {
    const [businesses, setBusinesses] = useState([])
    const [amountResults, setAmountResults] = useState()
    const [searchParams, setSearchParams] = useState({ term, location })

    useEffect(() => {
        setBusinesses([])
        const fetchData = async () => {
            try {
                const rawData = await api.get('/.netlify/functions/search', searchParams)
                const response = await rawData.json()
                setBusinesses(response.businesses)
                setAmountResults(response.total)
            }

            catch (e) {
                console.log(e)
            }
        }

        fetchData()
    }, [searchParams])

    return [businesses, amountResults, searchParams, setSearchParams]
}