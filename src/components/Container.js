import React, { useState, useEffect } from 'react'
import mdToComponents from '../processor/mdToComponents'
import styles from '../styles/Shell.module.css'

const createMarkDownElements = text => (
  mdToComponents(React.createElement)
    .process(text)
)

const Container = ({owner, repo}) => {
  const [text, setText] = useState('')
  const [contents, setContent] = useState('')
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/${owner}/${repo}/master/kokoro.md`)
      .then(response => response.text())
      .then(data => setText(data))
  }, [owner, repo])
  useEffect(() => {
    createMarkDownElements(text).then(({contents}) => setContent(contents))
  }, [text])
  return <div className={styles.container}>{contents}</div>
}

export default Container
