import styles from "../../styles/homePage.module.css";
import homePageBg from "../../assets/home-page-bg.jpg";
import {Link} from "react-router-dom";
import {SlGraph} from "react-icons/sl";

export default function HomePage() {
    return (
        <>
            <div className={styles.homePageBody} style={{backgroundImage: `url(${homePageBg})`}}>
                <div className={styles.titleWrapper}>
                    <h1>BreathGuard</h1><br/>
                    <h3>Ai-powered Lung Cancer</h3><br/>
                    <h3>Risk Predictor</h3>
                    <div>
                        <Link to="/prediction"><button className={styles.startButton}>Get Started</button></Link>
                    </div>
                </div>
            </div>
            <div className={styles.kaggleBody}>
                <h2 style={{fontWeight: "bold"}}>Air Pollution and Lung Cancer</h2>
                <div className={styles.kaggleDesc}>
                    <h4 style={{width: "40%"}}>The artificial intelligence model uses a dataset from the <a
                        href="https://www.kaggle.com/datasets/thedevastator/c
                        ancer-patients-and-air-pollution-a-new-link" target="_blank">
                            Kaggle
                        </a> platform.
                        Lung cancer is the leading cause of cancer death worldwide, accounting for
                        1.59 million deaths in 2018. The majority of lung cancer cases are attributed to smoking,
                        but exposure to air pollution is also a risk factor. A new study has found that air pollution
                        may be linked to an increased risk of lung cancer, even in nonsmokers.<br/><br/>
                        The study, which was published in
                        the journal Nature Medicine, looked at data from over 462,000 people in China who were followed
                        for an average of six years. The participants were divided into two groups: those who lived in
                        areas with high levels of air pollution and those who lived in areas with low levels of air
                        pollution.</h4>
                     <SlGraph className={styles.graphIcon}/>
                </div>
            </div>
        </>
    )
}