import React, { Component } from 'react';
import solution from 'problems/hamming-distance/solution.md';
import { padStart } from 'lodash';
import { Button, Card, CardActions, CardHeader, CardContent } from '@material-ui/core';

const getNumberStringLength = array => Math.max(...array.map(n => Math.floor(Math.log2(n))));

const getBitArray = numberArray => {
  const binaries = numberArray.map(n => String(n.toString(2)));
  const length = getNumberStringLength(numberArray);
  return binaries.map(b => ({
    int: parseInt(b, 2),
    binaryString: padStart(b, length + 1, 0)
      .split('')
      .join(' '),
  }));
};

const getXor = (x, y) => {
  const length = getNumberStringLength([x, y]);
  const xor = x ^ y;
  const binaryString = padStart(xor.toString(2), length + 1, 0)
    .split('')
    .join(' ');
  return binaryString.replace(/1/g, '↑').replace(/0/g, ' ');
};

class Example extends Component {
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

  incrementX = () => this.setState({ x: this.state.x + 1 }, this.eval);

  decrementX = () => this.setState({ x: this.state.x - 1 }, this.eval);

  incrementY = () => this.setState({ y: this.state.y + 1 }, this.eval);

  decrementY = () => this.setState({ y: this.state.y - 1 }, this.eval);

  getMaxNumberStringLength = () => {
    const { x, y } = this.state;
    return Math.max(String(x).length, String(y).length);
  };
  render() {
    const { output, x, y } = this.state;
    const max = Math.max(String(x).length, String(y).length);
    return (
      <Card>
        <CardHeader title="Interactive Hamming Distance Example" />
        <CardContent>
          <pre>
            <code>
              <div>{'Example: '}</div>
              <div> </div>
              <div>{`Input: x = ${x}, y = ${y}`}</div>
              <div> </div>
              <div>{`Output: ${output}`}</div>
              <div> </div>
              <div>{'Explanation:'}</div>
              <div>
                {getBitArray([x, y]).map(b => (
                  <div>
                    {padStart(b.int, this.getMaxNumberStringLength(), '0')}
                    {' ( '}
                    {b.binaryString}
                    {' ) '}
                  </div>
                ))}
                {padStart('', this.getMaxNumberStringLength() + 3, ' ')}
                {getXor(x, y)}
                <div>
                  The above arrows point to positions where the corresponding bits are different.
                </div>
              </div>
            </code>
          </pre>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" color="primary" onClick={this.incrementX}>
            X++
          </Button>
          <Button size="small" variant="contained" color="secondary" onClick={this.decrementX}>
            X--
          </Button>
          <Button size="small" variant="contained" color="primary" onClick={this.incrementY}>
            Y++
          </Button>
          <Button size="small" variant="contained" color="secondary" onClick={this.decrementY}>
            Y--
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default Example;
