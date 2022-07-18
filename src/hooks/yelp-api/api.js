import queryString from 'query-string'
import { API_BASE_URL } from './config'

export async function get(path, queryParams) {
    const query = queryString.stringify(queryParams)
    return await fetch(`${API_BASE_URL}${path}?${query}`)
}