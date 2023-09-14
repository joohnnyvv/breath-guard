import {Container, Toast, ToastContainer} from "react-bootstrap";
import styles from "../../../styles/resultPage.module.css";
import React, {useEffect, useState} from "react";
import ReactTyped from "react-typed";

export default function ResultPage({ predictionValue }) {

    const [timeElapsed, setTimeElapsed] = useState(0);

    const messages = [
        "In my estimation, the risk of lung cancer is low in your case! Maintain a healthy lifestyle, avoid risks," +
        " don't smoke and remember to check your health regularly!" +
        " Congratulations on the result, I hope we will stay in touch! Great job buddy",
        "Your risk of lung cancer is moderate according to my prediction. " +
        "Prevention tip: Increase lung cancer screenings and consult a healthcare professional for " +
        "personalized advice. Stay vigilant about your health.",
        "We're concerned to inform you that our model predicts a high risk of lung cancer. " +
        "Prevention tip: Seek immediate medical attention, schedule comprehensive screenings, and consult " +
        "a specialist for further evaluation and intervention. It's crucial to act promptly."
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeElapsed((prevTimeElapsed) => prevTimeElapsed + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const minutes = Math.floor(timeElapsed / 60);

    return (
            <Container className={`mt-5 ${styles.resultBody}`} fluid>
                <ToastContainer position="middle-center">
                    <Toast show={true} animation={false}>
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
                                            return <ReactTyped strings={[messages[0]]} typeSpeed={20}/>;
                                        case 1:
                                            return <ReactTyped strings={[messages[1]]} typeSpeed={20}/>;
                                        case 2:
                                            return <ReactTyped strings={[messages[2]]} typeSpeed={20}/>;
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