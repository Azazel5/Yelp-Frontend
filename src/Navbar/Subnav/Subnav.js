import React from 'react'
import styles from './Subnav.module.css'
import SubnavItem from './SubnavItem/SubnavItem'

export default function Subnav() {
    return (
        <div className={styles.container}>
            <div className={styles['sub-nav']}>
                <div>
                    <SubnavItem label="Restaurant" icon="fa-utensils" />
                    <SubnavItem label="Home Services" icon="fa-home" />
                    <SubnavItem label="Auto Services" icon="fa-car-side" />
                    <SubnavItem label="More" icon="fa-info-circle" showRightBorder />
                </div>

                <div>
                    <button className={`button ${styles['subnav-button']} ${styles['omit-right-border']}`}>
                        <span className="icon">
                            <i className="fas fa-pen" />
                        </span>
                        <span>Write a review</span>
                    </button>

                    <button className={`button ${styles['subnav-button']}`}>
                        <span className="icon">
                            <i className="fas fa-hotel" />
                        </span>
                        <span>For businesses</span>
                    </button>
                </div>
            </div>
        </div>
    )
}