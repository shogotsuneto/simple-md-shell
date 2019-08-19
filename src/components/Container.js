import React, { useState, useEffect } from 'react'
import createMd2React from '../processor/createMd2React'
import styles from '../styles/Shell.module.css'

import section from './contents/section'

const md2React = createMd2React({ createElement: React.createElement, components: { section }})

const Container = ({owner, repo}) => {
  const [raw, setRaw] = useState('')
  const [contents, setContents] = useState(null)
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/${owner}/${repo}/master/kokoro.md`)
      .then(response => response.text())
      .then(data => setRaw(data))
  }, [owner, repo])
  useEffect(() => {
    md2React.process(raw).then(({contents}) => setContents(contents))
  }, [raw])
  return <div className={styles.container}>{contents}</div>
}

export default Container
