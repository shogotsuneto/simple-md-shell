import React from 'react'
import styles from '../../styles/Contents.module.css'

export default ({depth, children}) => <section className={styles[`section${depth}`]}>{children}</section>
