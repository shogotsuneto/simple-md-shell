import React, { useState, useEffect } from 'react'
import { fetchRawContent} from '../api'
import Tree from './contents/Tree'
import processor from '../processor/markdownProcessor'
import styles from '../styles/Shell.module.css'

const Container = ({filepath}) => {
  const [raw, setRaw] = useState('')
  const [node, setNode] = useState({})
  useEffect(() => {
    fetchRawContent(filepath).then(data => setRaw(data))
  }, [filepath])
  useEffect(() => {
    processor.run(processor.parse(raw)).then(node => {
      setNode(node)
    })
  }, [raw])
  return <div className={styles.container}><Tree node={node} /></div>
}

export default Container
