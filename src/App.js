import React, { useState } from 'react';

import Header from './components/Header'
import TableOfContents from './components/TableOfContents';
import Container from './components/Container'

const owner = "shogotsuneto"
const repo = "md-contents"
const branch = "master"
const initialPath = "README.md"

function App() {
  const [current, setCurrent] = useState(initialPath)
  return (
    <div className="App">
      <Header />
      <TableOfContents owner={owner} repo={repo} branch={branch} setCurrent={path => setCurrent(path)} />
      <Container owner={owner} repo={repo} branch={branch} filepath={current} />
    </div>
  );
}

export default App;
