import React, { useState, useEffect } from 'react'
import unified from 'unified'
import parse from 'remark-parse'
import remarkAozoraRuby from 'remark-aozora-ruby'
import remark2rehype from 'remark-rehype'
import rehype2react from 'rehype-react'
import styles from '../styles/Shell.module.css'

const createMarkDownElements = text => (
  unified()
    .use(parse)
    .use(remarkAozoraRuby)
    .use(remark2rehype)
    .use(rehype2react, { createElement: React.createElement})
    .processSync(text).contents
)

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
