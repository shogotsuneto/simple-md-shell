import React, { useState, useEffect } from 'react'
import mdToComponents from '../processor/mdToComponents'
import styles from '../styles/Shell.module.css'

import section from './contents/section'

const createMarkDownElements = text => (
  mdToComponents({ createElement: React.createElement, components: { section }})
    .process(text)
)

const Container = ({owner, repo}) => {
  const [raw, setRaw] = useState('')
  const [contents, setContents] = useState(null)
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/${owner}/${repo}/master/kokoro.md`)
      .then(response => response.text())
      .then(data => setRaw(data))
  }, [owner, repo])
  useEffect(() => {
    createMarkDownElements(raw).then(({contents}) => setContents(contents))
  }, [raw])
  return <div className={styles.container}>{contents}</div>
}

export default Container
