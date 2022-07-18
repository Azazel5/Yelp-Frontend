import React from 'react'
import styles from './SearchResultsSummary.module.css'

export default function SearchResultsSummary(props) {
    const { term, location, amountResults, shownResults } = props

    let resultStats = null

    if (amountResults && shownResults) {
        resultStats = <p>Showing 1-{shownResults} from {amountResults} results</p>
    }

    return (
        <div className={styles.container}>
            <div className={styles['search-summary']}>
                <h1 className='subtitle'><strong>{term}</strong> {location}</h1>
                {resultStats}
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