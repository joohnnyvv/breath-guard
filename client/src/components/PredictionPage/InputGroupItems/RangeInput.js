import {Form, Row} from "react-bootstrap";
import styles from "../../../styles/predictionPage.module.css";
import {useEffect, useState} from "react";

export default function RangeInput({
                                       userData,
                                       setUserData,
                                       sectionLabel,
                                       minLabel,
                                       maxLabel,
                                       dataIndex,
                                       localStorageItemName
                                   }) {

    const [selectedValue, setSelectedValue] = useState(4);

    useEffect(() => {
        const storedSelectedValue = localStorage.getItem(localStorageItemName);
        if (storedSelectedValue) {
            setSelectedValue(parseInt(storedSelectedValue, 10));
            const updatedUserData = [...userData];
            updatedUserData[dataIndex] = parseInt(storedSelectedValue, 10);
            setUserData(updatedUserData);
        }
    }, []);

    const handleValueChange = (event) => {
        const newPollutionValue = parseInt(event.target.value);
        setSelectedValue(newPollutionValue);
        const updatedUserData = [...userData];
        updatedUserData[dataIndex] = newPollutionValue;
        setUserData(updatedUserData);
        localStorage.setItem(localStorageItemName, newPollutionValue.toString());
    }

    return (
        <Row className={`mt-5 ${styles.inputGroupSection}`}>
            <Form.Label className="mb-3">{sectionLabel}</Form.Label>
            <Row className={`mb-2 ${styles.rangeLabels}`}>
                <Form.Label style={{width: "50%", alignSelf: "flex-end"}}>
                    {minLabel}
                </Form.Label>
                <Form.Label style={{width: "50%",  alignSelf: "flex-end"}}>
                    {maxLabel}
                </Form.Label>
            </Row>
            <Row className="justify-content-center">
                <Form.Range min={1} max={8} onChange={handleValueChange}
                            value={selectedValue} style={{width: "50%"}}/>
            </Row>
        </Row>
    )
}