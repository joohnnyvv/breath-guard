import {Modal, Button, Alert} from "react-bootstrap";
import styles from "../styles/resultModal.module.css";

export default function ResultModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={styles.modalFullBody}
        >
            <Modal.Header closeButton className={styles.modalHeader}>
                <Modal.Title id="contained-modal-title-vcenter">
                    ENTERED DATA SUGGESTS THAT:
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.modalBody}>
                <Alert variant={props.variant} className={styles.resultAlert}>
                    {props.variant === "success" &&
                        <div>Congratulations! The risk of lung cancer in your case is low.
                            Remember to continue to take
                            care of your health! Keep it up!</div>}
                    {props.variant === "warning" &&
                        <div>It could have been better. Try to avoid potential hazards. Don't smoke, ensure frequent
                            exposure to fresh, unpolluted air</div>}
                    {props.variant === "danger" &&
                        <div>You are in the risk group! Be sure to visit your doctor. Get tests done (spirometry, chest
                            X-ray, CT scan of the lungs). It's worth taking matters into your own hands until it's too
                            late!</div>}
                </Alert>
            </Modal.Body>
            <Modal.Footer className={styles.modalFooter}>
                <Button onClick={props.onHide} className={styles.closeButton}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}