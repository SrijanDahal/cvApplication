import "../CSS/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="/">My Website</a>
      </div>
      <ul className="navbar__links">
        <li>
          <a href="/">
            <button className="navbar-button">Get Started</button>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
