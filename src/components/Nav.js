import { Link } from 'react-router-dom';

const Nav = () => { //eslint-disable-line
  return (
    <div className="navBar">
      <h1 className="logo">Math Magicians</h1>
      <ul className="navItems">
        <Link to="/">Home</Link>
        <Link to="/calculate">Calculate</Link>
        <Link to="/quote">Quote</Link>
      </ul>
    </div>
  );
};

export default Nav;
