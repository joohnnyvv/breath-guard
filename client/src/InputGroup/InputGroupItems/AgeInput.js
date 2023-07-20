import Form from "react-bootstrap/Form";
import {useEffect, useState} from "react";
import styles from "../../styles/inputGroup.module.css";

export default function AgeInput({userData, setUserData}) {

    const [selectedAge, setSelectedAge] = useState(0)

    useEffect(() => {
        const storedSelectedAge = localStorage.getItem("selectedAge");
        if (storedSelectedAge) {
            setSelectedAge(parseInt(storedSelectedAge, 10));
        }
    }, []);
    const handleAgeChange = (event) => {
        const ageValue = parseInt(event.target.value);
        setSelectedAge(ageValue);
        setUserData([ageValue, ...userData.slice(1)]);
        localStorage.setItem("selectedAge", ageValue.toString());
    };

    return (
        <div className={styles.inputGroupSection}>
            How old are you?
            <Form.Select style={{width: "80px", marginTop: "15px"}} onChange={handleAgeChange} value={selectedAge}>
                {Array.from({length: 99}, (_, index) => index + 1).map((age) => (
                    <option key={age} value={age}>
                        {age}
                    </option>
                ))}
            </Form.Select>
        </div>
    );
}
