import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Obj_logo from "../Images/Obw_Image.png"

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className='nav_bg' variant="dark">
      <Container>
        <Navbar.Brand href="/"><img className='Obw_logo' src={Obj_logo} alt="BigCo Inc. logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
          <Nav.Link href="/" className='nav_font'>Home</Nav.Link>
            <Nav.Link href="/login" className='nav_font'>Tickets</Nav.Link>
            <Nav.Link eventKey={2} href="/form" className='nav_font'>
           Submit Tickets
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default CollapsibleExample;