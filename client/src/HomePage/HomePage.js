import InputGroup from "../InputGroup/InputGroup";
import NavBar from "../NavBar/NavBar";
import styles from "../styles/homePage.module.css"

export default function HomePage() {
    return (
        <div className={styles.homePageBody}>
            <NavBar />
            <InputGroup/>
        </div>
    )
}