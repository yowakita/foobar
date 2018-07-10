import React, { Component } from 'react';
import solution from 'problems/hamming-distance/solution.md';
import { padStart } from 'lodash';

const getBitArray = numberArray => {
  const binaries = numberArray.map(n => String(n.toString(2)));
  const length = Math.max(...numberArray.map(n => Math.floor(Math.log2(n))));
  return binaries.map(b => ({
    int: parseInt(b, 2),
    binaryString: padStart(b, length + 1, 0)
      .split('')
      .join(' '),
  }));
};
class Example extends Component {
  constructor(props) {
    super(props);
    this.incrementX = this.incrementX.bind(this);
    this.incrementY = this.incrementY.bind(this);
    this.decrementX = this.decrementX.bind(this);
    this.decrementY = this.decrementY.bind(this);
  }

  state = {
    output: '',
    x: 1,
    y: 4,
  };
  componentDidMount() {
    this.eval();
  }

  eval() {
    fetch(solution)
      .then(response => response.text())
      .then(text => {
        const { x, y } = this.state;
        this.setState({
          output: eval(text.substr(3, text.length - 6)),
        });
      });
  }

  incrementX() {
    this.setState({ x: this.state.x + 1 }, this.eval);
  }

  decrementX() {
    this.setState({ x: this.state.x - 1 }, this.eval);
  }

  incrementY() {
    this.setState({ y: this.state.y + 1 }, this.eval);
  }

  decrementY() {
    this.setState({ y: this.state.y - 1 }, this.eval);
  }

  render() {
    const { output, x, y } = this.state;
    const max = Math.max(String(x).length, String(y).length);
    return (
      <div>
        <div>{`xInput: x = ${x}, y = ${y}`}</div>
        <div>{`Output: ${output}`}</div>

        <div>{'Explanation:'}</div>
        <div>
          {getBitArray([x, y]).map(b => (
            <div data-length={b}>
              {padStart(b.int, max, '0')}
              {'- - - - '}
              {b.binaryString}
            </div>
          ))}
        </div>
        <button onClick={this.incrementX}>Increment X</button>
        <button onClick={this.decrementX}>Decrement X</button>
        <button onClick={this.incrementY}>Increment Y</button>
        <button onClick={this.decrementY}>Decrement Y</button>
      </div>
    );
  }
}

export default Example;
