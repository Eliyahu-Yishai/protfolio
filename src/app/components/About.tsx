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
                Hi, I&apos;m Eliyahu Yishai, a software engineer,
                I have a passion for creating and developing software applications.
                Specializing in <strong><em>web development</em></strong>, <strong><em>mobile apps</em></strong>, etc.
                <br/>
                <br/>
                My biggest enjoyment in the world of software is to watch how the development happens
                and grows before your eyes, gaining value, volume and seeing the result
                of what I do appear.
                <br/>
                <br/>
                My expertise now spans main languages such as <strong><em>JavaScript</em></strong>, <strong><em>TypeScript</em></strong>
                and also frameworks: <strong><em>React</em></strong>, <strong><em>ReactNative</em></strong>, <strong><em>NextJs</em></strong>.
            </p>
        </div>
      </div>
    );
}

export default About;
