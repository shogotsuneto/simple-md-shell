import React from 'react'
import styles from '../../styles/Contents.module.css'

const components = {
  tableRow: ({ node: { children }, align, renderChild, isHead, key }) => {
    return (
      <tr key={key}>
        {children.map((node, index) => (
          <TableComponent
            node={node}
            align={align[index]}
            isHead={isHead}
            renderChild={renderChild}
            key={`${index}`}
          />
        ))}
      </tr>
    )
  },
  tableCell: ({ node: { children }, align, renderChild, isHead }) => {
    const tag = isHead ? 'th' : 'td'
    return React.createElement(
      tag,
      { className: styles[`cell-align-${align}`] },
      children.map((node, index) => (
        <TableComponent
          node={node}
          renderChild={renderChild}
          key={`${index}`}
        />
      ))
    )
  }
}

const TableComponent = ({ node, align, isHead, renderChild }) => {
  const { type } = node
  return React.createElement(
    components[type] || renderChild,
    { node, align, isHead, renderChild }
  )
}

const Table = ({ node, renderChild }) => {
  const { align, children } = node
  const [head, ...tail] = children
  return (
    <table>
      <thead>
        <TableComponent
          node={head}
          isHead
          align={align}
          renderChild={renderChild}
        />
      </thead>
      <tbody>
        {tail.map((child, index) =>
          <TableComponent
            node={child}
            align={align}
            renderChild={renderChild}
            key={`${index}`}
          />
        )}
      </tbody>
    </table>
  )
}

export default Table
