import {Form} from "react-bootstrap";
import styles from "../../styles/inputGroup.module.css";
import {useEffect, useState} from "react";

export default function AirPollutionInput({userData, setUserData}) {

    const [selectedPollution, setSelectedPollution] = useState(4);

    useEffect(() => {
        const storedSelectedSex = localStorage.getItem("selectedPollution");
        if (storedSelectedSex) {
            setSelectedPollution(parseInt(storedSelectedSex, 10));
        }
    }, []);

    const handlePollutionChange = (event) => {
        const pollutionValue = parseInt(event.target.value);
        setSelectedPollution(pollutionValue);
        const updatedUserData = [...userData];
        updatedUserData[2] = pollutionValue;
        setUserData(updatedUserData);
        localStorage.setItem("selectedSex", pollutionValue.toString());
    }

    return (
        <div className={styles.inputGroupSection}>
            Evaluate air pollution where you live
            <div className={styles.rangeLabels}>
                <Form.Label style={{width: "25%"}}>
                    Coastal/Mountainous Locations
                </Form.Label>
                <Form.Label style={{width: "25%"}}>
                    Very high population density/lack of environmental regulations
                </Form.Label>
            </div>
            <Form.Range style={{marginBottom: 0}} min={1} max={8} onChange={handlePollutionChange}
                        value={selectedPollution}/>
        </div>
    )
}