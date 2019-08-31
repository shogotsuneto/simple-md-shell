import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Header from './components/Header'
import TableOfContents from './components/TableOfContents'
import Container from './components/Container'

const owner = 'shogotsuneto'
const repo = 'md-contents'
const branch = 'master'
const initialPath = 'README.md'

function App() {
  return (
    <HashRouter>
      <Header />
      <Route
        path='/'
        render={({ history }) => (
          <TableOfContents
            owner={owner}
            repo={repo}
            branch={branch}
            setCurrent={path => history.push(path)}
          />
        )}
      />
      <Route
        exact
        path='/'
        render={() => (
          <Container
            owner={owner}
            repo={repo}
            branch={branch}
            filepath={initialPath}
          />
        )}
      />
      <Route
        path='/:filepath'
        render={({ match }) => (
          <Container
            owner={owner}
            repo={repo}
            branch={branch}
            filepath={match.params.filepath}
          />
        )}
      />
    </HashRouter>
  )
}

export default App
