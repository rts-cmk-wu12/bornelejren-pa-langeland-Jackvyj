import { Link } from 'react-router-dom';
import "../style.css";
import logo from "./image.png"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="link_text">
        <img className='logo' src={logo} alt=""/>
        <Link to="/" className='color'>Forside</Link>
        <Link to="/om-os" className='color'>Om os</Link>
        <Link to="/sponsor" className='color'>Tilmeld som sponsor</Link>
        <Link to="/tak" className='color'>Børnelejren takker</Link>
      </div>
    </nav>
  );
}

export default Navbar;
