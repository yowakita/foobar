import React, { Component } from 'react';
import MarkdownViewer from 'components/MarkdownViewer';
import './App.css';
import problem from 'problems/hamming-distance/README.md';
import solution from 'problems/hamming-distance/solution.md';
import notes from 'problems/hamming-distance/notes.md';
import Example from 'problems/hamming-distance/example';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Problem</h2>
        <MarkdownViewer path={problem} />
        <h2>Solution</h2>
        <MarkdownViewer path={solution} isSolution />
        <h2>Notes</h2>
        <MarkdownViewer path={notes} />
        <Example />
      </div>
    );
  }
}

export default App;
