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
                Hi, I'm Eliyahu Yishai, a software engineering 
                 i have a passion for creating and developing software applications.
                 Specializing in web development, mobile apps. 
            </p>
        </div>
      </div>
    )
}

export default About;