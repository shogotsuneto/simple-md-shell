import React from 'react';

import Header from './components/Header'
import Container from './components/Container'
import './App.css';

const owner = "shogotsuneto"
const repo = "md-contents"

function App() {
  return (
    <div className="App">
      <Header />
      <Container owner={owner} repo={repo} branch="master" filename="kokoro.md" />
    </div>
  );
}

export default App;
