import {Modal, Button, Alert} from "react-bootstrap";
import styles from "../../styles/resultModal.module.css";

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
                    {props.variant === "low" && <h2>
                        LOW RISK
                    </h2>}
                    {props.variant === "medium" &&
                        <h2>
                            MEDIUM RISK
                        </h2>}
                    {props.variant === "high" &&
                        <h2>
                            HIGH RISK
                        </h2>}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.modalBody}>
                <Alert className={styles.resultAlert}>
                    {props.variant === "low" &&
                        <div>
                            Congratulations! The risk of lung cancer in your case is low.
                            Remember to continue to take
                            care of your health! Keep it up!
                        </div>}
                    {props.variant === "medium" &&
                        <div>
                            It could have been better. Try to avoid potential hazards. Don't smoke, ensure frequent
                            exposure to fresh, unpolluted air
                        </div>}
                    {props.variant === "high" &&
                        <div>
                            You are in the risk group! Be sure to visit your doctor. Get tests done (spirometry, chest
                            X-ray, CT scan of the lungs). It's worth taking matters into your own hands until it's too
                            late!
                        </div>}
                </Alert>
            </Modal.Body>
            <Modal.Footer className={styles.modalFooter}>
                <Button onClick={props.onHide} className={styles.closeButton}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}