import React from 'react';
import Image from 'next/image';
import styles from '../styles/Skills.module.css';
import { SkillList } from '../types/skills';

interface SkillsProps {
  skills: SkillList;
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <>
      <div className={styles.titleContainer}>
         <h2>My Skills</h2>
      </div>
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