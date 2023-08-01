import {Form, Button} from "react-bootstrap";
import styles from "../../styles/inputGroup.module.css";
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
        const storedSelectedSex = localStorage.getItem(localStorageItemName);
        if (storedSelectedSex) {
            setSelectedValue(parseInt(storedSelectedSex, 10));
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
            {sectionLabel}
            <div className={styles.rangeLabels}>
                <Form.Label style={{width: "50%"}}>
                    {minLabel}
                </Form.Label>
                <Form.Label style={{width: "50%"}}>
                    {maxLabel}
                </Form.Label>
            </div>
            <Form.Range style={{marginBottom: 0, width: "80%"}} min={1} max={8} onChange={handleValueChange}
                        value={selectedValue}/>
        </div>
    )
}