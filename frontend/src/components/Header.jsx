import {Container, Navbar, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar bg='light' className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/">My chat</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button as={Link} variant="primary" to='/login'>Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
};

export default Header;
