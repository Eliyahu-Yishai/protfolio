import Skills from './Skills';
import styles from '../styles/Skills.module.css';

const SkillsContainer = () => {
  const mySkills = [
    { name: 'React', logo: '/images/skills/react-logo.jpg' },
    { name: 'TypeScript', logo: '/images/skills/typescript-logo.png' },
    { name: 'Node.js', logo: '/images/skills/nodejs-logo.png' },
    { name: 'CSS', logo: '/images/skills/css-logo.png' },
    { name: 'Python', logo: '/images/skills/python-logo.png' },
    { name: 'Python', logo: '/images/skills/python-logo.png' },
    { name: 'Python', logo: '/images/skills/python-logo.png' },
    { name: 'Python', logo: '/images/skills/python-logo.png' },
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