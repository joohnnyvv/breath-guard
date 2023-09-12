import {Navbar, Nav, Container, Stack, NavDropdown} from "react-bootstrap";
import LoginModal from "../AccountMgmt/LoginModal";
import RegisterModal from "../AccountMgmt/RegisterModal";
import logo from "../../assets/logo1.png";
import styles from "../../styles/navBar.module.css";
import "../../styles/custom-bootstrap/custom-dropdown.css";
import {useState} from "react";
import {Link} from "react-router-dom";
import {AiFillLinkedin, AiFillPhone, AiOutlineMail} from "react-icons/ai";
import {FaGithubSquare} from "react-icons/fa";

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
                        <Nav style={{textAlign: "center"}}>
                            <NavDropdown title={"Contact"} className="mx-4 custom-dropdown"
                                     drop="down-centered">
                            <Stack gap={4} className="mx-5 justify-content-center">
                                <NavDropdown.Item>
                                    <a
                                        href='mailto:janekrembikowski@gmail.com?subject=Question about the BreathGuard app'
                                        target="_blank">
                                        <AiOutlineMail style={{height: "30px", width: "auto", color: "black"}}/>
                                    </a>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <a href="https://github.com/joohnnyvv" target="_blank">
                                        <FaGithubSquare style={{height: "30px", width: "auto", color: "black"}}/>
                                    </a>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <a href="https://www.linkedin.com/in/jan-rembikowski/" target="_blank">
                                        <AiFillLinkedin style={{height: "30px", width: "auto", color: "black"}}/>
                                    </a>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <a href="tel:123-456-789" target="_blank">
                                        <AiFillPhone style={{height: "30px", width: "auto", color: "black"}}/>
                                    </a>
                                </NavDropdown.Item>
                            </Stack>
                            </NavDropdown>
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