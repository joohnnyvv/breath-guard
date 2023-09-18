import styles from "../../styles/predictionPage.module.css";
import data from "../../models/range-input-data.json";
import AgeInput from "./InputGroupItems/AgeInput";
import SexInput from "./InputGroupItems/SexInput";
import RangeInput from "./InputGroupItems/RangeInput";
import {Button, Container, ProgressBar, Row, Spinner, Stack} from "react-bootstrap";
import {useEffect, useState} from "react";
import ResultPage from "./ResultPage/ResultPage";

export default function PredictionPage() {
    const [userData, setUserData] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [isResult, setIsResult] = useState(false);
    const [predictionValue, setPredictionValue] = useState(-1);
    const [isSpinner, setIsSpinner] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    useEffect(() => {
        console.log(data);
    }, [])


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
            setIsSpinner(true);
        }
    }

    return (
        isResult ?
            <ResultPage predictionValue={predictionValue} setIsResult={setIsResult}/> :
            isSpinner ? <Spinner animation="border" className={styles.spinner}/> :
                <Container>
                    <Container fluid="md" className={`pb-5 mt-5 ${styles.predictionPageBody}`}>
                        <Container className="py-5 my-5 h-100">
                            <Row>
                                <h1 className={`pb-3 ${styles.inputGroupLabel}`} style={{fontWeight: "bold"}}>
                                    Assess your risk of developing lung cancer
                                </h1>
                            </Row>
                            <Row>
                                {activePage === 1 && (
                                    <AgeInput userData={userData} setUserData={setUserData}
                                              setIsButtonDisabled={setIsButtonDisabled}/>
                                )}
                                {activePage === 2 && (
                                    <SexInput userData={userData} setUserData={setUserData}
                                              setIsButtonDisabled={setIsButtonDisabled}/>
                                )}
                                {activePage === 3 && (
                                    <RangeInput userData={userData} setUserData={setUserData}
                                                sectionLabel={data[0].sectionLabel}
                                                minLabel={data[0].minLabel}
                                                maxLabel={data[0].maxLabel}
                                                dataIndex={2}
                                                localStorageItemName={data[0].localStorageItemName}
                                                setIsButtonDisabled={setIsButtonDisabled}/>
                                )}
                                {activePage === 4 && (
                                    <RangeInput userData={userData} setUserData={setUserData}
                                                sectionLabel={data[1].sectionLabel}
                                                minLabel={data[1].minLabel}
                                                maxLabel={data[1].maxLabel}
                                                dataIndex={3}
                                                localStorageItemName={data[1].localStorageItemName}
                                                setIsButtonDisabled={setIsButtonDisabled}/>
                                )}
                                {activePage === 5 && (
                                    <RangeInput userData={userData} setUserData={setUserData}
                                                sectionLabel={data[2].sectionLabel}
                                                minLabel={data[2].minLabel}
                                                maxLabel={data[2].maxLabel}
                                                dataIndex={4}
                                                localStorageItemName={data[2].localStorageItemName}
                                                setIsButtonDisabled={setIsButtonDisabled}/>
                                )}
                                {activePage === 6 && (
                                    <RangeInput userData={userData} setUserData={setUserData}
                                                sectionLabel={data[3].sectionLabel}
                                                minLabel={data[3].minLabel}
                                                maxLabel={data[3].maxLabel}
                                                dataIndex={5}
                                                localStorageItemName={data[3].localStorageItemName}
                                                setIsButtonDisabled={setIsButtonDisabled}/>
                                )}
                                {activePage === 7 && (
                                    <RangeInput userData={userData} setUserData={setUserData}
                                                sectionLabel={data[4].sectionLabel}
                                                minLabel={data[4].minLabel}
                                                maxLabel={data[4].maxLabel}
                                                dataIndex={6}
                                                localStorageItemName={data[4].localStorageItemName}
                                                setIsButtonDisabled={setIsButtonDisabled}/>
                                )}
                                {activePage === 8 && (
                                    <RangeInput userData={userData} setUserData={setUserData}
                                                sectionLabel={data[5].sectionLabel}
                                                minLabel={data[5].minLabel}
                                                maxLabel={data[5].maxLabel}
                                                dataIndex={7}
                                                localStorageItemName={data[5].localStorageItemName}
                                                setIsButtonDisabled={setIsButtonDisabled}/>
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
                                        disabled={activePage === 1}
                                    >
                                        Prev
                                    </Button>
                                    <Button
                                        disabled={isButtonDisabled}
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
                        <ProgressBar visuallyHidden max={8} min={1} now={activePage}
                                     className={styles.customProgressBar}/>
                    </Row>
                </Container>
    );
}
