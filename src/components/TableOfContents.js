import React, { useState, useEffect } from 'react'
import styles from '../styles/Shell.module.css'

// /repos/:owner/:repo/contents/:path

const base = 'https://api.github.com'

const Item = ({data, onClick}) => {
  return <div onClick={onClick}><p>{data.name}</p></div>
}

const TableOfContents = ({owner, repo, branch, setCurrent}) => {
  const [contents, setContents] = useState([])
  useEffect(() => {
    fetch(base + `/repos/${owner}/${repo}/contents?ref=${branch}`)
      .then(response => response.json())
      .then(data => setContents(data))
  }, [owner, repo, branch])

  return <div className={styles.tableOfContents}>{contents.map(item => <Item key={item.sha} data={item} onClick={() => setCurrent(item.path)} />)}</div>
}

export default TableOfContents