import React, { useState, useEffect } from 'react'
import Tree from './contents/Tree'
import parseMarkdown from '../processor/parseMarkdown'
import styles from '../styles/Shell.module.css'

const Container = ({owner, repo}) => {
  const [raw, setRaw] = useState('')
  const [node, setNode] = useState({})
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/${owner}/${repo}/master/kokoro.md`)
      .then(response => response.text())
      .then(data => setRaw(data))
  }, [owner, repo])
  useEffect(() => {
    parseMarkdown.run(parseMarkdown.parse(raw)).then(node => {
      setNode(node)
    })
  }, [raw])
  return <div className={styles.container}><Tree node={node} /></div>
}

export default Container
