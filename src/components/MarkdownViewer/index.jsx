import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import markdownPath from 'problems/hamming-distance/problem.md';
import solutionPath from 'problems/hamming-distance/solution.md';
const threeBackticks = '```';

class Terms extends Component {
  constructor(props) {
    super(props);

    this.state = { source: null };
  }

  componentWillMount() {
    fetch(solutionPath)
      .then(response => response.text())
      .then(text => {
        this.setState({ source: text });
        const x = 10;
        const y = 1231;

        eval(text.substr(3, text.length - 6));
      });
  }

  render() {
    return (
      <div className="content">
        <ReactMarkdown source={this.state.source} />
      </div>
    );
  }
}

export default Terms;
