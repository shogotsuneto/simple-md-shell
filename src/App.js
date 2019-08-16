import React from 'react';

import Header from './components/Header'
import Container from './components/Container'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Container owner='shogotsuneto' repo="md-contents" />
    </div>
  );
}

export default App;
