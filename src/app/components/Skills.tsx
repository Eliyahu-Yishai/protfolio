import React from 'react';
import Image from 'next/image';
import styles from '../styles/Skills.module.css';
import pic from '../public/images/Skills/react-logo.png';

interface Skill {
  name: string;
  logo: string;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.titleContainer}>
         <h2>My Skills</h2>
      </div>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <Image
              src="/images/Skills/react-logo.png"
              alt={skill.name}
              width={64}
              height={64}
              className={styles.skillLogo}
            />
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;