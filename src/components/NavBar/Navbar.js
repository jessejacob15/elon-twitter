import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" className="myNav" fixed="top">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="https://t.me/ElonsTwitterBSC" target="_blank">
                <h1>Telegram</h1>
              </Nav.Link>
              <Nav.Link
                href="https://poocoin.app/tokens/0x4628498a8d7d6c3ce97c6b1213f07ef60bee7807"
                target="_blank"
              >
                <h1>Chart</h1>
              </Nav.Link>
              <Nav.Link href="#">
                <h1>Whitepaper</h1>
              </Nav.Link>
              <Nav.Link href="#" target="_blank" className="buyBox">
                <div className="buyButton">Buy</div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
