import React, { useState, useEffect } from 'react'
import Tree from './contents/Tree'
import parseMarkdown from '../processor/parseMarkdown'
import styles from '../styles/Shell.module.css'

const Container = ({owner, repo, branch, filename}) => {
  const [raw, setRaw] = useState('')
  const [node, setNode] = useState({})
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${filename}`)
      .then(response => response.text())
      .then(data => setRaw(data))
  }, [owner, repo, branch, filename])
  useEffect(() => {
    parseMarkdown.run(parseMarkdown.parse(raw)).then(node => {
      setNode(node)
    })
  }, [raw])
  return <div className={styles.container}><Tree node={node} /></div>
}

export default Container
