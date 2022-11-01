import React, { useState } from 'react';
import calculate from '../logic/calculate'; // eslint-disable-line

const Calculator = () => {
  const [state, setState] = useState({ total: null, operation: null, next: null });

  const figures = [{ val: 'AC' }, { val: '+/-' }, { val: '%' }, { val: '÷' }, { val: 7 }, { val: 8 }, { val: 9 }, { val: 'x' }, { val: 4 }, { val: 5 }, { val: 6 }, { val: '-' }, { val: 1 }, { val: 2 }, { val: 3 }, { val: '+' }, { val: 0 }, { val: '.' }, { val: '=' }];
  const id = 'item';

  const handleEvent = (e) => {
    setState(calculate(state, e.target.name));
  };
  // Destructuring
  const { total, next, operation } = state;
  return (
    <div className="claculator-section">
      <h2 className="invite">Let's do some Maths</h2>
      <div className="calculator">
        <div className="display">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </div>
        {figures.map((fig) => (
        <button className="press" onClick={handleEvent} name={fig.val} type="button" key={figures.indexOf(fig)} id={id + figures.indexOf(fig)}>{fig.val}</button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
