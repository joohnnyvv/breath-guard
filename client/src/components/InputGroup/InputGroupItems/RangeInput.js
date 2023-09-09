import {Form} from "react-bootstrap";
import styles from "../../../styles/inputGroup.module.css";
import {useEffect, useState} from "react";
import "../../../styles/custom-range.css";

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
        <div className={styles.inputGroupSection}>
            <div>
            {sectionLabel}
            </div>
            <div className={styles.rangeLabels}>
                <Form.Label style={{width: "50%", alignSelf: "flex-end"}}>
                    {minLabel}
                </Form.Label>
                <Form.Label style={{width: "50%",  alignSelf: "flex-end"}}>
                    {maxLabel}
                </Form.Label>
            </div>
            <Form.Range min={1} max={8} onChange={handleValueChange}
                        value={selectedValue}/>
        </div>
    )
}