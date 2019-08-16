import React, { useState, useEffect } from 'react'
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
import styles from '../styles/Shell.module.css'

const createMarkDownElements = (text) => unified().use(parse).use(remark2react).processSync(text).contents

const Container = ({owner, repo}) => {
  const [text, setText] = useState('')
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/${owner}/${repo}/master/README.md`)
      .then(response => response.text())
      .then(data => setText(data))
  }, [owner, repo])
  return <div className={styles.container}>{createMarkDownElements(text)}</div>
}

export default Container
