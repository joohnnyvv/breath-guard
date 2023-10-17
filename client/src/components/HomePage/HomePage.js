import styles from "../../styles/homePage.module.css";
import homePageBg from "../../assets/home-page-bg.jpg";
import {Link} from "react-router-dom";
import aiPicture from "../../assets/ai.png";
import medicalPicture from "../../assets/medical.png";
import alaLogo from "../../assets/ALAlogo.png";
import nclLogo from "../../assets/NCLlogo.png";
import wcrfiLogo from "../../assets/WCRFILogo.png";
import {Button, Card, Col, Container, Image, Row, Stack} from "react-bootstrap";

export default function HomePage() {
    return (
        <>
            <div className={styles.bgImg} style={{backgroundImage: `url(${homePageBg})`}}>
                <Container fluid className={styles.homePageBody}>
                    <Col xs={2} md={4} lg={6} className={styles.titleWrapper}>
                        <Stack>
                            <h1>Breath Guard</h1><br/>
                            <h2>Ai-powered Lung Cancer Risk Predictor</h2>
                            <Link to="/prediction">
                                <Button className={styles.startButton} size="lg">Get Started</Button>
                            </Link>
                        </Stack>
                    </Col>
                </Container>
            </div>
            <Container fluid className={styles.predictorSectionBody}>
                <Row className='my-3 text-center'>
                    <h2 style={{fontWeight: "bold"}}>Ai-Powered Predictor</h2>
                </Row>
                <Row className={`mb-3 ${styles.predictorDesc}`}>
                    <Col lg={6} className='d-flex justify-content-center'>
                        <h3 style={{width: "70%"}}>The artificial intelligence model uses a dataset from the <a
                            href="https://www.kaggle.com/datasets/thedevastator/cancer-patients-and-air-pollution-a-new-link"
                            target="_blank">
                            Kaggle
                        </a> platform.
                            Lung cancer is the leading cause of cancer death worldwide, accounting for
                            1.59 million deaths in 2018. The majority of lung cancer cases are attributed to smoking,
                            but exposure to air pollution is also a risk factor. A new study has found that air
                            pollution
                            may be linked to an increased risk of lung cancer, even in nonsmokers.<br/><br/>
                            The study, which was published in
                            the journal Nature Medicine, looked at data from over 462,000 people in China who were
                            followed
                            for an average of six years. The participants were divided into two groups: those who lived
                            in
                            areas with high levels of air pollution and those who lived in areas with low levels of air
                            pollution.</h3>
                    </Col>
                    <Col lg={6}>
                        <Image fluid src={aiPicture} alt="Ai Picture" className={styles.aiPicture}/>
                    </Col>
                </Row>
            </Container>
            <Container fluid className={styles.preventionSectionBody}>
                <Row className='mt-5 text-center'>
                    <h2 style={{fontWeight: "bold"}}>Prevention Is Worth It</h2>
                </Row>
                <Row className={`my-5 ${styles.preventionDesc}`}>
                    <Col lg={6}>
                        <Image fluid src={medicalPicture} alt="Doctor" className={styles.doctorPicture}/>
                    </Col>
                    <Col lg={6} className='d-flex justify-content-center'>
                        <h3 style={{width: "70%"}}>In the pursuit of a healthier and happier life, taking proactive
                            steps to
                            safeguard your well-being is paramount. Research has shown that even small changes in our
                            daily
                            routines can make a significant difference in preventing diseases, including lung
                            cancer.<br/><br/>
                            Preventing lung cancer is a shared responsibility. By taking care of our health, we're not
                            only
                            enhancing our own lives but also contributing to healthier communities. Together, we can
                            reduce
                            the impact of lung cancer and improve our quality of life.</h3>
                    </Col>
                </Row>
            </Container>
            <Container className={styles.addResourcesBody}>
                <Row className='my-3 text-center'>
                    <h2 style={{fontWeight: "bold"}}>Additional Information On Lung Cancer And Prophylaxis</h2>
                </Row>
                <Row className='align-content-center'>
                    <Col lg={4} className='my-1'>
                        <a href="https://www.wcrf.org" target="_blank">
                            <Card className={styles.cardStyle}>
                                <Card.Img variant="top" src={wcrfiLogo}/>
                                <Card.Body className={styles.cardBody}>
                                    <Card.Title>World Cancer Research Fund</Card.Title>
                                    <Card.Text>
                                        World Cancer Research Fund International examines how diet, weight and physical
                                        activity
                                        affect your risk of developing and surviving cancer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col lg={4} className='my-1'>
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
                    </Col>
                    <Col lg={4} className='my-1'>
                        <a href="https://www.lung.org" target="_blank">
                            <Card className={styles.cardStyle}>
                                <Card.Img className={styles.cardImg} variant="top" src={alaLogo}/>
                                <Card.Body className={styles.cardBody}>
                                    <Card.Title>American Lung Association</Card.Title>
                                    <Card.Text>
                                        The American Lung Association is the leading organization working to save lives
                                        by
                                        improving lung health and preventing lung disease, through research, education
                                        and
                                        advocacy.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                </Row>
            </Container>
        </>
    )
}