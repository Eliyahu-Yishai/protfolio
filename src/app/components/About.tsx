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
                I&apos;m a Software Engineering graduate from Azrieli College of Engineering in Jerusalem, where I spent four years diving deep into everything from algorithms and design patterns to web development and system architecture.<br/><br/>
                These days, I&apos;m working as a Software Engineer at Bresleveloper Digital, where I build full-stack applications using <b>C#</b>, <b>Angular</b>, and <b>SQL</b>. My daily routine involves developing RESTful APIs on the backend and creating responsive user interfaces that actually make sense to people.<br/><br/>
                I work primarily with <b>C#</b> for backend development, <b>Angular</b> and <b>TypeScript</b> for frontend work, and <b>SQL</b> for database management. I also dabble in <b>Node.js</b>, <b>Python</b>, and have experience with <b>React</b> and <b>Next.js</b> when projects call for it.<br/><br/>
                What I love most about my current role is the variety - one day I&apos;m optimizing database queries, the next I&apos;m refactoring Angular components, and sometimes I&apos;m talking directly with clients to understand what they actually need (which is often different from what they initially ask for).
            </p>
        </div>
      </div>
    );
}

export default About;
