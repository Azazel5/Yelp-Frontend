import React from 'react'
import BusinessRating from '../../../BusinessRating/BusinessRating'
import styles from './SearchResult.module.css'

export default function SearchResult(props) {
    const { business } = props

    if (!business) {
        return (<div></div>)
    }

    return (
        <div className={styles['search-result']}>
            <img className={styles['business-image']} src={business.image_url} alt="business info" />
            <div className={styles['business-info']}>
                <h2 className='subtitle'>{business.name}</h2>
                <BusinessRating rating={business.rating} reviewCount={business.review_count}/>
                <p>
                    $$
                    <span className='tag'>Burgers</span> <span className='tag'>Fast Food</span>
                </p>
            </div>
            <div className={styles['contact-info']}>
                <p>+1 123456789</p>
                <p>123 Northeast Ave</p>
                <p>441114, Kathmandu, Nepal</p>
            </div>
        </div>
    )
}