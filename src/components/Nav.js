import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navBar">
      <h1 className="logo">Math Magicians</h1>
      <ul className="navItems">
        <li className="navItem"><Link to="/">Home</Link></li>
        <li className="navItem"><Link to="/calculate">Calculate</Link></li>
        <li className="navItem"><Link to="/quote">Quote</Link></li>
      </ul>
    </div>
  );
}

export default Nav
