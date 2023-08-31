import {AiOutlineMail, AiFillPhone, AiFillLinkedin} from "react-icons/ai";
import {FaGithubSquare} from "react-icons/fa";
import styles from "../../styles/footer.module.css";

export default function Footer() {

    return (
        <div className={styles.footerBody}>
            <a
                href='mailto:janekrembikowski@gmail.com?subject=Question about the BreathGuard app'
                target="_blank">
                <AiOutlineMail style={{height: "30px", width: "auto"}}/>
            </a>
            <a href="https://github.com/joohnnyvv" target="_blank">
                <FaGithubSquare style={{height: "30px", width: "auto"}}/>
            </a>
            <a href="https://www.linkedin.com/in/jan-rembikowski/" target="_blank">
                <AiFillLinkedin style={{height: "30px", width: "auto"}}/>
            </a>
            <a href="tel:123-456-789" target="_blank">
                <AiFillPhone style={{height: "30px", width: "auto"}}/>
            </a>
        </div>
    )
}