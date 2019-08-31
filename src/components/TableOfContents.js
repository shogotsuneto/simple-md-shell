import React, { useState, useEffect } from 'react'
import styles from '../styles/Shell.module.css'
import { fetchContentsList } from '../api'

const Item = ({data, onClick}) => {
  return <div onClick={onClick}><p>{data.name}</p></div>
}

const TableOfContents = ({setCurrent}) => {
  const [contents, setContents] = useState([])
  useEffect(() => {
    fetchContentsList().then(data => setContents(data))
  }, [])

  return <div className={styles.tableOfContents}>{contents.map(item => <Item key={item.sha} data={item} onClick={() => setCurrent(item.path)} />)}</div>
}

export default TableOfContents