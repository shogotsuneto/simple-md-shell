import React from 'react'
import Section from './Section'
import Heading from './Heading'
import Table from './Table'
import Code from './Code'
import styles from '../../styles/Contents.module.css';

const components = {
  root: ({ node: { children } }) => (
    <React.Fragment>{renderChildNodes(children)}</React.Fragment>
  ),
  section: ({ node: { depth, children } }) => (
    <Section depth={depth}>{renderChildNodes(children)}</Section>
  ),
  heading: ({ node: { depth, children } }) => (
    <Heading depth={depth}>{renderChildNodes(children)}</Heading>
  ),
  text: ({ node: { value } }) => `${value}`,
  paragraph: ({ node: { children } }) => <p>{renderChildNodes(children)}</p>,
  ruby: ({ node: { base, text } }) => (
    <ruby>
      {base}
      <rt>{text}</rt>
    </ruby>
  ),
  break: () => <br />,
  table: ({ node }) => <Table node={node} renderChild={({node}) => <Tree node={node} />} />,
  code: ({ node: { value, lang } }) => <Code language={lang} codeString={value} />,
  inlineCode: ({ node: { value }}) => <code className={styles['inline-code']}>{value}</code>
}

const renderChildNodes = children =>
  children.map((node, index) => <Tree key={`${index}`} node={node} />)

const Tree = ({ node }) => {
  if (!components[node.type]) console.log(node)
  return components[node.type]
    ? React.createElement(components[node.type], { node })
    : null
}

export default Tree
