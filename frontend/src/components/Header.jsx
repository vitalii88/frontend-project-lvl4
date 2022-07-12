import {Container, Navbar, Button} from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar bg='light' className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home">My chat</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button variant="primary" href='/login'>Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
};

export default Header;
