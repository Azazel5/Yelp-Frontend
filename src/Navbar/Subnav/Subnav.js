import React from 'react'
// import styles from './Subnav.module.css'
import SubnavItem from './SubnavItem/SubnavItem'

export default function Subnav() {
    return (
        <div>
            <SubnavItem label="Restaurant" icon="fa-utensils"/>
            <SubnavItem label="Home Services" icon="fa-home"/>
            <SubnavItem label="Auto Services" icon="fa-car-side"/>
            <SubnavItem label="More" icon="fa-info-circle" showRightBorder/>
        </div>
    )
}