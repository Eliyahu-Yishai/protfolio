import Skills from './Skills';
import styles from '../styles/Skills.module.css';
import skillsData from '../data/skills.json';
import { SkillList } from '../types/skills';

const SkillsContainer = () => {
  const mySkills:SkillList = skillsData.skills;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <Skills skills={mySkills} />
      </div>
    </div>
  );
};

export default SkillsContainer;