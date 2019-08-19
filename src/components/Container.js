import React, { useState, useEffect } from 'react'
import unified from 'unified'
import parse from 'remark-parse'
import sectionize from 'remark-sectionize'
import remarkBreaks from 'remark-breaks'
import remarkAozoraRuby from 'remark-aozora-ruby'
import remark2rehype from 'remark-rehype'
import sanitize from 'rehype-sanitize'
import gh from 'hast-util-sanitize/lib/github'
import rehype2react from 'rehype-react'
import styles from '../styles/Shell.module.css'

const schema = { ...gh, tagNames: [...gh.tagNames, 'section']}

const createMarkDownElements = text => (
  unified()
    .use(parse)
    .use(sectionize)
    .use(remarkAozoraRuby)
    .use(remarkBreaks)
    .use(remark2rehype)
    .use(sanitize, schema)
    .use(rehype2react, { createElement: React.createElement})
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
