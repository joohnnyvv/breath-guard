import {Modal, Button, Form} from "react-bootstrap";
import styles from "../styles/accountMgmt.module.css";

export default function RegisterModal(props) {
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className={styles.modalFullBody}
            >
                <Modal.Header closeButton className={styles.modalHeader}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Enter login details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.modalBody}>
                    <Form.Label htmlFor="inputLogin">Login</Form.Label>
                    <Form.Control
                        id="inputLogin"
                    />
                    <Form.Label htmlFor="inputPassword">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword"
                    />
                </Modal.Body>
                <Modal.Footer className={styles.modalFooter}>
                    <Button className={styles.closeButton} onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>)
}