import styles from "../styles/inputGroup.module.css";
import AgeInput from "./InputGroupItems/AgeInput";
import SexInput from "./InputGroupItems/SexInput";
import AirPollutionInput from "./InputGroupItems/AirPollutionInput";
import { Pagination, Button } from "react-bootstrap";
import {useEffect, useState} from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

export default function InputGroup() {
    const [userData, setUserData] = useState([]);
    const [activePage, setActivePage] = useState(1);

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

    return (
        <div className={styles.inputGroupBody}>
            <div className={styles.inputGroupLabel}>
                ASSESS YOUR RISK OF DEVELOPING LUNG CANCER
            </div>
            {activePage === 1 && (
                <AgeInput userData={userData} setUserData={setUserData} />
            )}
            {activePage === 2 && (
                <SexInput userData={userData} setUserData={setUserData} />
            )}
            {activePage === 3 && (
                <AirPollutionInput userData={userData} setUserData={setUserData} />
            )}
            <div className={styles.paginationStyle}>
                <Button
                    className="mx-3"
                    style={{ height: "37px", display: "flex", alignItems: "center" }}
                    onClick={() => {
                        activePage > 1 && setActivePage(activePage - 1);
                    }}
                >
                    <FiArrowLeft />
                </Button>
                <Pagination>{pageItems}</Pagination>
                <Button
                    disabled={activePage > userData.length}
                    className="mx-3"
                    style={{ height: "37px", display: "flex", alignItems: "center" }}
                    onClick={() => {
                        activePage < 8 && setActivePage(activePage + 1);
                    }}
                >
                    <FiArrowRight />
                </Button>
            </div>
        </div>
    );
}
