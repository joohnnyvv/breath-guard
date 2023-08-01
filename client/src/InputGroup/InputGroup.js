import styles from "../styles/inputGroup.module.css";
import AgeInput from "./InputGroupItems/AgeInput";
import SexInput from "./InputGroupItems/SexInput";
import RangeInput from "./InputGroupItems/RangeInput";
import ResultModal from "../ResultModal/ResultModal";
import {Pagination, Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import {FiArrowRight, FiArrowLeft} from "react-icons/fi";
import "../styles/custom-pagination.css";

export default function InputGroup() {
    const [userData, setUserData] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [modalShow, setModalShow] = useState(false);
    const [modalVariant, setModalVariant] = useState("");

    let pageItems = [];
    for (let page = 1; page <= 8; page++) {
        const disabled = page !== activePage;

        pageItems.push(
            <Pagination.Item
                key={page}
                active={page === activePage}
                disabled={disabled}
                onClick={() => {
                    setActivePage(page)
                }}
            >
                {page}
            </Pagination.Item>
        );
    }

    useEffect(() => {
        console.log(userData);
    }, [userData]);

    const [result, setResult] = useState('');

    const handleDataSubmit = async () => {
        const url = 'http://localhost:5000/get-prediction';
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
            setResult(resultData.prediction);
            if (resultData.prediction[0] === 0) {
                setModalVariant("success");
            } else if (resultData.prediction[0] === 1) {
                setModalVariant("warning");
            } else if (resultData.prediction[0] === 2) {
                setModalVariant("danger");
            }
            setModalShow(true);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className={styles.inputGroupBody}>
            <div className={styles.inputGroupLabel}>
                ASSESS YOUR RISK OF DEVELOPING LUNG CANCER
            </div>
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
            <div className={styles.paginationStyle}>
                <Button
                    className="mx-3"
                    style={{height: "30px", display: "flex", alignItems: "center", backgroundColor: "#7C9D96", borderColor: "#090a29"}}
                    onClick={() => {
                        activePage > 1 && setActivePage(activePage - 1);
                    }}
                >
                    <FiArrowLeft/>
                </Button>
                <Pagination size="sm">{pageItems}</Pagination>
                <Button
                    disabled={activePage > userData.length}
                    className="mx-3"
                    style={{height: "30px", display: "flex", alignItems: "center", backgroundColor: "#7C9D96", borderColor: "#090a29"}}
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
    );
}
