import {Navbar, Nav, Container} from "react-bootstrap";
import logo from "../assets/logo1.png";
import styles from "../styles/navBar.module.css";
import {AiOutlineMail, AiFillPhone, AiFillLinkedin} from "react-icons/ai";
import {FaGithubSquare} from "react-icons/fa";

export default function NavBar() {
    return (
        <div style={{position: "absolute", top: "0", width: "100vw", zIndex: "2"}}>
            <Navbar collapseOnSelect expand="lg" className={styles.navBarBody}>
                <Container>
                    <Navbar.Brand><img src={logo} style={{width: "130px"}} alt={"Logo"}></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav style={{textAlign: "center"}}>
                            <Nav.Link>Log In</Nav.Link>
                            <Nav.Link>Register</Nav.Link>
                        </Nav>
                        <Nav style={{display: "flex", justifyContent: "center"}} className="d-flex flex-row">
                            <Nav.Link
                                href='mailto:janekrembikowski@gmail.com?subject=Question about the BreathGuard app'
                                target="_blank">
                                <AiOutlineMail style={{height: "30px", width: "auto"}} className={styles.mailIcon}/>
                            </Nav.Link>
                            <Nav.Link href="https://github.com/joohnnyvv" target="_blank">
                                <FaGithubSquare style={{height: "30px", width: "auto"}}/>
                            </Nav.Link>
                            <Nav.Link href="https://www.linkedin.com/in/jan-rembikowski/" target="_blank">
                                <AiFillLinkedin style={{height: "30px", width: "auto"}}/>
                            </Nav.Link>
                            <Nav.Link href="tel:123-456-789" target="_blank">
                                <AiFillPhone style={{height: "30px", width: "auto"}}/>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>)
}