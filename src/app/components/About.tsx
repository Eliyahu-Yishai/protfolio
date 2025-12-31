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
               Software Engineer building end-to-end web systems with C#, .NET, Angular, TypeScript, and SQL.
            Currently working at Bresleveloper Digital, owning features from backend APIs to clean, usable UIs.
<br></br>
            Alongside my core engineering work, I actively research and build AI-powered solutions, experimenting with LLMs, RAG pipelines, and workflow automation to turn AI into practical, production-ready tools.

            I enjoy solving real problems, bridging technical depth with user needs, and building systems that are smart, scalable, and actually useful.
            </p>
        </div>
      </div>
    );
}

export default About;
