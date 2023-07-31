import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap";
import logo from "../assets/logo1.png";
import styles from "../styles/homePage.module.css";

export default function NavBar() {

    return (<div style={{position: "absolute", top: "0", width: "100vw", zIndex: "2"}}>
        <Navbar collapseOnSelect expand="lg" className={styles.navBarBody}>
            <Container>
                <Navbar.Brand><img src={logo} style={{width: "130px"}} alt={"Logo"}></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="https://github.com/joohnnyvv/breath-guard" target="_blank">GitHub</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className={styles.navLink}>Log In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>)
}