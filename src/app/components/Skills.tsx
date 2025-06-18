import React from 'react';
import Image from 'next/image';
import styles from '../styles/Skills.module.css';
import sectionStyles from '../styles/Experience.module.css';
import { SkillList } from '../types/skills';

interface SkillsProps {
  skills: SkillList;
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <>
      <h1 className={sectionStyles.sectionTitle}>My Skills</h1>
      <div className={styles.skillsGrid}>
        {skills.map((skill) => (
          <div key={skill.id} className={styles.skillItem}>
            <Image
              src={skill.logo}
              alt={skill.name}
              width={64}
              height={64}
              className={styles.skillLogo}
            />
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;