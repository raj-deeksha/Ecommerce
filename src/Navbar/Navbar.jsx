import { Nav } from "rsuite";
import 'rsuite/dist/rsuite.min.css'; 
import './navbar.css';


const Navbar = () => (
  <div className="nav">
    <img src="SwiftLogo.png" alt="" className="swift"/>
    <Nav className="custome-nav">
      <Nav.Item eventKey="men">MEN</Nav.Item>
      <Nav.Item eventKey="women">WOMEN</Nav.Item>
      <Nav.Item eventKey="kids">KIDS</Nav.Item>
      <Nav.Item eventKey="beauty">BEAUTY</Nav.Item>
      <Nav.Item eventKey="home">HOME AND KITCHEN</Nav.Item>
    </Nav>
  </div>
);

export default Navbar;
