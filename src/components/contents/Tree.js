import React from 'react'
import Section from './Section'
import Heading from './Heading'

const components = {
  root: ({children}) => <React.Fragment>{renderChildren(children)}</React.Fragment>,
  section: ({depth, children}) => <Section depth={depth}>{renderChildren(children)}</Section>,
  heading: ({depth, children}) => <Heading depth={depth}>{renderChildren(children)}</Heading>,
  text: ({value}) => `${value}`,
  paragraph: ({children}) => <p>{renderChildren(children)}</p>,
  ruby: ({base, text}) => <ruby>{base}<rt>{text}</rt></ruby>,
  break: () => <br />
}

const renderChildren = children => children.map((node, index) => <Tree key={`${index}`} node={node} />)

const Tree = ({node}) => {
  return components[node.type] ? React.createElement(components[node.type], {...node}) : null
}

export default Tree