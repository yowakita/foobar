import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class Terms extends Component {
  constructor(props) {
    super(props);

    this.state = { source: null };
  }

  componentWillMount() {
    fetch(this.props.path)
      .then(response => response.text())
      .then(text => {
        this.setState({ source: text });
        if (this.props.isSolution) {
          const x = 10;
          const y = 1231;
          eval(text.substr(3, text.length - 6));
        }
      });
  }

  render() {
    return (
      <div className="markdown">
        <ReactMarkdown source={this.state.source} />
      </div>
    );
  }
}

export default Terms;
