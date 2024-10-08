import Image from 'next/image';
import styles from '../styles/about.module.css';

const About:React.FC = () => {
    return (
        <div className={styles.about}>
        <div className={styles.profileImage}>
            <Image 
               className={styles.image} 
               src="/images/profile/profile.png" 
               alt="Eliyahu Yishai" 
               width={420} 
               height={560} />
        </div>
    
        <div className={styles.aboutContent}>
            <h1 className={styles.mainName}>Eliyahu yishai</h1>
            <h1 className={styles.secondTitle}>Software engineering</h1>
            <p className={styles.contentMain}>
                Hi, I'm Eliyahu Yishai, a software engineering student at the Academic
                College of Tel Aviv-Yafo. I have experience in web development, and I
                am looking for a job as a full-stack developer.
            </p>
        </div>
      </div>
    )
}

export default About;