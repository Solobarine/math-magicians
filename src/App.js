const App = () => {
  const figures = [{ val: 'AC' }, { val: '+/-' }, { val: '%' }, { val: '/' }, { val: 7 }, { val: 8 }, { val: 9 }, { val: 'x' }, { val: 4 }, { val: 5 }, { val:6 }, { val: '-' }, { val: 1 }, { val: 2 }, { val: 3 }, { val: '+' }, { val: 0 }, { val: '.' }, { val: '=' }];
  const id = 'item';
  return (
    <div className="container">
      <div className="display">0</div>
      {figures.map((fig) => (
        <button className="press" type="button" key="fig.val" id={id + figures.indexOf(fig)}>{fig.val}</button>
      ))}
    </div>
  );
};

export default App;
