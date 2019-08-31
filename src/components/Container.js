import React, { useState, useEffect } from 'react'
import LoadingOverlay from 'react-loading-overlay'
import { fetchRawContent } from '../api'
import Tree from './contents/Tree'
import processor from '../processor/markdownProcessor'
import styles from '../styles/Shell.module.css'

const Container = ({ filepath }) => {
  const [raw, setRaw] = useState('')
  const [node, setNode] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetchRawContent(decodeURIComponent(filepath)).then(data => setRaw(data))
  }, [filepath])
  useEffect(() => {
    processor.run(processor.parse(raw)).then(node => {
      setNode(node)
      setIsLoading(false)
    })
  }, [raw])

  return (
    <LoadingOverlay
      className={styles.container}
      active={isLoading}
      fadeSpeed={300}
      spinner
      text='Loading your content...'
      styles={{
        content: {
          margin: '200pt auto'
        }
      }}
    >
      <Tree node={node} />
    </LoadingOverlay>
  )
}

export default Container
