import React, { useState, useEffect } from 'react'
import styles from '../styles/Shell.module.css'
import { fetchContentsList } from '../api'

const DirItem = ({ item, onClick, isRoot }) => {
  const { path } = item
  const [children, setChildren] = useState([])
  useEffect(() => {
    fetchContentsList(path).then(data => setChildren(data))
  }, [path])

  // handle api error TODO: maybe catch?
  const { message } = children
  if (message) return message

  const renderList = () => (
    <ul className={ styles.tocItemList}>
      {children.map(item => renderItem({ key: item.sha, item, onClick }))}
    </ul>
  )

  return isRoot ? (
    <div className={styles.tableOfContents}>{renderList()}</div>
  ) : (
    <li className={styles.tocListItem}>
      <p>{item.name}</p>
      {renderList()}
    </li>
  )
}

const Item = ({ item, onClick }) => {
  const { name, path } = item
  console.log(path, item)
  return (
    <li
      className={styles.tocItem}
      onClick={() => onClick(encodeURIComponent(path))}
    >
      <p>{name}</p>
    </li>
  )
}

const itemRenderers = {
  dir: props => <DirItem {...props} />,
  file: props => <Item {...props} />
}

const renderItem = props => {
  const { type } = props.item
  return itemRenderers[type] ? itemRenderers[type](props) : null
}

const TableOfContents = ({ setCurrent }) => {
  return (
    <DirItem
      isRoot
      item={{ name: 'リポ', path: '/' }}
      onClick={setCurrent}
    />
  )
}

export default TableOfContents
