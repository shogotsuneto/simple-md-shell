import React, { useState, useEffect } from 'react'
import styles from '../styles/Shell.module.css'

const Container = ({owner, repo}) => {
  const [text, setText] = useState('')
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/${owner}/${repo}/master/README.md`)
      .then(response => response.text())
      .then(data => setText(data))
  }, [owner, repo])
  return <div className={styles.container}>{text}</div>
}

export default Container
