import {AiOutlineMail, AiFillPhone, AiFillLinkedin} from "react-icons/ai";
import {FaGithubSquare} from "react-icons/fa";
import styles from "../../styles/footer.module.css";

export default function Footer() {

    return (
        <div className={styles.footerBody}>
            <a
                href='mailto:janekrembikowski@gmail.com?subject=Question about the BreathGuard app'
                target="_blank"
                className={styles.mediaLink}>
                <AiOutlineMail style={{height: "30px", width: "auto"}}/>
            </a>
            <a href="https://github.com/joohnnyvv" target="_blank" className={styles.mediaLink}>
                <FaGithubSquare style={{height: "30px", width: "auto"}}/>
            </a>
            <a href="https://www.linkedin.com/in/jan-rembikowski/" target="_blank" className={styles.mediaLink}>
                <AiFillLinkedin style={{height: "30px", width: "auto"}}/>
            </a>
            <a href="tel:123-456-789" target="_blank" className={styles.mediaLink}>
                <AiFillPhone style={{height: "30px", width: "auto"}}/>
            </a>
        </div>
    )
}