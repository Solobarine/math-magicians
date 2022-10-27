import React from 'react';
import calculate from '../logic/calculate'; // eslint-disable-line

class Calculator extends React.Component { // eslint-disable-line
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleEvent = (e) => {
    this.setState((state) => calculate(state, e.target.name));
  }

  render() {
    const figures = [{ val: 'AC' }, { val: '+/-' }, { val: '%' }, { val: '/' }, { val: 7 }, { val: 8 }, { val: 9 }, { val: 'x' }, { val: 4 }, { val: 5 }, { val: 6 }, { val: '-' }, { val: 1 }, { val: 2 }, { val: 3 }, { val: '+' }, { val: 0 }, { val: '.' }, { val: '=' }];
    const id = 'item';
    // Destructuring
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <div className="display">
          <span>{total}</span>
          <span>{next}</span>
          <span>{operation}</span>
        </div>
        {figures.map((fig) => (
          <button className="press" onClick={this.handleEvent} name={fig.val} type="button" key={figures.indexOf(fig)} id={id + figures.indexOf(fig)}>{fig.val}</button>
        ))}
      </div>
    );
  }
}

export default Calculator;
