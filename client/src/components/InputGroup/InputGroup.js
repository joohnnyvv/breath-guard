import styles from "../../styles/inputGroup.module.css";
import AgeInput from "./InputGroupItems/AgeInput";
import SexInput from "./InputGroupItems/SexInput";
import RangeInput from "./InputGroupItems/RangeInput";
import ResultModal from "../ResultModal/ResultModal";
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import {FiArrowRight, FiArrowLeft} from "react-icons/fi";
import {LinearProgress} from "@mui/material";

export default function InputGroup() {
    const [userData, setUserData] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [modalShow, setModalShow] = useState(false);
    const [modalVariant, setModalVariant] = useState("");

    useEffect(() => {
        console.log(userData);
    }, [userData]);


    const handleDataSubmit = async () => {
        const url = 'https://lung-cancer-prediction-d3d07d9e4aad.herokuapp.com/get-prediction';
        const data = {user_data: userData};

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const resultData = await response.json();
            if (resultData.prediction[0] === 0) {
                setModalVariant("low");
            } else if (resultData.prediction[0] === 1) {
                setModalVariant("medium");
            } else if (resultData.prediction[0] === 2) {
                setModalVariant("high");
            }
            setModalShow(true);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className={styles.inputPage}>
        <div className={styles.inputGroupBody}>
            <h1 className={styles.inputGroupLabel} style={{fontWeight: "bold"}}>
                Assess your risk of developing lung cancer
            </h1>
            <div className={styles.navigationSection}>
                <div className={styles.inputArea}>
                    {activePage === 1 && (
                        <AgeInput userData={userData} setUserData={setUserData}/>
                    )}
                    {activePage === 2 && (
                        <SexInput userData={userData} setUserData={setUserData}/>
                    )}
                    {activePage === 3 && (
                        <RangeInput userData={userData} setUserData={setUserData}
                                    sectionLabel="Evaluate air pollution where you live"
                                    minLabel="Coastal/Mountainous Locations"
                                    maxLabel="Very high population density/lack of environmental regulations"
                                    dataIndex={2}
                                    localStorageItemName="selectedPollution"/>
                    )}
                    {activePage === 4 && (
                        <RangeInput userData={userData} setUserData={setUserData}
                                    sectionLabel="How much alcohol do you use?"
                                    minLabel="I do not drink alcohol at all"
                                    maxLabel="I am an alcoholic addict"
                                    dataIndex={3}
                                    localStorageItemName="selectedAlcoholUse"/>
                    )}
                    {activePage === 5 && (
                        <RangeInput userData={userData} setUserData={setUserData}
                                    sectionLabel="How do you assess your genetic risk for lung cancer?"
                                    minLabel="None of my family members have had lung cancer"
                                    maxLabel="Several close family members have had lung cancer"
                                    dataIndex={4}
                                    localStorageItemName="selectedGeneticRisk"/>
                    )}
                    {activePage === 6 && (
                        <RangeInput userData={userData} setUserData={setUserData}
                                    sectionLabel="How severe a chronic lung disease do you suffer from?"
                                    minLabel="I do not suffer from any chronic lung diseases"
                                    maxLabel="I suffer from severe lung diseases (such as Interstitial Lung Disease)"
                                    dataIndex={5}
                                    localStorageItemName="selectedLungDisease"/>
                    )}
                    {activePage === 7 && (
                        <RangeInput userData={userData} setUserData={setUserData}
                                    sectionLabel="How much do you smoke?"
                                    minLabel="I do not smoke at all"
                                    maxLabel="I smoke a lot (more than a pack of cigarettes a day)"
                                    dataIndex={6}
                                    localStorageItemName="selectedSmokingAmount"/>
                    )}
                    {activePage === 8 && (
                        <RangeInput userData={userData} setUserData={setUserData}
                                    sectionLabel="How often are you around smokers?"
                                    minLabel="Only when I pass them on the street"
                                    maxLabel="I live with a smoker, who smokes at home"
                                    dataIndex={7}
                                    localStorageItemName="selectedPassiveSmokingAmount"/>
                    )}
                </div>
            </div>
            <div className={styles.buttonsWrapper}>
            <Button
                className="mx-3"
                style={{
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#3870d2",
                    borderColor: "#3870d2",
                    borderRadius: "40%"
                }}
                onClick={() => {
                    activePage > 1 && setActivePage(activePage - 1);
                }}
            >
                <FiArrowLeft/>
            </Button>
            <Button
                disabled={activePage > userData.length}
                className="mx-3"
                style={{
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#3870d2",
                    borderColor: "#3870d2",
                    borderRadius: "40%"
                }}
                onClick={() => {
                    activePage < 8 ? setActivePage(activePage + 1) : handleDataSubmit();
                }}
            >
                {activePage === 8 ? "Confirm" : <FiArrowRight/>}
            </Button>
            </div>
            <ResultModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                variant={modalVariant}
            />
        </div>
            <div className={styles.progressStyle}>
                <LinearProgress variant="determinate" value={activePage /8 * 100 - 1} className={styles.customProgressBar}/>
            </div>
        </div>
    );
}
