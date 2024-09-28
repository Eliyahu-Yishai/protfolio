import Image from 'next/image';
import profilePic from '../images/profile.png';
import styles from '../styles/page.module.css';

const About:React.FC = () => {
    return (
        <>
        <div className={styles.profileImage}>
            <Image src={profilePic} alt="Eliyahu Yishai" width={380} height={550} />
        </div>
    
        <div className={styles.aboutContent}>
            <h1 className={styles.mainName}>Eliyahu yishai</h1>
            <h1>Software engineering</h1>
            <p className={styles.contentMain}>
                Hi, I'm Eliyahu Yishai, a software engineering student at the Academic
                College of Tel Aviv-Yafo. I have experience in web development, and I
                am looking for a job as a full-stack developer.
            </p>
        </div>
      </>
    )
}

export default About;