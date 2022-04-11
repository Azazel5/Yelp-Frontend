import React from 'react'
import styles from './SearchResultsSummary.module.css'

export default function SearchResultsSummary() {
    return (
        <div className={styles.container}>
            <div className={styles['search-summary']}>
                <h1 className='subtitle'><strong>burgers</strong> kathmandu</h1>
                <p>Showing 1-20 from 433 results</p>
            </div>

            <div className={styles.filters}>
                <button className={`button ${styles['subnav-button']}`}>
                    <span className="icon">
                        <i className="fas fa-sliders-h" />
                    </span>
                    <span>All filters</span>
                </button>

                <div className="buttons has-addons">
                    <button className="button">$</button>
                    <button className="button">$$</button>
                    <button className="button">$$$</button>
                    <button className="button">$$$$</button>
                </div>

                <button className={`button ${styles['subnav-button']}`}>
                    <span className="icon">
                        <i className="fas fa-clock" />
                    </span>
                    <span>Open now</span>
                </button>

                <button className={`button ${styles['subnav-button']}`}>
                    <span className="icon">
                        <i className="fas fa-dollar-sign" />
                    </span>
                    <span>Cashback</span>
                </button>
            </div>
        </div>
    )
}