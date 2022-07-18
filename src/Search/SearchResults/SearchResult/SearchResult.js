import React from 'react'
import BusinessRating from '../../../BusinessRating/BusinessRating'
import styles from './SearchResult.module.css'

export default function SearchResult(props) {
    const { business } = props

    if (!business) {
        return (<div></div>)
    }

    const tags = business.categories.map(cat => (
        <span key={business.id + cat.title} className={`tag ${styles['business-tag']}`}>
            {cat.title}
        </span>
    ))

    const address = business.location.display_address.map(addy => <p key={business.id + addy}>{addy}</p>)

    return (
        <div className={styles['search-result']}>
            <img className={styles['business-image']} src={business.image_url} alt="business info" />
            <div className={styles['business-info']}>
                <h2 className='subtitle'>{business.name}</h2>
                <BusinessRating rating={business.rating} reviewCount={business.review_count} />
                <p>{business.price} {tags}</p>
            </div>
            <div className={styles['contact-info']}>
                <p>{business.phone}</p>
                {address}
            </div>
        </div>
    )
}