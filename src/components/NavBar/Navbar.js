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
              <Nav.Link href="https://t.me/etweetbsc" target="_blank">
                <h1>Telegram</h1>
              </Nav.Link>
              <Nav.Link href="https://poocoin.app/tokens/0x7b6dacedbcf26e6b7a1e20ff2c6d57a36d462ade" target="_blank">
                <h1>Chart</h1>
              </Nav.Link>
              <Nav.Link href="https://etweet.app/whitepaper.pdf">
                <h1>Whitepaper</h1>
              </Nav.Link>
              <Nav.Link href="https://poocoin.app/tokens/0x7b6dacedbcf26e6b7a1e20ff2c6d57a36d462ade" target="_blank" className="buyBox">
                <div className="buyButton">
                  <h1>Buy</h1>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
