import React from 'react'
import styles from './SearchResult.module.css'

export default function SearchResult() {
    return (
        <div className={styles['search-result']}>
            <img className={styles['business-image']} src="https://via.placeholder.com/210" alt="business info" />
            <div className={styles['business-info']}>
                <h2 className='subtitle'>Burger Place</h2>
                <p>Rating</p>
                <p>
                    $$ 
                    <span className='tag'>Burgers</span> <span className='tag'>Fast Food</span>
                </p>
            </div>
            <div>
                <p>+1 123456789</p>
                <p>123 Northeast Ave</p>
                <p>441114, Kathmandu, Nepal</p>
            </div>
        </div>
    )
}