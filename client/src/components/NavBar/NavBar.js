import {Navbar, Nav, Container} from "react-bootstrap";
import LoginModal from "../AccountMgmt/LoginModal";
import RegisterModal from "../AccountMgmt/RegisterModal";
import logo from "../../assets/logo1.png";
import styles from "../../styles/navBar.module.css";
import {useState} from "react";
import {Link} from "react-router-dom";

export default function NavBar() {

    const [loginModalShow, setLoginModalShow] = useState(false);
    const [registerModalShow, setRegisterModalShow] = useState(false);

    return (
        <div style={{position: "sticky", top: "0", width: "100vw", zIndex: "2"}}>
            <Navbar collapseOnSelect expand="lg" className={styles.navBarBody}>
                <Container>
                    <Link to="/"><Navbar.Brand><img src={logo} style={{width: "180px"}}
                                                    alt={"Logo"}></img></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav style={{textAlign: "center"}}>
                            <Nav.Link onClick={() => setLoginModalShow(true)}>Log In</Nav.Link>
                            <Nav.Link onClick={() => setRegisterModalShow(true)}>Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <LoginModal
                show={loginModalShow}
                onHide={() => setLoginModalShow(false)}
            />
            <RegisterModal
                show={registerModalShow}
                onHide={() => setRegisterModalShow(false)}
            />
        </div>)
}