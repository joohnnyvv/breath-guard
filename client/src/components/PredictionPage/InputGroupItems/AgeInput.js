import Form from "react-bootstrap/Form";
import {useEffect, useState} from "react";
import styles from "../../../styles/predictionPage.module.css";
import {Col, Row} from "react-bootstrap";

export default function AgeInput({userData, setUserData}) {

    const maxDate = new Date().toISOString().split('T')[0];

    useEffect(() => {
        const storedSelectedAge = localStorage.getItem("selectedAge");
        if (storedSelectedAge) {
            setUserData([parseInt(storedSelectedAge, 10), ...userData.slice(1)]);
        }
    }, []);

    const handleAgeChange = (event) => {
        const dateValue = new Date(event.target.value);
        const dateDifference = Date.now() - dateValue;
        const ageDate = new Date(dateDifference);
        const ageValue = Math.abs(ageDate.getUTCFullYear() - 1970);
        setUserData([ageValue, ...userData.slice(1)]);
        localStorage.setItem("selectedAge", ageValue.toString());
    };

    return (
        <Row className={`mt-5 ${styles.inputGroupSection}`}>
            <Col>
                <Form.Group controlId="dob">
                    <Form.Label className="mb-5">How old are you?</Form.Label>
                    <Form.Control className="w-25 mx-auto" name="dob" type="date" placeholder="Date of Birth"
                    onChange={handleAgeChange} max={maxDate}/>
                </Form.Group>
            </Col>
        </Row>
    );
}
