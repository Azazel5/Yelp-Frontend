import queryString from 'querystring'
import { API_BASE_URL, BEARER_TOKEN } from './config'

export function get(path, queryParams) {
    const query = queryString.stringify(queryParams)
    fetch(`${API_BASE_URL}${path}?${query}`, {
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            Origin: 'localhost',
            withCredentials: true
        }
    })
}