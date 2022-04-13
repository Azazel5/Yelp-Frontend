import React, { useState } from 'react'
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
    const [term, setTerm] = useState(props.term || '')
    const [location, setLocation] = useState(props.location || '')

    const sizeClass = props.small ? '' : 'is-medium'

    function onSubmit(e) {
        e.preventDefault()

        if (typeof (props.search) === 'function') {
            props.search(term, location)
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="field has-addons" style={{ marginBottom: '0' }} >
                <p className="control">
                    <button className={`button is-static ${sizeClass}`}>
                        Search
                    </button>
                </p>
                <p className="control">
                    <input className={`input ${sizeClass} ${styles['input-control']}`}
                        type="text" placeholder="burgers, barbers, spas, handymen"
                        onChange={(e) => setTerm(e.target.value)} />
                </p>
                <div className="control">
                    <div className={`button is-static ${sizeClass}`}>
                        NEAR
                    </div>
                </div>
                <p className="control">
                    <input className={`input ${sizeClass} ${styles['input-control']}`}
                        type="text" placeholder="Where"
                        onChange={(e) => setLocation(e.target.value)} />
                </p>
                <div className={`button ${sizeClass} ${styles['search-button']}`} onClick={onSubmit}>
                    <span className={`icon is-small ${styles['search-icon']}`}>
                        <i className="fas fa-search"></i>
                    </span>
                </div>
            </div>
        </form>
    )
}