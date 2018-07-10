import React, { Component } from 'react';
import MarkdownViewer from 'components/MarkdownViewer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <MarkdownViewer />
        </p>
      </div>
    );
  }
}

export default App;
