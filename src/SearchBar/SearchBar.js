import React from 'react'
import styles from './SearchBar.module.css'

export default function SearchBar() {
    return (
        <div className="field has-addons">
            <p className="control">
                <button className="button is-static is-medium">
                    Search
                </button>
            </p>
            <p className="control">
                <input className={`input is-medium ${styles['input-control']}`} type="text" placeholder="burgers, barbers, spas, handymen" />
            </p>
            <p className="control">
                <button className="button is-static is-medium">
                    NEAR
                </button>
            </p>
            <p className="control">
                <input className={`input is-medium ${styles['input-control']}`} type="text" placeholder="Where" />
            </p>
            <div className={`button is-medium ${styles['search-button']}`}>
                <span className={`icon is-small ${styles['search-icon']}`}>
                    <i className="fas fa-search"></i>
                </span>
            </div>
        </div>
    )
}