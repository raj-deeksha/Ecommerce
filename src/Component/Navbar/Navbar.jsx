import { Nav } from "rsuite";
import 'rsuite/dist/rsuite.min.css'; 
import './navbar.css';
import { Link } from "react-router-dom";


const Navbar = () => (
  <div className="nav">
    <Link to="/"><img src="SwiftLogo.png" alt="" className="swift"/></Link>
    <Nav className="custome-nav">
   <Nav.Item eventKey="men"> <Link to="/men">MEN</Link></Nav.Item>
      <Nav.Item eventKey="women" ><Link to="/women">WOMEN</Link></Nav.Item>
      <Nav.Item eventKey="kids"><Link to="/kids">KIDS</Link></Nav.Item>
      <Nav.Item eventKey="beauty" ><Link to="/beauty">BEAUTY</Link></Nav.Item>
    </Nav>
    
  </div>
);

export default Navbar;
