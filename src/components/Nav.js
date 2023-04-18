import { Link } from 'react-router-dom';

const Nav = () => { //eslint-disable-line
  return (
    <div className="navBar">
      <p className="logo">Math Magicians</p>
      <div className="navItems">
        <Link to="/">Home</Link>
        <Link to="/calculate">Calculate</Link>
        <Link to="/quote">Quote</Link>
      </div>
    </div>
  );
};

export default Nav;
