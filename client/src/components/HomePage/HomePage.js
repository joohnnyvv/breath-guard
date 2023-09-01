import styles from "../../styles/homePage.module.css";
import homePageBg from "../../assets/home-page-bg.jpg";
import {Link} from "react-router-dom";
import aiPicture from "../../assets/ai.png";
import medicalPicture from "../../assets/medical.png";
import alaLogo from "../../assets/ALAlogo.png";
import nclLogo from "../../assets/NCLlogo.png";
import wcrfiLogo from "../../assets/WCRFILogo.png";
import {Card} from "react-bootstrap";

export default function HomePage() {
    return (
        <>
            <div className={styles.homePageBody} style={{backgroundImage: `url(${homePageBg})`}}>
                <div className={styles.titleWrapper}>
                    <h1>BreathGuard</h1><br/>
                    <h3>Ai-powered Lung Cancer</h3><br/>
                    <h3>Risk Predictor</h3>
                    <div>
                        <Link to="/prediction">
                            <button className={styles.startButton}>Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.predictorSectionBody}>
                <h2 style={{fontWeight: "bold"}}>Ai-Powered Predictor</h2>
                <div className={styles.kaggleDesc}>
                    <h4 style={{width: "40%"}}>The artificial intelligence model uses a dataset from the <a
                        href="https://www.kaggle.com/datasets/thedevastator/cancer-patients-and-air-pollution-a-new-link"
                        target="_blank">
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
                    <img src={aiPicture} alt="Ai Picture" className={styles.aiPicture}/>
                </div>
            </div>
            <div className={styles.preventionSectionBody}>
                <h2 style={{fontWeight: "bold"}}>Prevention Is Worth It</h2>
                <div className={styles.preventionDesc}>
                    <img src={medicalPicture} alt="Doctor" className={styles.doctorPicture}/>
                    <h4 style={{width: "40%"}}>In the pursuit of a healthier and happier life, taking proactive steps to
                        safeguard your well-being is paramount. Research has shown that even small changes in our daily
                        routines can make a significant difference in preventing diseases, including lung
                        cancer.<br/><br/>
                        Preventing lung cancer is a shared responsibility. By taking care of our health, we're not only
                        enhancing our own lives but also contributing to healthier communities. Together, we can reduce
                        the impact of lung cancer and improve our quality of life.</h4>
                </div>
            </div>
            <div className={styles.addResourcesBody}>
                <h2 style={{fontWeight: "bold"}}>Additional Information On Lung Cancer And Prophylaxis</h2>
                <div className={styles.cardsWrapper}>
                    <a href="https://www.wcrf.org" target="_blank">
                        <Card className={styles.cardStyle}>
                            <Card.Img variant="top" src={wcrfiLogo}/>
                            <Card.Body className={styles.cardBody}>
                                <Card.Title>World Cancer Research Fund</Card.Title>
                                <Card.Text>
                                    World Cancer Research Fund International examines how diet, weight and physical activity
                                    affect your risk of developing and surviving cancer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                    <a href="https://www.cancer.gov" target="_blank">
                        <Card className={styles.cardStyle}>
                            <Card.Img variant="top" src={nclLogo}/>
                            <Card.Body className={styles.cardBody}>
                                <Card.Title>National Cancer Institute</Card.Title>
                                <Card.Text>
                                    NCI leads, conducts, and supports cancer research across the nation to advance
                                    scientific knowledge and help all people live longer, healthier lives.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                    <a href="https://www.lung.org" target="_blank">
                        <Card className={styles.cardStyle}>
                            <Card.Img className={styles.cardImg} variant="top" src={alaLogo}/>
                            <Card.Body className={styles.cardBody}>
                                <Card.Title>American Lung Association</Card.Title>
                                <Card.Text>
                                    The American Lung Association is the leading organization working to save lives by
                                    improving lung health and preventing lung disease, through research, education and
                                    advocacy.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </div>
            </div>
        </>
    )
}