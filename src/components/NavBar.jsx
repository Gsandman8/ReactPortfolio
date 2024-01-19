import { Link, useLocation } from 'react-router-dom';

function NavBar () {
  const currentPage = useLocation().pathname;
  
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Home</Link>
        <Link to="/about" className="navbar-brand">About</Link>
        <Link to="/contact" className="navbar-brand">Contact</Link>
      </div>
    </nav>
  );
}

export default NavBar;