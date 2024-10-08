import Skills from './Skills';
import styles from '../styles/Skills.module.css';

const SkillsContainer = () => {
  const mySkills = [
    { name: 'ReactJs', logo: '/images/skills/react-logo.png' },
    { name: 'NextJs', logo: '/images/skills/nextjs-logo.png' },
    { name: 'TypeScript', logo: '/images/skills/typescript-logo.png' },
    { name: 'CSS', logo: '/images/skills/css-logo.png' },
    { name: 'HTML', logo: '/images/skills/html-logo.png' },
    { name: 'JavaScript', logo: '/images/skills/javascript-logo.png' },
    { name: 'FireBase', logo: '/images/skills/firebase-logo.png' },
    { name: 'SQL', logo: '/images/skills/sql-logo.png' },
    { name: 'ReactNative', logo: '/images/skills/reactnative-logo.png' },
  ];

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <Skills skills={mySkills} />
      </div>
    </div>
  );
};

export default SkillsContainer;