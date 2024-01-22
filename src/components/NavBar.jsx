import { Link, useLocation } from 'react-router-dom';

function NavBar () {
  const currentPage = useLocation().pathname;
  
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Home</Link>
        <Link to="/Portfolio" className="navbar-brand">Portfolio</Link>
        <Link to="/Resume" className="navbar-brand">Resume</Link>
        <Link to="/Contact" className="navbar-brand">Contact Me</Link>
      </div>
    </nav>
  );
}

export default NavBar;