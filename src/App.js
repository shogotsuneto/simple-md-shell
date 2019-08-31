import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Header from './components/Header'
import TableOfContents from './components/TableOfContents'
import Container from './components/Container'

import githubInfo from './github-info'

const { initialPath } = githubInfo

function App() {
  return (
    <HashRouter>
      <Header />
      <Route
        path='/'
        render={({ history }) => (
          <TableOfContents setCurrent={path => history.push(path)} />
        )}
      />
      <Route
        path='/:filepath'
        children={({ match }) => (
          <Container
            filepath={match ? match.params.filepath : initialPath}
          />
        )}
      />
    </HashRouter>
  )
}

export default App
