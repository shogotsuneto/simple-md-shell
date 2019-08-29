import React from 'react'
import Section from './Section'
import Heading from './Heading'
import Table from './Table'

const components = {
  root: ({childNodes}) => <React.Fragment>{renderChildNodes(childNodes)}</React.Fragment>,
  section: ({depth, childNodes}) => <Section depth={depth}>{renderChildNodes(childNodes)}</Section>,
  heading: ({depth, childNodes}) => <Heading depth={depth}>{renderChildNodes(childNodes)}</Heading>,
  text: ({value}) => `${value}`,
  paragraph: ({childNodes}) => <p>{renderChildNodes(childNodes)}</p>,
  ruby: ({base, text}) => <ruby>{base}<rt>{text}</rt></ruby>,
  break: () => <br />,
  // table: ({align, childNodes}) => <Table align={align} childNodes={childNodes} renderChildNodes={Tree} />
}

const renderChildNodes = childNodes => childNodes.map((node, index) => <Tree key={`${index}`} node={node} />)

const Tree = ({node}) => {
  const { children: childNodes, ...nodeAttributes} = node
  return components[node.type] ? React.createElement(components[node.type], {...nodeAttributes, childNodes}) : null
}

export default Tree