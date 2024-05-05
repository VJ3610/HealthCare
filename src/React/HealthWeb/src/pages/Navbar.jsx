import './Navbar.css';
// import logo from './medicare_logo.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img /*src={logo}*/ alt="Medicare Logo" />
        <p>Medi Care</p>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/schedule">Schedule </a>
        </li>
        <li>
            <a href="/med-detail">Medicinal Details</a>
        </li>
      </ul>
      <div className="navbar-signup">
        <button>Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
