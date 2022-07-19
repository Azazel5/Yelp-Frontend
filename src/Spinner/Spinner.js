import React from 'react'
import styles from './Spinner.module.css'

const Spinner = props => {
    return (
        <div className={`button is-loading is-large ${styles['spinner']}`}></div>
    )
}

export default Spinner