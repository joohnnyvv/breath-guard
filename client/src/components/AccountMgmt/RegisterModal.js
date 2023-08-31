import {Modal, Button, Form} from "react-bootstrap";
import styles from "../../styles/accountMgmt.module.css";
import {useEffect, useRef, useState} from "react";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

export default function RegisterModal(props) {

    const userRef = useRef();
    const errRef = useRef();

    const [userName, setUserName] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatchPwd, setValidMatchPwd] = useState(false);
    const [matchPwdFocus, setMatchPwdFocus] = useState(false);

    const [errMsg, setErrorMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current?.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(userName));
    }, [userName])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatchPwd(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrorMsg('');
    }, [userName, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(userName);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrorMsg("Invalid Entry");
            return;
        }
        console.log(userName, pwd);
        setSuccess(true);
    }

    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className={styles.modalFullBody}
            >
                <Form onSubmit={handleSubmit}>
                    <Modal.Header closeButton className={styles.modalHeader}>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Enter login details
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={styles.modalBody}>
                        <p className={`${errMsg ?
                            styles.instructions : styles.offscreen}`}>
                            {errMsg}
                        </p>
                        <Form.Label htmlFor="username">Login:</Form.Label>
                        <Form.Control
                            className={`${userFocus && userName && !validName ?
                                styles.invalidBorder : ''}`}
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUserName(e.target.value)}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={`${userFocus && userName && !validName ?
                            styles.instructions : styles.offscreen}`}>
                            4 to 24 characters.<br/>
                            Must begin with a letter.<br/>
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                        <Form.Label htmlFor="password">Password:</Form.Label>
                        <Form.Control
                            className={`${pwdFocus && !validPwd ?
                                styles.invalidBorder : ''}`}
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={`${pwdFocus && !validPwd ?
                            styles.instructions : styles.offscreen}`}>
                            8 to 24 characters.<br/>
                            Must include uppercase and lowercase letters, a number and a special
                            character.<br/>
                            Allowed special characters:
                            <span aria-label="exclamation mark">!</span>
                            <span aria-label="at symbol">@</span>
                            <span aria-label="hashtag">#</ span>
                            <span aria-label="dollar sign">$</span>
                            <span aria-label="percent">%</span>
                        </p>
                        <Form.Label htmlFor="inputPassword">Repeat password:</Form.Label>
                        <Form.Control
                            className={`${matchPwdFocus && !validMatchPwd ?
                                styles.invalidBorder : ''}`}
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            required
                            aria-invalid={validMatchPwd ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchPwdFocus(true)}
                            onBlur={() => setMatchPwdFocus(false)}
                        />
                        <p id="confirmnote" className={`${matchPwdFocus && !validMatchPwd ?
                            styles.instructions : styles.offscreen}`}>
                            Passwords don't match.
                        </p>
                    </Modal.Body>
                    <Modal.Footer className={styles.modalFooter}>
                        <p className={styles.registered}>
                            Already registered?
                            <Button className={styles.logInButton}>Sign In</Button>
                        </p>
                        <div className={styles.buttonWrapper}>
                            <Button className={styles.submitButton}
                                    disabled={!validName || !validPwd || !validMatchPwd}
                                    type="submit"
                                    >Sign Up
                            </Button>
                            <Button className={styles.closeButton}
                                    onClick={() => {
                                        setUserName('');
                                        setPwd('');
                                        setMatchPwd('');
                                        props.onHide();
                            }}>
                                Close
                            </Button>
                        </div>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>)
}