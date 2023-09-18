import Form from "react-bootstrap/Form";
import {useEffect, useState} from "react";
import styles from "../../../styles/predictionPage.module.css";
import {Col, Row} from "react-bootstrap";

export default function AgeInput({userData, setUserData, setIsButtonDisabled}) {

    const maxDate = new Date().toISOString().split('T')[0];
    const [chosenDate, setChosenDate] = useState(new Date());

    useEffect(() => {
        setIsButtonDisabled(false);
        const storedSelectedAge = localStorage.getItem("selectedAge");
        const storedSelectedDate = localStorage.getItem("selectedDate");
        if (storedSelectedAge && storedSelectedDate || userData[0]) {
            setUserData([parseInt(storedSelectedAge, 10), ...userData.slice(1)]);
            setChosenDate(new Date(storedSelectedDate));
        } else {
            setIsButtonDisabled(true);
        }
    }, []);

    const handleAgeChange = (event) => {
        const dateValue = new Date(event.target.value);
        setChosenDate(dateValue);
        const dateDifference = Date.now() - dateValue;
        const ageDate = new Date(dateDifference);
        const ageValue = Math.abs(ageDate.getUTCFullYear() - 1970);
        setUserData([ageValue, ...userData.slice(1)]);
        setIsButtonDisabled(false);
        localStorage.setItem("selectedAge", ageValue.toString());
        localStorage.setItem("selectedDate", dateValue.toString());
    };

    return (
        <Row className={`mt-5 ${styles.inputGroupSection}`}>
            <Col>
                <Form.Group controlId="dob">
                    <Form.Label className="mb-5">When were you born?</Form.Label>
                    <Form.Control className="w-50 mx-auto" name="dob" type="date"
                    onChange={handleAgeChange} max={maxDate} value={chosenDate.toISOString().split('T')[0]}/>
                </Form.Group>
            </Col>
        </Row>
    );
}
