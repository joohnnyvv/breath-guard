import styles from "../../styles/predictionPage.module.css";
import AgeInput from "./InputGroupItems/AgeInput";
import SexInput from "./InputGroupItems/SexInput";
import RangeInput from "./InputGroupItems/RangeInput";
import {Button, Container, ProgressBar, Row, Spinner, Stack} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import ResultPage from "./ResultPage/ResultPage";

export default function PredictionPage() {
    const [userData, setUserData] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [isResult, setIsResult] = useState(false);
    const [predictionValue, setPredictionValue] = useState(-1);
    const [isSpinner, setIsSpinner] = useState(false);

    useEffect(() => {
        console.log(userData);
    }, [userData]);


    const handleDataSubmit = async () => {
        const url = 'https://lung-cancer-prediction-d3d07d9e4aad.herokuapp.com/get-prediction';
        const data = {user_data: userData};
        setIsSpinner(true);

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const resultData = await response.json();
            setPredictionValue(parseInt(resultData.prediction));
            setIsResult(true);
            setIsSpinner(false);
            console.log("Result data: ", parseInt(resultData.prediction))
        } catch (error) {
            console.error('Error:', error)
            setIsSpinner(false);
        }
    }

    return (
        isResult ? 
            <ResultPage predictionValue={predictionValue}/> :
            isSpinner ? <Spinner animation="border" className={styles.spinner}/> :
            <Container>
                <Container fluid className={`pb-5 mt-5 ${styles.predictionPageBody}`}>
                    <Container className="py-5 my-5 h-100">
                        <Row>
                            <h1 className={`pb-3 ${styles.inputGroupLabel}`} style={{fontWeight: "bold"}}>
                                Assess your risk of developing lung cancer
                            </h1>
                        </Row>
                        <Row>
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
                                            maxLabel="Lack of environmental regulations"
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
                                            maxLabel="I suffer from severe lung diseases"
                                            dataIndex={5}
                                            localStorageItemName="selectedLungDisease"/>
                            )}
                            {activePage === 7 && (
                                <RangeInput userData={userData} setUserData={setUserData}
                                            sectionLabel="How much do you smoke?"
                                            minLabel="I do not smoke at all"
                                            maxLabel="I smoke more than a pack of cigarettes a day"
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
                        </Row>
                    </Container>
                    <Container className="position-relative top-0">
                        <Row>
                            <Stack direction="horizontal" className="justify-content-center"
                                   gap={5}>
                                <Button
                                    style={{
                                        height: "40px",
                                        display: "flex",
                                        alignItems: "center",
                                        backgroundColor: "#3870d2",
                                        borderColor: "#3870d2"
                                    }}
                                    onClick={() => {
                                        activePage > 1 && setActivePage(activePage - 1);
                                    }}
                                >
                                    Prev
                                </Button>
                                <Button
                                    disabled={activePage > userData.length}
                                    style={{
                                        height: "40px",
                                        display: "flex",
                                        alignItems: "center",
                                        backgroundColor: "#3870d2",
                                        borderColor: "#3870d2",
                                    }}
                                    onClick={() => {
                                        activePage < 8 ? setActivePage(activePage + 1) : handleDataSubmit();
                                    }}
                                >
                                    {activePage === 8 ? "Confirm" : "Next"}
                                </Button>
                            </Stack>
                        </Row>
                    </Container>
                </Container>
                <Row className="justify-content-center my-5">
                    <ProgressBar visuallyHidden max={8} min={1} now={activePage} className={styles.customProgressBar}/>
                </Row>
            </Container>
    );
}
