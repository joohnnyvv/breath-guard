import {Container, Toast, ToastContainer} from "react-bootstrap";
import styles from "../../../styles/resultPage.module.css";
import React, {useEffect, useState} from "react";
import ReactTyped from "react-typed";
import messages from "../../../models/result-messages.json";

export default function ResultPage({ predictionValue, setIsResult }) {

    const [timeElapsed, setTimeElapsed] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeElapsed((prevTimeElapsed) => prevTimeElapsed + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const minutes = Math.floor(timeElapsed / 60);

    return (
            <Container className={`mt-5 w-50 ${styles.resultBody}`} fluid>
                <ToastContainer position="middle-center">
                    <Toast show={true} animation={false} className={`${styles.toastBody} mx-auto`}
                           onClose={() => {setIsResult(false)}}>
                        <Toast.Header>
                            <strong className="me-auto">Breath Guard</strong>
                            <small>{timeElapsed < 60 ? `${timeElapsed} seconds ago` :
                                    timeElapsed < 120 ? `${minutes} minute ago` :
                                        `${minutes} minutes ago`}</small>
                        </Toast.Header>
                        <Toast.Body>
                            <p>
                                {
                                (() => {
                                    switch (predictionValue) {
                                        case 0:
                                            return <ReactTyped strings={[messages[0].message]} typeSpeed={20}/>;
                                        case 1:
                                            return <ReactTyped strings={[messages[1].message]} typeSpeed={20}/>;
                                        case 2:
                                            return <ReactTyped strings={[messages[2].message]} typeSpeed={20}/>;
                                        default:
                                            return "Unexpected data has been received";
                                    }
                                })()
                            }
                            </p>
                        </Toast.Body>
                    </Toast>
                </ToastContainer>
            </Container>
    )
}