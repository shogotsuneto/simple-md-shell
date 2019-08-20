import React from 'react'
import styles from '../../styles/Contents.module.css'

export default ({depth, children}) => React.createElement(`h${depth}`, { className: styles[`heading${depth}`] }, children)
