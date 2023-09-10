import {Form, Row} from "react-bootstrap";
import { useEffect, useState } from "react";
import styles from "../../../styles/inputGroup.module.css";
import "../../../styles/custom-form-check.css";

export default function SexInput({ userData, setUserData }) {
    const [selectedSex, setSelectedSex] = useState(null);

    useEffect(() => {
        const storedSelectedSex = localStorage.getItem("selectedSex");
        if (storedSelectedSex) {
            setSelectedSex(parseInt(storedSelectedSex, 10));
            const updatedUserData = [...userData];
            updatedUserData[1] = parseInt(storedSelectedSex, 10);
            setUserData(updatedUserData);
        }
    }, []);

    const handleSexChange = (event) => {
        const sexValue = parseInt(event.target.value, 10);
        setSelectedSex(sexValue);
        const updatedUserData = [...userData];
        updatedUserData[1] = sexValue;
        setUserData(updatedUserData);
        localStorage.setItem("selectedSex", sexValue.toString());
    };


    return (
        <Row className={styles.inputGroupSection}>
            <div>
                Select your sex:
            </div>
            <Form>
                <div key={`default-checkbox`}>
                    <Form.Check
                        className="mx-4 custom-checkbox"
                        inline
                        type={"radio"}
                        id={`male-checkbox`}
                        label={`Male`}
                        name="group1"
                        value="1"
                        checked={selectedSex === 1}
                        onChange={handleSexChange}
                    />
                    <Form.Check
                        inline
                        className="custom-checkbox"
                        type={"radio"}
                        label={`Female`}
                        id={`female-checkbox`}
                        name="group1"
                        value="2"
                        checked={selectedSex === 2}
                        onChange={handleSexChange}
                    />
                </div>
            </Form>
        </Row>
    );
}
