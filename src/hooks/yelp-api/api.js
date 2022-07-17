import queryString from 'query-string'
import { API_BASE_URL, BEARER_TOKEN } from './config'

export async function get(path, queryParams) {
    const query = queryString.stringify(queryParams)
    return await fetch(`${API_BASE_URL}${path}?${query}`)
}